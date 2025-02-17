import { Link, useParams } from 'react-router-dom';
import { BackArrowIcon } from '../../../shared/ui/icons/backarrowicon/BackArrowIcon';
import { ProfileWidget } from '../../../widgets/ProfileWidget/ui/ProfileWidget';
import styles from './editpage.module.scss';
import { ProfileDataWidget } from '../../../widgets/ProfileDataWidget/ui/ProfileDataWidget';
import { useState } from 'react';
import { PlaceholderWidget } from '../../../widgets/PlaceholderWidget/ui/PlaceholderWidget';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../../entities/user/model/selectors';
import { RootState } from '../../../app/store';
import { Loader } from '../../../shared/ui/Loader/Loader';

export const EditPage = () => {
  const [currentWidget, setCurrentWidget] = useState<string>('Данные профиля');
  const { userId } = useParams();
  const editableUser = useSelector(
    (state: RootState) => selectUserById(Number(userId))(state));

  const handleCategorySelect = (category: string) => {
    setCurrentWidget(category);
  };

  const renderWidget = () => {
    switch (currentWidget) {
      case 'Данные профиля':
        return <ProfileDataWidget user={editableUser} />;
      case 'Рабочее пространство':
        return <PlaceholderWidget />;
      case 'Приватность':
        return <PlaceholderWidget />;
      case 'Безопасность':
        return <PlaceholderWidget />;
      default:
        return null;
    }
  };

  return (
    <div className={styles['edit-page']}>
        <div className={styles['edit-page__backbtn']}>
            <Link to="/"><BackArrowIcon />Назад</Link>
        </div>
        <div className={styles['edit-page__profile']}>
            <ProfileWidget
                sections={['Данные профиля', 'Рабочее пространство', 'Приватность', 'Безопасность']}
                onSelect={handleCategorySelect} 
                selectedCategory={currentWidget} 
            />
            {editableUser ? renderWidget() :  <Loader />}
        </div>
    </div>
  );  
};