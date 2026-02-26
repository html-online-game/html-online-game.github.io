"use client";

import { useMemo, useState } from "react";
import type { Category, Game } from "@/lib/types";

type GameBrowserProps = {
  categories: Category[];
  games: Game[];
};

export default function GameBrowser({ categories, games }: GameBrowserProps) {
  const [currentFilter, setCurrentFilter] = useState("all");

  const filteredGames = useMemo(() => {
    const baseGames =
      currentFilter === "all"
        ? [...games]
        : games.filter((game) => game.category === currentFilter);

    baseGames.sort((a, b) => {
      const aFeatured = Boolean(a.featured);
      const bFeatured = Boolean(b.featured);

      if (aFeatured && !bFeatured) {
        return -1;
      }

      if (!aFeatured && bFeatured) {
        return 1;
      }

      const aRating = a.rating ?? 0;
      const bRating = b.rating ?? 0;
      return bRating - aRating;
    });

    return baseGames;
  }, [currentFilter, games]);

  return (
    <>
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${category.id === currentFilter ? "active" : ""}`}
            onClick={() => setCurrentFilter(category.id)}
            type="button"
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      <div className="game-count">
        <span>{filteredGames.length}</span> games available
      </div>

      <div className="game-list">
        {filteredGames.length === 0 ? (
          <div className="no-games">
            <h3>No games found</h3>
            <p>Try selecting a different category</p>
          </div>
        ) : (
          filteredGames.map((game, index) => (
            <article
              key={game.id}
              className="game-card floating"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => {
                window.location.href = `https://html-online-game.github.io/${game.id}`;
              }}
            >
              <div className="game-thumbnail">
                <img
                  src={`/images/${game.id}.png`}
                  alt={game.name}
                  loading="lazy"
                />
              </div>
              <div className="game-title">{game.name}</div>
              <div
                className="game-description line-clamp-3"
                title={game.description}
              >
                {game.description}
              </div>
              <div className="game-category">
                {categories.find((cat) => cat.id === game.category)?.name ??
                  game.category}
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
