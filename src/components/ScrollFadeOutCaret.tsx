import { CaretCircleDoubleDown } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export function ScrollFadeOutCaret() {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			// Opacity 1 for the first 100px scrolled and 0 after the 700px
			const newOpacity = 1 - Math.min(Math.max(0, scrollTop - 100), 700) / 700;
			setOpacity(newOpacity);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[40vh]"
			style={{
				opacity,
			}}
		>
			<CaretCircleDoubleDown className="bg-snow p-2 rounded-lg animate-bounce" color="#787878" size={48} />
		</div>
	);
}
