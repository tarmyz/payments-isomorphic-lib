export interface Payment {
  id: string;
  amount: number;
  currency: string;
}

export enum ERRORS {
  UNAUTHORIZED = "unauthorized",
  APIKEY_MISSING = "apiKey missing",
  CHAINID_MISSING = "chainId missing",
}

export type SUCCESS = "success";

export type Status = SUCCESS | ERRORS;

export interface Token {
  name: string;
  logo: string;
  address: string;
  dec: number;
}

export interface Chain {
  name: string;
  logo: string;
  id: string;
  tokens: Token[];
}
