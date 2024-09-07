export interface Payment {
  id: string;
  amount: number;
  currency: string;
}

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
