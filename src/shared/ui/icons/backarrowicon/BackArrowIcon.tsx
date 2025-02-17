import { FC } from 'react';

interface BackArrowIconProps {
	onClick?: () => void
}

export const BackArrowIcon: FC<BackArrowIconProps> = ({ onClick }) => {
	return (
		<svg onClick={onClick} className='icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M11.25 12H0.75' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='M6 17.25L0.75 12L6 6.75'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
