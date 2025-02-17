import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from 'react';
import { CrossIcon } from '../icons/crossicon/CrossIcon';
import styles from './inputfield.module.scss';

interface InputFieldProps {
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
    heading: string;
}

export const InputField: FC<InputFieldProps> = ({ value, placeholder, onChange, type = 'text', disabled = false, heading }) => {
	const [inputValue, setInputValue] = useState(value || '');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setInputValue(newValue);

		if (onChange) {
			onChange(newValue);
		}
	};

	const handleClear = () => {
		setInputValue('');

		if (onChange) {
			onChange('');
		}
	};

	return (
		<div className={styles.field}>
            <div className={styles.field__heading}>{heading}</div>
			<div className={styles['field__input-container']}>
                <input
                    type={type}
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    disabled={disabled}
                    className={styles.field__input}
                />
                {inputValue && (
                    <button className={styles.field__button} onClick={handleClear}>
                        <CrossIcon />
                    </button>
                )}
            </div>
		</div>
	);
};
