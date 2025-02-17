import styles from './placeholderwidget.module.scss';

export const PlaceholderWidget = () => {
    return (
        <div className={styles['placeholder-widget']}>
            <div className={styles['placeholder-widget__text']}>
                Этот раздел еще не готов
            </div>
        </div>
    );
};