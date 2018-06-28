export interface Item {
  title: string;
  description: string;
  date: number;
  id: string;
  stock: number;
}

export interface ItemsState {
  isLoading: boolean;
  list: Item[];
  error: any;
}