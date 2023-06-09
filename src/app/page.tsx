'use client';

import { CaretCircleDoubleDown } from '@phosphor-icons/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { ImageCarousel } from '@/components/ImageCarousel';
import { ScrollFadeOutCaret } from '@/components/ScrollFadeOutCaret';

export default function Home() {
	return (
		<main className="flex flex-col items-center min-h-screen w-full gap-8 mt-10">
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
			<ScrollFadeOutCaret />
			<article className="flex flex-col items-center w-full max-w-7xl gap-10 mt-10 max-lg:mx-10">
				<h2 className="text-4xl max-lg:text-2xl items-center font-semibold text-center border-b mb-2 pb-2 w-fit text-raisin-black">
					O que é o plantio?
				</h2>
				<p className="text-lg text-justify text-gray-700 mx-20 max-lg:mx-10">
					Plantio é a definição de plantar sementes na terra, para que ela se desenvolva, e atinja o nível desejado do
					agricultor. Entretanto, este processo não é somente feito com sementes, pois algumas plantas são propagadas
					vegetativamente, ou seja, um clone da planta mãe, esse processo é chamado de propagação assexuada.
				</p>
			</article>
			<h2 className="text-4xl max-lg:text-2xl font-semibold text-center border-b mb-2 pb-2 w-fit text-raisin-black">
				Quais são os métodos de plantio mais utilizados?
			</h2>
			<div className="flex max-lg:flex-col gap-5 justify-evenly w-full">
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
					<h4 className="text-justify text-raisin-black">
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
					<h4 className="text-justify text-raisin-black">
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
					<h4 className="text-justify text-raisin-black">
						Este sistema é a mistura do Direto e do Convencional, com o uso mínimo de máquinas agrícolas sobre o solo, e
						exigindo poucas operações para a preparação do solo.
					</h4>
				</div>
			</div>
			<article className="flex flex-col items-center w-full max-w-7xl gap-10 mt-10 max-lg:mx-10">
				<h2 className="text-4xl max-lg:text-2xl items-center font-semibold text-center border-b mb-2 pb-2 w-fit text-raisin-black">
					Sobre a agricultura familiar:
				</h2>
				<p className="text-lg text-justify text-gray-700 mx-20 max-lg:mx-10">
					No país, há diversos tipos de culturas agrícola, desde os modernos aos mais tradicionais, e todos com o mesmo
					objetivo de produzir alimentos. A agricultura familiar é um sistema em que pessoas da mesma família trabalham
					em conjunto na terra onde produzem as atividades comerciais.
				</p>
				<p className="text-lg text-justify text-gray-700 mx-20 max-lg:mx-10">
					Além disso, fontes como o “Instituto Brasileiro de Geografia e Estatística (IBGE)”, “Companhia Nacional de
					Abastecimento (Conab)”, Ministério da Agricultura, “Pecuária e Abastecimento (Mapa)”, “Organização das Nações
					Unidas (ONU)”, e outros, a Agricultura Familiar é responsável por produzir mais de 80% dos alimentos do mundo.
					Já no Brasil, foi indicado por pesquisas que a mesma também é responsável por 90% da base econômica dos
					municípios brasileiros, com produções e comercialização diversificadas de frutas, vegetais, legumes, proteínas
					e grãos.
				</p>
			</article>
		</main>
	);
}
