import { Category } from '../../../shared/ui/Category/Category';
import styles from './profilewidget.module.scss';
import flamingo from '../../../shared/assets/flamingo.jpg';
import { FC } from 'react';

interface ProfileWidgetProps {
    sections: string[];
    onSelect: (section: string) => void;
    selectedCategory: string;
}

export const ProfileWidget: FC<ProfileWidgetProps> = ({ sections, onSelect, selectedCategory }) => {
    return (
        <div className={styles['profile-widget']}>
            <div className={styles['profile-widget__avatar']}>
                <img src={flamingo} alt="" />
            </div>
            <div className={styles['profile-widget__sections']}>
                {sections.map((section, index) => {
                    return <Category 
                        key={index} category={section} 
                        onClick={() => onSelect(section)} 
                        isActive={section === selectedCategory} 
                    />;
                })}
            </div>
        </div>
    );
};