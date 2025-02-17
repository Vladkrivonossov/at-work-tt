import { FC, useState, useRef, useEffect } from 'react';
import { MenuIcon } from '../icons/menuicon/MenuIcon';
import styles from './dropdownmenu.module.scss';

interface DropdownMenuProps {
	options: string[];
    onSelect: (option: string) => void;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ options, onSelect }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdownMenu = () => {
		setIsOpen(!isOpen);
	};

    const handleOptionClick = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<button className={styles.dropdown__button} onClick={toggleDropdownMenu}>
				<MenuIcon />
			</button>
			{isOpen && (
				<ul className={styles.dropdown__options}>
					{options.map((option) => {
						return (
							<li 
                                key={option} 
                                className={styles.dropdown__option}
                                onClick={() => handleOptionClick(option)}
                            >
								{option}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
