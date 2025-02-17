import { FC } from 'react';
import { IUser } from '../../../shared/types/user';
import { UserCard } from '../../../entities/user/ui/UserCard';
import styles from './userslist.module.scss';


interface UsersListProps {
    users: IUser[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
    
    return (
        <div className={styles['users-list']}>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />;
            })}
        </div>
    );
};