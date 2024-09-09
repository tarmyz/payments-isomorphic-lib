import { Token } from "../../../types/token.type";
import { arbitrum, polygon } from "../chains";
import { IMAGES_BASE_URL } from "../..";
import { ChainIds } from "../chains";

export const USDT = new Token({
  name: "Tether USD",
  symbol: "USDT",
  logoUrl: `${IMAGES_BASE_URL}/tokens/usdt.svg`,
  decimals: 6,
  addresses: {
    [ChainIds.ARBITRUM_CHAIN_ID]: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    [ChainIds.POLYGON_CHAIN_ID]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  },
});
