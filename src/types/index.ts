export * from "./chain.type";
export * from "./response.type";

export interface Payment {
  id: string;
  amount: number;
  currency: string;
}
