import { useState, useEffect } from 'react';
import styles from './modal.module.scss'; // Подключите стили
import { CrossIcon } from '../../icons/crossicon/CrossIcon';
import { CheckedIcon } from '../assets/icons/CheckedIcon';

interface ModalProps {
  onClose: () => void; 
  autoCloseDelay?: number;
  text: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose, autoCloseDelay = 1231234000, text }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  useEffect(() => {
    if (autoCloseDelay) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer); 
    }
  }, [autoCloseDelay, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__content}>
        <button className={styles['modal__close-btn']} onClick={handleClose}>
          <CrossIcon />
        </button>
        <CheckedIcon />
        <div className={styles.modal__text}>
            {text}
        </div>
      </div>
    </div>
  );
};