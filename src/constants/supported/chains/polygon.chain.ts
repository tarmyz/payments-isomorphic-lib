import { Chain } from "../../../types";
import { USDT } from "../tokens";
import { IMAGES_BASE_URL } from "../..";
import { ChainIds } from ".";

export const polygon: Chain = new Chain({
  name: "Polygon",
  logoUrl: `${IMAGES_BASE_URL}/networks/polygon.svg`,
  chainId: ChainIds.POLYGON_CHAIN_ID,
  tokens: [USDT],
  confirmationBlocks: 20,
});
