function Logo() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='34' height='38' viewBox='0 0 34 38'>
			<g fill='none' fillRule='evenodd' stroke='#838383' strokeLinecap='round' strokeWidth='1.5'>
				<path d='M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28' />
				<path strokeLinejoin='round' d='M5 37a4 4 0 1 1 0-8' />
				<path d='M11 9h12' />
			</g>
		</svg>
	);
}

function IconArrowDown() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8'>
			<path fill='none' stroke='#A445ED' strokeWidth='1.5' d='m1 1 6 6 6-6' />
		</svg>
	);
}

function IconMoon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
			/>
		</svg>
	);
}

function IconNewWindow() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5'
			/>
		</svg>
	);
}

function IconPlay() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'>
			<g fill='currentColor' fillRule='evenodd'>
				<circle cx='37.5' cy='37.5' r='37.5' />
				<path d='M29 27v21l21-10.5z' />
			</g>
		</svg>
	);
}

function IconSearch() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
			/>
		</svg>
	);
}

export { Logo, IconArrowDown, IconMoon, IconNewWindow, IconPlay, IconSearch };
