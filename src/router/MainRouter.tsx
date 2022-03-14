import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    CryptocurrenciesPage,
    CryptoDetailsPage,
    HomePage,
    NewsPage,
} from '../pages';

const MainRouter: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/cryptocurrencies">
                <CryptocurrenciesPage />
            </Route>
            <Route exact path="/crypto/:coinId">
                <CryptoDetailsPage />
            </Route>
            <Route exact path="/news">
                <NewsPage />
            </Route>
        </Switch>
    )
}

export default MainRouter;