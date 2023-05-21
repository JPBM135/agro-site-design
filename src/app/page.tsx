'use client';

import { ImageCarousel } from '@/components/ImageCarousel';

export default function Home() {
	return (
		<main className="flex min-h-screen w-full">
			<div className="w-full">
				<ImageCarousel />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<h1 className="text-6xl font-bold text-center text-white">CultivaCiência</h1>
					<h2 className="text-2xl font-semibold text-center text-white">Sua melhor fonte de conhecimento</h2>
				</div>
			</div>
		</main>
	);
}
