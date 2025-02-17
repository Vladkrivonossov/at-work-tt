import { DropdownMenu } from '../../../shared/ui/DropdownMenu/DropdownMenu';
import styles from './usercard.module.scss';
import { IUser } from '../../../shared/types/user';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { activateUser, archiveUser, hideUser } from '../model/userSlice';
import { selectIsUserArchived } from '../model/selectors';
import flamingo from '../../../shared/assets/flamingo.jpg';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
	user: IUser; 
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const isArchived = useSelector((state: RootState) => selectIsUserArchived(user.id)(state));


	const handleSelect = (action: string) => {
		switch (action) {
			case 'Редактировать':
				navigate(`/edit/${String(user.id)}`);
				break;
			case 'Архивировать':
				dispatch(archiveUser(user.id));
				break;
			case 'Скрыть':
				dispatch(hideUser(user.id));
				break;
			case 'Активировать':
				dispatch(activateUser(user.id));
				break;
			default: 
				break;
		};
	};

	return (
		<div className={`${styles['user-card']} ${isArchived ? styles['user-card--archived'] : '' }`}>
			<div className={styles['user-card__avatar']}>
				<img
					src={flamingo}
					alt=''
				/>
			</div>
			<div className={styles['user-card__info']}>
				<div className={styles['user-card__header']}>
					<div className={styles['user-card__name']}>{user.name}</div>
					<div className={styles['user-card__menu']}>
						<DropdownMenu options={isArchived ? ['Активировать'] :['Редактировать', 'Архивировать', 'Скрыть']} onSelect={handleSelect} />
					</div>
				</div>
				<div className={styles['user-card__company']}>{user.company.name}</div>
				<div className={styles['user-card__country']}>{user.address.city}</div>
			</div>
		</div>
	);
};
