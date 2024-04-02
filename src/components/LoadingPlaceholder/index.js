import { memo } from 'react';

import './LoadingPlaceholder.css';

const dummyContent = Array.from({ length: 5 }, (_, index) => index + 1);

const LoadingPlaceholder = memo(function LoadingPlaceholder() {
	return (
		<div className='LoadingPlaceholder'>
			<div className='LoadingPlaceholder__header'>
				<div className='LoadingPlaceholder__word'>
					<div className='LoadingPlaceholder__header__title'></div>
					<div className='LoadingPlaceholder__header__subtitle'></div>
				</div>
				<div className='LoadingPlaceholder__header__audio'></div>
			</div>
			<div className='LoadingPlaceholder__content'>
				{dummyContent.map((item) => (
					<div className='LoadingPlaceholder__content__meaning' key={item}></div>
				))}
			</div>
		</div>
	);
});

export { LoadingPlaceholder };
