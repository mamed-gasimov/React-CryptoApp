import { FC } from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { StatsType } from '../../types/StatsTypes';
import { CryptocurrenciesPage, NewsPage } from '../';
import { Loader } from '../../components';
import styles from './HomePage.module.css';

const HomePage: FC = () => {
    const { Title } = Typography;
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats as StatsType;

    if (isFetching) return <Loader />;

    return (
        <>
            <Title level={2} className={styles.heading}>Global Crypto Stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={globalStats.total} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap:' value={millify(+globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h Volume' value={millify(+globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={millify(globalStats.totalCoins)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} />
                </Col>
            </Row>
            <div className={styles['home-heading-container']}>
                <Title level={2} className='home-title'>Top 10 Cryptos In The World</Title>
                <Title level={3} className={styles['show-more']}>
                    <Link to='/cryptocurrencies'>Show more</Link>
                </Title>
            </div>
            <CryptocurrenciesPage simplified />
            <div className={styles['home-heading-container']}>
                <Title level={2} className={styles['home-title']}>Latest Crypto News</Title>
                <Title level={3}><Link to="/news">Show more</Link></Title>
            </div>
            <NewsPage simplified />
        </>
    )
}

export default HomePage;