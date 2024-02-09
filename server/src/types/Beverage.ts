export type Beverage = {
  type: BeverageType;
  name: string;
  weight: number;
  price: number;
  roast?: number;
}

export enum BeverageType {
  Coffee = 0,
  Tea = 1,
}