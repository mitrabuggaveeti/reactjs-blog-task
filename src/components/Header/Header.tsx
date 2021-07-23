import styles from './header.module.css';
import * as headerConstants from './Constants';

const Header : React.FC = () => {
    return (
        <div className={styles.head} data-testid="header">
            <span>{headerConstants.TITLE}</span>
        </div>
    )
}

export default Header
