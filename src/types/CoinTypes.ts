export interface CoinType {
    '24hVolume': string;
    btcPrice: string;
    change: string;
    coinrankingUrl: string;
    color: string;
    iconUrl: string;
    listedAt: number;
    lowVolume: boolean;
    marketCap: string;
    name: string;
    price: string;
    rank: number;
    sparkLine: string[];
    symbol: string;
    tier: number;
    uuid: string;
}
export interface CoinDetailedType extends CoinType {
    priceAt: number;
    supply: CoinSupplyType;
    websiteUrl: string;
    description: string;
    numberOfExchanges: number;
    numberOfMarkets: number;
    allTimeHigh: CoinAllTimeHighType;
    links: CoinLinkType[];
}
type CoinSupplyType = {
    circulating: string;
    confirmed: boolean;
    total: string;
}
type CoinAllTimeHighType = {
    price: string;
    timestamp: number;
}
type CoinLinkType = {
    name: string;
    type: string;
    url: string;
}