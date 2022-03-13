import { Spin } from 'antd';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.loader}>
        <Spin />
    </div>
);

export default Loader;