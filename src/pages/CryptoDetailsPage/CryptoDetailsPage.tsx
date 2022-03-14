import { FC, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import millify from 'millify';
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import { CoinDetailedType } from '../../types/CoinTypes';
import { getStats } from './helper';
import { CoinStats, LineChart, Loader } from '../../components';
import { colors } from '../../utils/colors';
import styles from './CryptoDetailsPage.module.css';
import { CoinHistoryType } from '../../types/CoinHistoryTypes';

type CryptoDetailsPageParamsType = {
    coinId: string;
}

const CryptoDetailsPage: FC = () => {
    const { Title } = Typography;
    const { Option } = Select;
    const { coinId } = useParams<CryptoDetailsPageParamsType>();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });

    const cryptoDetails = data?.data?.coin as CoinDetailedType;
    const { stats, genericStats } = getStats(cryptoDetails);

    if (isFetching) return <Loader />;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    return (
        <Col className={styles['coin-detail-container']}>
            <Col className={styles['coin-heading-container']}>
                <Title level={2} className={styles['coin-name']} style={{ color: colors.lightBlue }}>
                    {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
                </Title>
                <p>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Select
                defaultValue="7d"
                className={styles['select-timeperiod']}
                placeholder="Select Timeperiod"
                onChange={(value) => setTimePeriod(value)}
            >
                {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            <LineChart
                coinHistory={coinHistory?.data as CoinHistoryType}
                currentPrice={millify(+cryptoDetails?.price)}
                coinName={cryptoDetails?.name}
            />
            <Col className={styles['stats-container']}>
                <CoinStats
                    coinDetailsHeading={`${cryptoDetails.name} Value Statistics`}
                    cryptoName={cryptoDetails.name}
                    stats={stats}
                />
                <CoinStats
                    coinDetailsHeading='Other Stats Info'
                    cryptoName={cryptoDetails.name}
                    stats={genericStats}
                />
            </Col>
            <Col className={styles['coin-desc-link']}>
                <Row className={styles['coin-desc']}>
                    <Title level={3} className={styles['coin-details-heading']} style={{ color: colors.lightBlue }}>
                        What is {cryptoDetails.name}?
                    </Title>
                    {HTMLReactParser(cryptoDetails.description)}
                </Row>
                <Col className={styles['coin-links']}>
                    <Title level={3} className={styles['coin-details-heading']} style={{ color: colors.lightBlue }}>
                        {cryptoDetails.name} Links
                    </Title>
                    {cryptoDetails.links?.map((link) => (
                        <Row className={styles['coin-link']} key={link.url}>
                            <Title level={5} className={styles['link-name']}>{link.type}</Title>
                            <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                        </Row>
                    ))}
                </Col>
            </Col>
        </Col>
    );
};

export default CryptoDetailsPage;