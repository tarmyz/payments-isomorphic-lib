import { PaymentsAPI } from "../types";

export const API_BASE_URL = "https://api.tarmyz.ae";
export const API_BASE_PATH = "/payments";
export const API_VERSION = "v1";
export const PAYMENTS_API: PaymentsAPI = {
  BASE_URL: "https://api.tarmyz.ae/payments/v1",
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
