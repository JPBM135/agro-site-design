'use client';

import { useEffect, useState } from 'react';

const FarmImagesPrefix = 'farm-image-';
const FarmImagesAmount = 4;

const InitialImages = Array.from({ length: FarmImagesAmount }, (_, index) => `${FarmImagesPrefix}${index + 1}.jpg`);

const intervalTime = 4_000;

export function ImageCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? InitialImages.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === InitialImages.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, intervalTime);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="max-w-[1900px] h-[780px] max-lg:h-[500px] w-full mx-auto py-8 px-4 relative group">
			<div
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
				style={{ backgroundImage: `url(${InitialImages[currentIndex]})` }}
			/>
			<div className="flex top-4 justify-center py-2">
				{InitialImages.map((slide, slideIndex) => (
					<div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)} />
				))}
			</div>
		</div>
	);
}
