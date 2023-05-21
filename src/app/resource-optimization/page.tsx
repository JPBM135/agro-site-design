'use client';

import {
	Article,
	CloudRain,
	DropHalf,
	GlobeHemisphereWest,
	Hamburger,
	Leaf,
	ListChecks,
	MoonStars,
	SunHorizon,
	Thermometer,
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col items-center min-h-screen w-full">
			<h1 className="text-7xl tracking-tight font-bold text-center text-white mt-10 max-lg:mx-10">
				Como eu posso otimizar meus recursos?
			</h1>
			<h2 className="text-3xl tracking-tighter font-semibold text-center text-gray-700 max-lg:mx-10">
				Melhore a sua produção e evite desperdícios desnessários.
			</h2>
			<article className="flex flex-col items-start justify-center w-full max-w-7xl gap-10 mt-10 max-lg:mx-10">
				<h3 className="text-2xl flex gap-2 items-center font-bold tracking-tighter text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70] max-lg:mx-10">
					<Leaf size={32} />
					Antes de tudo:
				</h3>
				<p className="text-lg text-justify text-gray-700 max-lg:mx-10">
					É importante saber quais são os elementos que podem auxiliar o agricultor à otimizar os recursos de forma que
					não tenha desperdício desnecessário. Isso porque várias plantas se desenvolvem dependendo das condições em que
					ela foi plantada, podendo alterar o ciclo reprodutivo, e gerar atrasos em algumas etapas.
				</p>
				<p className="text-lg text-justify text-gray-700 max-lg:mx-10">
					Para isso, é necessário que o agricultor tenha conhecimento sobre o solo, clima, e a planta que será
					cultivada, para assim, ele poder escolher o melhor método de plantio, e o melhor momento para realizar o
					plantio.
				</p>
				<h3 className="text-2xl flex gap-2 items-center font-bold tracking-tighter text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70] max-lg:mx-10">
					<ListChecks size={32} />
					Fatores que influenciam no desenvolvimento da planta:
				</h3>
				<div className="flex flex-wrap items-start justify-center w-full max-w-7xl gap-10">
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<SunHorizon size={32} />
							Luminosidade
						</h4>
						<p className="text-lg text-justify text-gray-700">
							A luminosidade é o que garante que a planta tenha energia suficiente, além de ser uma etapa principal para
							a realização da fotossíntese da planta. A planta precisa de bastante luminosidade para assim poder formar
							frutos e grãos.
						</p>
					</div>
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<Thermometer size={32} />
							Temperatura
						</h4>
						<p className="text-lg text-justify text-gray-700">
							Algumas plantas se desenvolvem melhor em locais mais frios e outras não. Nesse sentido, temperaturas muito
							altas podem queimar as folhas das plantas, enquanto em temperaturas muito baixas podem fazer com que a
							planta identifique que está no inverno, interrompendo e paralisando o processo reprodutivo.
						</p>
					</div>
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<DropHalf size={32} />
							Humidade
						</h4>
						<p className="text-lg text-justify text-gray-700">
							A humidade do ar é um fator importante para o desenvolvimento da planta, ela influencia diretamente no seu
							crescimento e desenvolvimento. Se a umidade do ar estiver muito seca, a planta perde muita águas, pois ela
							resseca mais rápido.
						</p>
					</div>
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<GlobeHemisphereWest size={32} />
							Solo
						</h4>
						<p className="text-lg text-justify text-gray-700">
							É a principal ferramenta da agricultura, a estrutura do solo afeta diretamente o desenvolvimento das
							plantas. O solo precisa ser fértil e com nutrientes essenciais para o crescimento da planta. Além disso, é
							fundamental saber sobre a rotação de culturas afim de diminuir a exaustão do solo, evitando também a
							proliferação de doenças e pragas e repõe a matéria orgânica do solo.
						</p>
					</div>
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<MoonStars size={32} />
							Calendário Lunar
						</h4>
						<p className="text-lg text-justify text-gray-700">
							Dependendo da posição da lua, ela exerce uma atração magnética e luminosidade diferente, afetando a
							fertilização do plantio. Veja mais sobre o calendário lunar no nosso artigo dedicado,{' '}
							<Link href="/agro-calendar">
								<span className="text-office-green hover:underline">clique aqui</span>
							</Link>
							.
						</p>
					</div>
					<div className="max-lg:mx-5 max-w-sm flex flex-col items-start gap-5 bg-snow p-5 rounded-lg drop-shadow-xl">
						<h4 className="flex gap-2 text-xl font-bold text-start text-raisin-black pb-2 w-full border-b">
							<CloudRain size={32} />
							Irrigação e uso da água
						</h4>
						<p className="text-lg text-justify text-gray-700">
							É importante saber qual o melhor horário para a irrigação das plantas afim de evitar o desperdício de
							água. Além disso, sabe-se que o sistema de irrigação também é um fator que contribui para a otimização de
							água
						</p>
					</div>
				</div>
			</article>
		</main>
	);
}
