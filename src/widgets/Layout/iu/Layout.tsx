import { FC, ReactNode } from 'react';
import { Header } from '../../Header/ui/Header';
import styles from './layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};