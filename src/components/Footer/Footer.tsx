import { FC } from 'react'
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                <Link to="/" className={styles['app-name']}>
                    CryptoApp
                </Link>
            </Typography.Title>
        </footer>
    )
}

export default Footer;