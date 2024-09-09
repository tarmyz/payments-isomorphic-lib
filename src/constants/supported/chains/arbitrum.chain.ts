import { Chain } from "../../../types";
import { IMAGES_BASE_URL } from "../..";
import { USDT } from "../tokens";
import { ChainIds } from ".";

export const arbitrum: Chain = new Chain({
  name: "Arbitrum",
  logoUrl: `${IMAGES_BASE_URL}/networks/arb.svg`,
  chainId: ChainIds.ARBITRUM_CHAIN_ID,
  tokens: [USDT],
});
