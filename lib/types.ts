export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Game = {
  id: string;
  name: string;
  category: string;
  description: string;
  featured?: boolean;
  rating?: number;
};

export type GameData = {
  categories: Category[];
  games: Game[];
};
