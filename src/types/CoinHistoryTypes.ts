export type CoinHistoryType = {
    change: string;
    history: CoinHistoryPoint[];
}

type CoinHistoryPoint = {
    price: string;
    timestamp: number;
}