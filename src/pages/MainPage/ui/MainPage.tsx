import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { fetchUsersThunk } from '../../../entities/user/model/userSlice';
import { UsersList } from '../../../features/UsersList/ui/UsersList';
import { Loader } from '../../../shared/ui/Loader/Loader';
import styles from './mainpage.module.scss';

export const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { active, archived, loading } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    return (
        <div className={styles['main-page']}>
          {loading ? (
            <div className={styles['main-page__loader-wrapper']}>
              <Loader />
            </div>
          ) : (
            <div className={styles['main-page__lists-container']}>
              {active.length > 0 && (
                <div className={styles['main-page__list']}>
                  <div className={styles['main-page__header']}>
                    <div>Активные</div>
                    <hr />
                  </div>
                  <UsersList users={active} />
                </div>
              )}

              {archived.length > 0 && (
                <div className={styles['main-page__list']}>
                  <div className={styles['main-page__header']}>
                    <div>Архив</div>
                    <hr />
                  </div>
                  <UsersList users={archived} />
                </div>
              )}
            </div>
          )}
        </div>
      );
};