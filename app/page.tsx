import AdSlot from "@/components/ad-slot";
import GameBrowser from "@/components/game-browser";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getGameData } from "@/lib/game-data";

export default function HomePage() {
  const data = getGameData();

  return (
    <>
      <SiteHeader active="home" />
      <div className="container">
        <div className="main-layout">
          <main className="game-container">
            <h2>Game Collection</h2>
            <GameBrowser categories={data.categories} games={data.games} />
            <AdSlot slot="2343374539" />
            <AdSlot slot="9336691129" />
          </main>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
