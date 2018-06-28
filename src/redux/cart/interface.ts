export interface Item {
  title: string;
  date: number;
  id: string;
}

export interface CartState {
  isLoading: boolean;
  list: Item[];
  error: any;
}