import { supportedChains } from "./constants/supported/chains";
import { USDT } from "./constants/supported/tokens";

// check that every chain has at least one token
supportedChains.forEach((chain) => {
  if (chain.tokens.length === 0) {
    throw new Error(`Chain ${chain.name} has no tokens`);
  }
});
