import { HeartIcon } from '../../../shared/ui/icons/hearticon/HeartIcon';
import { NotificationIcon } from '../../../shared/ui/icons/notificationicon/NotificationIcon';
import logo from '../assets/logo.png';
import flamingo from '../../../shared/assets/flamingo.jpg';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.header__controls}>
                <div className={styles.header__icons}>
                    <NotificationIcon />
                    <HeartIcon />
                </div>
                <div className={styles['header__user-profile']}>
                    <div className={styles['header__user-photo']}>
                        <img src={flamingo} alt="photo" />
                    </div>
                    <div className={styles['header__user-name']}>
                        User name
                    </div>
                </div>
            </div>
        </header>
    );
};