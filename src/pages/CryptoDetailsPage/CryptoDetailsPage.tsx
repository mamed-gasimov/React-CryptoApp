import { FC, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import {
    MoneyCollectOutlined,
    DollarCircleOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    TrophyOutlined,
    CheckOutlined,
    NumberOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import { Loader } from '../../components';
import { useGetCryptoDetailsQuery } from '../../services/cryptoApi';
import { CoinDetailedType } from '../../types/CoinTypes';

type CryptoDetailsPageParamsType = {
    coinId: string;
}

const CryptoDetailsPage: FC = () => {
    const { Title, Text } = Typography;
    const { Option } = Select;
    const { coinId } = useParams<CryptoDetailsPageParamsType>();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin as CoinDetailedType;

    if (isFetching) return <Loader />;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    return (
        <div>CryptoDetailsPage</div>
    )
}

export default CryptoDetailsPage;