import { FC, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    className,
    type = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className ? `${styles.button} ${className}`: styles.button}
        >
            <div className={styles.button__text}>
                {children}
            </div>
        </button>
    );
};