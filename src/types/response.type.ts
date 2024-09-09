export enum ERRORS {
  UNAUTHORIZED = "Unauthorized",
  APIKEY_MISSING = "apiKey missing",
  CHAINID_MISSING = "chainId missing",
}

export interface MissingArgsErrorResponse {
  message: string;
  missingArgs: string[];
}

export type SUCCESS = "success";

export type Status = SUCCESS | ERRORS;

export interface PaymentResponse {
  id: string;
  amount: number;
  currency: string;
}
