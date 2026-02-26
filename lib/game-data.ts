import gameData from "@/public/datas/game_list.json";
import type { GameData } from "@/lib/types";

export function getGameData(): GameData {
  return gameData as GameData;
}
