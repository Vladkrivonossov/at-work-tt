import { FC } from 'react';
import { IUser } from '../../../shared/types/user';
import styles from './profiledatawidget.module.scss';
import { ProfileForm } from './ProfileForm/ProfileForm';

interface ProfileDataWidgetProps {
    user?: IUser;
}

export const ProfileDataWidget: FC<ProfileDataWidgetProps> = ({ user }) => {

    if (!user) {
        return <div>Пользователь не найден</div>;
    }

    return (
        <div className={styles['profile-data-widget']}>
            <div className={styles['profile-data-widget__header']}>
                <div className={styles['profile-data-widget__text']}>
                    Данные профиля
                </div>
                <hr />
            </div>
            <ProfileForm user={user} />
        </div>
    );
};