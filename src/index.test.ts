import { processPayment } from "./lib";

console.log(processPayment({ id: "unique-id", amount: 100, currency: "USD" }));
