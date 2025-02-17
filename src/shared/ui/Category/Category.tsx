import { FC } from 'react';
import styles from './category.module.scss';

interface CategoryProps {
    category: string;
    onClick?: () => void; 
    isActive?: boolean;
}

export const Category: FC<CategoryProps> = ({ category, onClick, isActive = false }) => {
    return (
        <div className={styles.category} onClick={onClick}>
            <div className={`${styles.category__text} ${isActive ? styles['category__text--active'] : ''}`}>{category}</div>
            <hr className={styles.category__underline} /> 
        </div>
    );
};