import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import {
    HomeOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import icon from '../../assets/images/cryptocurrency.png';
import { colors } from '../../utils/colors';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>();
    const [hamburgerIsVisible, setHamburgerIsVisible] = useState<boolean>();
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
            setHamburgerIsVisible(true);
        } else {
            setActiveMenu(true);
            setHamburgerIsVisible(false);
        }
    }, [screenSize]);

    return (
        <nav>
            <div className={styles['nav-container']}>
                <div className={styles['logo-container']}>
                    <div className={styles['logo-wrapper']}>
                        <Avatar src={icon} size="large" />
                        <Typography.Title level={2} className={styles['logo']} style={{ marginBottom: 0 }}>
                            <Link to='/'>CryptoApp</Link>
                        </Typography.Title>
                    </div>
                    <div className={styles['hamburger-wrapper']}>
                        {hamburgerIsVisible &&
                            <Button className={styles['menu-control-container']}
                                onClick={() => setActiveMenu(prev => !prev)}
                                style={{ marginBottom: 15, backgroundColor: colors.white }}
                            >
                                <MenuOutlined />
                            </Button>
                        }
                    </div>

                </div>
                {activeMenu && (
                    <Menu theme="dark">
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link to="/news">News</Link>
                        </Menu.Item>
                    </Menu>
                )}
            </div>
        </nav>
    )
}

export default Navbar;