import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import styles from './Navbar.module.css';
import icon from '../../assets/images/cryptocurrency.png';

const Navbar: FC = () => {
    return (
        <nav>
            <div className={styles['nav-container']}>
                <div className={styles['logo-container']}>
                    <Avatar src={icon} size="large" />
                    <Typography.Title level={2} className={styles['logo']}>
                        <Link to='/'>CryptoApp</Link>
                    </Typography.Title>
                    {/* <Button className={styles['menu-control-container']}>
                </Button> */}
                </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </nav>
    )
}

export default Navbar;