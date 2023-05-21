'use client';

import Image from 'next/image';
import { ImageCarousel } from '@/components/ImageCarousel';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen w-full gap-8 mt-10">
			<div className="w-full">
				<ImageCarousel />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<h1 className="text-6xl max-lg:text-3xl tracking-tighter font-bold text-center text-white drop-shadow-[0_0_0.3rem_#ffffff70]">
						CultivaCiência
					</h1>
					<h2 className="text-2xl max-lg:text-lg font-semibold text-center text-white">
						Sua melhor fonte de conhecimento
					</h2>
				</div>
			</div>
			<div className="flex max-lg:flex-col gap-5 justify-evenly">
				<div className="max-lg:mx-5 max-w-sm flex flex-col items-center gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
					<Image
						alt="Imagem de uma plantação representando o plantio convencional"
						className="rounded-full aspect-square object-cover border-4 border-slate-gray"
						height={200}
						src="/plantio-convencional.jpg"
						width={200}
					/>
					<h1 className="text-2xl font-bold tracking-tighter text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70]">
						Plantio convencional
					</h1>
					<h4 className="text-center text-raisin-black">
						Este método usa técnicas tradicionais para o preparo do solo. Ele é mais utilizado em hortas domésticas e
						lavouras comerciais, e exige a preparação do solo de forma mais intensiva.
					</h4>
				</div>
				<div className="max-lg:mx-5 max-w-sm flex flex-col items-center gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
					<Image
						alt="Imagem de uma plantação representando o plantio direto"
						className="rounded-full aspect-square object-cover border-4 border-slate-gray"
						height={200}
						src="/plantio-direto.jpg"
						width={200}
					/>
					<h1 className="text-2xl font-bold tracking-tighter  text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70]">
						Plantio Direto
					</h1>
					<h4 className="text-center text-raisin-black">
						Neste caso, o plantio utiliza os restos da última colheita como matéria orgânica, feito por cima da palhada
						seca da produção anterior, sendo essencial a rotação de cultura neste plantio.
					</h4>
				</div>
				<div className="max-lg:mx-5 max-w-sm flex flex-col items-center gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
					<Image
						alt="Imagem de uma plantação representando o plantio mínimo"
						className="rounded-full aspect-square object-cover border-4 border-slate-gray"
						height={200}
						src="/plantio-minimo.jpg"
						width={200}
					/>
					<h1 className="text-2xl font-bold tracking-tighter  text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70]">
						Plantio Minimo
					</h1>
					<h4 className="text-center text-raisin-black">
						Este sistema é a mistura do Direto e do Convencional, com o uso mínimo de máquinas agrícolas sobre o solo, e
						exigindo poucas operações para a preparação do solo.
					</h4>
				</div>
			</div>
		</main>
	);
}
