document.addEventListener("DOMContentLoaded", async function () {
  // load game list
  const gameList = await loadGameList();
  // Get the form element
  const gameListContainer = document.querySelector(".game-list");
  // Loop through the game list and create a card for each game
  gameList.forEach((game) => {
        const card = document.createElement("div");
        card.classList.add("game-card");
        card.innerHTML = `<img src="assets/images/${game.id}.png" alt="${game.name}" loading="lazy" />
                            <div class="game-info">
                                <h3>${game.name}</h3>
                                <p title="${game.description}">
                                    ${game.description}
                                </p>
                            </div>
                            <div class="play-game">
                                <a href="https://html-online-game.github.io/${game.id}/" target="_blank">
                                    Play
                                </a>
                            </div>`
        gameListContainer.appendChild(card);
    })
});

async function loadGameList() {
  const response = await fetch(
    "https://html-online-game.github.io/datas/game_list.json"
  );
  const gameList = await response.json();
  return gameList;
}
