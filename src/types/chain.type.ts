import { Token, SupportedToken } from "./token.type";

export class Chain {
  chainId: number;
  name: string;
  logoUrl: string;
  tokens: SupportedToken[];
  // Optional fields
  explorerUrl?: string;
  rpcUrls?: string[];
  explorerApiKey?: string;
  explorerApiUrl?: string;

  constructor({ name, logoUrl, chainId, tokens }: { name: string; logoUrl: string; chainId: number; tokens: Token[] }) {
    this.name = name;
    this.logoUrl = logoUrl;
    this.chainId = chainId;
    this.tokens = tokens.map((token: Token) => ({
      name: token.name,
      symbol: token.symbol,
      logo: token.logoUrl,
      decimals: token.decimals,
      address: token.getAddress(chainId),
    }));
  }
}
