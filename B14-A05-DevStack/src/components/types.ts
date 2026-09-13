export interface TechnologyItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export interface TechnologiProps {
  technology: TechnologyItem;
  onAdd: (tech: TechnologyItem) => void;
  isAdded: boolean;
}

export interface TechnologiesProps {
  loadDataPromise?: Promise<TechnologyItem[]>;
}
