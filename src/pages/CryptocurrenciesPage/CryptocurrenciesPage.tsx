import { FC, useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import styles from './CryptocurrenciesPage.module.css';
import { CoinType } from '../../types/CoinTypes';

interface Props {
    simplified?: boolean;
}

const CryptocurrenciesPage: FC<Props> = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState<CoinType[]>();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins as CoinType[]);

        const filteredData = cryptosList?.data?.coins.filter(
            (item: CoinType) => item.name.toLowerCase().includes(searchTerm)
        );

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <p>Loading...</p>;

    return (
        <>
            {!simplified && (
                <div className={styles['search-crypto']}>
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                </div>
            )}
            <Row gutter={[32, 32]} className={styles['crypto-card-container']}>
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className={styles['crypto-card']}
                        key={currency.uuid}
                    >
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className={styles['crypto-image']} src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(+currency.price)}</p>
                                <p>Market Cap: {millify(+currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CryptocurrenciesPage;