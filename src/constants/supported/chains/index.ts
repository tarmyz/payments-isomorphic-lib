import { arbitrum } from "./arbitrum.chain";
import { polygon } from "./polygon.chain";

export * from "./arbitrum.chain";
export * from "./polygon.chain";

export const supportedChains = [arbitrum, polygon];
export const enum ChainIds {
  ARBITRUM_CHAIN_ID = 42161,
  POLYGON_CHAIN_ID = 137,
}
