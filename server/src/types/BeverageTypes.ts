export type Beverage = {
  type: BeverageType;
  name: string;
  weight: number;
  price: number;
  roast?: number;
}

export enum BeverageType {
  Unknown = 0,
  Coffee = 1,
  Tea = 2,
}