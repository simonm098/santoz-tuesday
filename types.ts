
export enum Category {
  GEARBOX = 'Gearboxes',
  ENGINE = 'Engines',
  SUSPENSION = 'Suspension',
  BODY_PARTS = 'Body Parts'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
