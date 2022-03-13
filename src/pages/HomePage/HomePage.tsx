import { FC } from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import styles from './HomePage.module.css';

const HomePage: FC = () => {
    const { Title } = Typography;

    return (
        <>
            <Title level={2} className={styles.heading}>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={5} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={5} /></Col>
                <Col span={12}><Statistic title='Total Market Cap:' value={5} /></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={5} /></Col>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={5} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={5} /></Col>
            </Row>
            <div className={styles['home-heading-container']}>
                <Title level={2} className='home-title'>Top 10 Cryptos In The World</Title>
                <Title level={3} className={styles['show-more']}>
                    <Link to='/cryptocurrencies'>Show more</Link>
                </Title>
            </div>
            <div className={styles['home-heading-container']}>
                <Title level={2} className={styles['home-title']}>Latest Crypto News</Title>
                <Title level={3}><Link to="/news">Show more</Link></Title>
            </div>
        </>
    )
}

export default HomePage;