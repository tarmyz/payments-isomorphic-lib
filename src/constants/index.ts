import { PaymentsAPI } from "../types";

export const API_BASE_URL = "https://api.tarmyz.ae";
export const PAYMENTS_API: PaymentsAPI = {
  BASE_URL: "https://api.tarmyz.ae/v1/payments",
  HEALTH: "/health",
  PAY: "/pay",
  GET_PAYMENT_INFO: "/get-payment-info",
};
export const IMAGES_BASE_URL =
  "https://raw.githubusercontent.com/tarmyz/payments-isomorphic-lib/main/src/assets/images";
export const TIMEOUT = 5000;

// export chains
export * from "./supported/chains";

// export tokens
export * from "./supported/tokens";
