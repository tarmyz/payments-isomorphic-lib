export type BASE_URL = "https://tarmyz.com/api/payments";
export type HEALTH = "/health";
export type PAY = "/pay";
export type GET_PAYMENT_INFO = "/get-payment-info";

export type PaymentsAPI = {
  BASE_URL: BASE_URL;
  HEALTH: HEALTH;
  PAY: PAY;
  GET_PAYMENT_INFO: GET_PAYMENT_INFO;
};

export const PAYMENTS_API: PaymentsAPI = {
  BASE_URL: "https://tarmyz.com/api/payments",
  HEALTH: "/health",
  PAY: "/pay",
  GET_PAYMENT_INFO: "/get-payment-info",
};
