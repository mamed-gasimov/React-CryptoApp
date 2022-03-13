import { FC } from 'react'
import { Link } from 'react-router-dom';
import { Space, Typography } from 'antd';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                <Link to="/" className={styles['app-name']}>
                    CryptoApp
                </Link>
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </footer>
    )
}

export default Footer;