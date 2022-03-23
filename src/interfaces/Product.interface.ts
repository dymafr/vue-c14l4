import type { Category } from './type';

export interface ProductInterface {
  _id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}
