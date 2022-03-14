import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { CoinHistoryType } from '../../types/CoinHistoryTypes';
import { colors } from '../../utils/colors';
import styles from './LineChart.module.css';

interface Props {
    coinHistory: CoinHistoryType;
    currentPrice: string;
    coinName: string;
}

const LineChart: FC<Props> = ({ coinHistory, currentPrice, coinName }) => {
    const { Title } = Typography;
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.history?.length; i += 1) {
        coinPrice.push(+coinHistory?.history[i]?.price);
    }

    for (let i = 0; i < coinHistory?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.history[i]?.timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: colors.lightBlue,
                borderColor: colors.lightBlue,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className={styles['chart-header']}>
                <Title level={2} className={styles['chart-title']}>
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className={styles['price-change']}>
                        Change: {coinHistory?.change}%
                    </Title>
                    <Title level={5} className={styles['current-price']}>
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart;