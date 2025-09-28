document.addEventListener("DOMContentLoaded", async function () {
  initializeApp();
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("mobile-open");

      const hamburger = this.querySelector(".hamburger");
      if (mobileNav.classList.contains("mobile-open")) {
        hamburger.textContent = "✕";
      } else {
        hamburger.textContent = "☰";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !mobileNav.contains(event.target)
      ) {
        mobileNav.classList.remove("mobile-open");
        menuToggle.querySelector(".hamburger").textContent = "☰";
      }
    });

    // Close menu when clicking on nav links
    const navLinks = mobileNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("mobile-open");
        menuToggle.querySelector(".hamburger").textContent = "☰";
      });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

async function loadGameList() {
  const response = await fetch(
    "https://html-online-game.github.io/datas/game_list.json"
  );
  const gameList = await response.json();
  return gameList;
}

// Global variables
let allGames = [];
let allCategories = [];
let currentFilter = "all";
// UI Rendering Functions
function renderCategories(categories) {
  const categoryFilter = document.getElementById("categoryFilter");
  const categoryHTML = categories
    .map(
      (category) => `
          <button class="category-btn ${
            category.id === "all" ? "active" : ""
          }" data-category="${category.id}">
            ${category.icon} ${category.name}
          </button>
        `
    )
    .join("");

  categoryFilter.innerHTML = categoryHTML;

  // Add event listeners
  const categoryBtns = categoryFilter.querySelectorAll(".category-btn");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");
      currentFilter = category;
      filterGames(category);
    });
  });
}

function renderGames(games) {
  const gameList = document.getElementById("gameList");

  if (games.length === 0) {
    gameList.innerHTML = `
            <div class="no-games">
              <h3>No games found</h3>
              <p>Try selecting a different category</p>
            </div>
          `;
    return;
  }

  const gamesHTML = games
    .map(
      (game) => `
          <div class="game-card" data-category="${
            game.category
          }" data-game-id="${game.id}">
            <div class="game-thumbnail"><img src="assets/images/${
              game.id
            }.png" alt="${game.name}" loading="lazy" /></div>
            <div class="game-title">${game.name}</div>
            <div class="game-description line-clamp-3" title="${
              game.description
            }">${game.description}</div>
            <div class="game-category">${getCategoryName(game.category)}</div>
            <div class="game-stats">
            </div>
          </div>
        `
    )
    .join("");

  gameList.innerHTML = gamesHTML;

  // Add click handlers for game cards
  const gameCards = gameList.querySelectorAll(".game-card");
  gameCards.forEach((card) => {
    card.addEventListener("click", function () {
      const gameId = this.getAttribute("data-game-id");
      const game = allGames.find((g) => g.id == gameId);
      if (game?.id) {
        window.location.href = `https://html-online-game.github.io/${game.id}`;
      }
    });
  });

  // Add animations
  gameCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("floating");
  });
}

function filterGames(category) {
  let filteredGames = allGames;

  if (category !== "all") {
    filteredGames = allGames.filter((game) => game.category === category);
  }

  // Sort featured games first
  filteredGames.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating - a.rating;
  });

  renderGames(filteredGames);
  updateGameCount(filteredGames.length);
}

function updateGameCount(count) {
  const gameCount = document.getElementById("gameCount");
  gameCount.textContent = count;
}

function getCategoryName(categoryId) {
  const category = allCategories.find((cat) => cat.id === categoryId);
  return category ? category.name : categoryId;
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
}

// Initialize the application
async function initializeApp() {
  try {
    // load game list
    const datas = await loadGameList();
    // Load categories
    allCategories = datas.categories;
    renderCategories(allCategories);

    // Load games
    allGames = datas.games;
    filterGames(currentFilter);
  } catch (error) {
    console.error("Failed to initialize app:", error);
    document.getElementById("categoryFilter").innerHTML =
      "<p>Failed to load categories</p>";
    document.getElementById("gameList").innerHTML =
      "<p>Failed to load games</p>";
  }
}

// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
