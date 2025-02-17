import { FC, useState } from 'react';
import styles from './profileform.module.scss';
import { InputField } from '../../../../shared/ui/InputField/InputField';
import { Button } from '../../../../shared/ui/Button/Button';
import { IUser } from '../../../../shared/types/user';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../entities/user/model/userSlice';
import { Modal } from '../../../../shared/ui/Modal/ui/Modal';

interface ProfileFormProps {
  user: IUser;
}

interface ProfileFormData {
  name: string;
  nickname: string;
  email: string;
  city: string;
  phone: string;
  company: string;
}

export const ProfileForm: FC<ProfileFormProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    name: user.name ?? '',
    nickname: user.nickname ?? '',
    email: user.email ?? '',
    city: user.address.city ?? '',
    phone: user.phone ?? '',
    company: user.company.name ?? '',
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (field: keyof ProfileFormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updates = {
      name: formData.name,
      email: formData.email,
      address: {
        ...user.address,
        city: formData.city,
      },
      phone: formData.phone,
      company: {
        ...user.company,
        name: formData.company,
      },
      nickname: formData.nickname,
    };

    dispatch(updateUser({ id: user.id, updates }));
    handleOpenModal();

    console.log('Пользователь обновлён:', updates);
  };

  return (
    <form onSubmit={handleSubmit} className={styles['profile-form']}>
      <div className={styles['profile-form__fields']}>
        <InputField
            heading="Имя"
            value={formData.name}
            onChange={handleChange('name')}
        />
        <InputField
            heading="Никнейм"
            value={formData.nickname}
            onChange={handleChange('nickname')}
        />
        <InputField
            heading="Почта"
            value={formData.email}
            onChange={handleChange('email')}
        />
        <InputField
            heading="Город"
            value={formData.city}
            onChange={handleChange('city')}
        />
        <InputField
            heading="Телефон"
            value={formData.phone}
            onChange={handleChange('phone')}
        />
        <InputField
            heading="Название компании"
            value={formData.company}
            onChange={handleChange('company')}
        />
      </div>
      <Button className={styles['profile-form__button']} type='submit'>Сохранить</Button>
      {isModalOpen && <Modal onClose={handleCloseModal} text='Изменения сохранены!' />}
    </form>
  );
};