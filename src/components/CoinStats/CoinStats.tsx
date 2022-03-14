import { FC } from 'react';
import { Col, Typography } from 'antd';
import { CoinStatsArrayType } from '../../pages/CryptoDetailsPage/helper';
import { colors } from '../../utils/colors';
import styles from './CoinStats.module.css';

interface Props {
    isGenericStats?: boolean;
    stats: CoinStatsArrayType[];
    coinDetailsHeading: string;
    cryptoName: string;
}

const CoinStats: FC<Props> = ({ stats, coinDetailsHeading, cryptoName }) => {
    const { Title, Text } = Typography;

    return (
        <Col>
            <Col className={styles['coin-value-statistics-heading']}>
                <Title level={3} className={styles['coin-details-heading']} style={{ color: colors.lightBlue }}>
                    {coinDetailsHeading}
                </Title>
                <p>An overview showing the statistics of ${cryptoName},
                    such as the base and quote currency, the rank, and trading volume.</p>
            </Col>
            {stats.map(({ icon, title, value }, index) => (
                <Col className={styles['coin-stats']} key={index} style={{ borderColor: colors.lightGrey }}>
                    <Col className={styles['coin-stats-name']}>
                        <Text>{icon}</Text>
                        <Text>{title}</Text>
                    </Col>
                    <Text className={styles.stats}>{value}</Text>
                </Col>
            ))}
        </Col>
    )
}

export default CoinStats;
