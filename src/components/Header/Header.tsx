import styles from './header.module.css';

const Header : React.FC = () => {
    return (
        <div className={styles.head} data-testid="header">
            <span>EPAM BLOG</span>
        </div>
    )
}

export default Header
