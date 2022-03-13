import { FC, useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { Loader } from '../../components';
import { NewsType } from '../../types/NewsTypes';
import { CoinType } from '../../types/CoinTypes';
import styles from './NewsPage.module.css';

interface Props {
    simplified?: boolean;
}

const NewsPage: FC<Props> = ({ simplified }) => {
    const { Text, Title } = Typography;
    const { Option } = Select;
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data } = useGetCryptosQuery(100);
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

    if (!cryptoNews?.value) return <Loader />;

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className={styles['select-news']}
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={
                            (input, option) => String(option?.children)?.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {data?.data?.coins?.map(
                            (currency: CoinType) => (
                                <Option key={currency.iconUrl} value={currency.name}>{currency.name}</Option>
                            )
                        )}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news: NewsType) => (
                <Col xs={24} sm={12} lg={8} key={news.url}>
                    <Card hoverable className={styles['news-card']}>
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className={styles['news-image-container']}>
                                <Title className={styles['news-title']} level={4}>{news.name}</Title>
                                <img
                                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                                    alt={`news image: ${news.name}`}
                                />
                            </div>
                            <p>{
                                news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description
                            }</p>
                            <div className={styles['provider-container']}>
                                <div>
                                    <Avatar
                                        src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                                        alt={`news provider: ${news.provider[0]?.name}`}
                                    />
                                    <Text className={styles['provider-name']}>{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('second').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default NewsPage;