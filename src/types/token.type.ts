export type TokenChainsAddresses = {
  [chainId: number]: string;
};

export interface SupportedToken {
  name: string;
  symbol: string;
  logo: string;
  decimals: number;
  address: string;
}

export class Token {
  name: string;
  symbol: string;
  logoUrl: string;
  decimals: number;
  addresses: TokenChainsAddresses;

  constructor({
    name,
    symbol,
    logoUrl,
    decimals,
    addresses,
  }: {
    name: string;
    symbol: string;
    logoUrl: string;
    decimals: number;
    addresses: TokenChainsAddresses;
  }) {
    this.name = name;
    this.symbol = symbol;
    this.logoUrl = logoUrl;
    this.decimals = decimals;
    this.addresses = addresses;
  }

  // Get token address by chain ID
  getAddress(chainId: number): string {
    return this.addresses[chainId];
  }
}
