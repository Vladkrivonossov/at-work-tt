import { FC } from 'react';
// import styles from './menuicon.module.scss';

interface MenuIconProps {
	onClick?: () => void
}

export const MenuIcon: FC<MenuIconProps> = ({ onClick }) => {
	return (
		<svg onClick={onClick} className='icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_28_7959)'>
				<path
					d='M10.8 14.7C10.8 15.525 11.475 16.2 12.3 16.2C13.125 16.2 13.8 15.525 13.8 14.7C13.8 13.875 13.125 13.2 12.3 13.2C11.475 13.2 10.8 13.875 10.8 14.7ZM10.8 7.2C10.8 8.025 11.475 8.7 12.3 8.7C13.125 8.7 13.8 8.025 13.8 7.2C13.8 6.375 13.125 5.7 12.3 5.7C11.475 5.7 10.8 6.375 10.8 7.2ZM10.8 11.1C10.8 11.925 11.475 12.6 12.3 12.6C13.125 12.6 13.8 11.925 13.8 11.1C13.8 10.275 13.125 9.6 12.3 9.6C11.475 9.6 10.8 10.275 10.8 11.1Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_28_7959'>
					<rect width='24' height='24' viewBox='0 0 24 24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
