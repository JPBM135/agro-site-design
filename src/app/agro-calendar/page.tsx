'use client';

import { WarningCircle, Calendar } from '@phosphor-icons/react';
import Image from 'next/image';
import {
	GiLotusFlower,
	GiCabbage,
	GiBananaBunch,
	GiBeet,
	GiBowlOfRice,
	GiCarrot,
	GiCoffeeBeans,
	GiCorn,
	GiCurledLeaf,
	GiGrain,
	GiGrainBundle,
	GiJellyBeans,
	GiPlantSeed,
	GiPotato,
	GiPumpkin,
	GiRemedy,
	GiRootTip,
	GiTomato,
	GiBroccoli,
} from 'react-icons/gi';
import { WiMoonAltWaningCrescent3, WiMoonAltWaxingGibbous1, WiMoonFull, WiMoonNew } from 'react-icons/wi';
import { VerticalDivider } from '@/components/VerticalDivider';

export default function Home() {
	return (
		<main className="flex flex-col lg:flex-row min-h-screen w-full">
			<div className="block my-10 mr-1/2 min-w-[1000px] max-w-[1000px]">
				<h2 className="text-5xl font-semibold text-gray-700 text-center text-grad">
					Calendário Agrícola Internacional
				</h2>
				<h3 className="text-2xl font-semibold text-center text-dark-text-color">
					Sumariza as informações mais importantes
				</h3>
				<article className="flex flex-col gap-4 my-10 px-12 w-full">
					<h4 className="text-justify text-dark-text-color">
						O calendário agrícola são dados utilizados por agricultores e jardineiros para planejar e organizar suas
						atividades ao longo do ano, levando em consideração as características sazonais das plantas e as condições
						do clima. Ele fornece informações sobre os momentos adequados para semear, plantar, colher e realizar outras
						tarefas relacionadas à agricultura.
					</h4>
					<h4 className="text-justify text-dark-text-color">
						Ele é baseado em fatores como a temperatura média, a duração da luz do dia, a disponibilidade de água e
						outros elementos que afetam o crescimento das plantas. Essas informações são usadas para determinar os
						períodos ideais para diferentes atividades agrícolas. Como mostrado no calendário abaixo:
					</h4>
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 border-raisin-black rounded-lg text-gray-700">
						<Calendar size={24} />
						<VerticalDivider height={24} />
						Caledário referente a 2022:
					</h3>
				</article>
				<Image alt="Calendário agricola" height={1_000} priority src="/international-calendar.svg" width={1_000} />
				<h5 className="text-sm font-semibold text-center text-dark-text-color">
					Fonte:{' '}
					<a
						className="text-sm font-semibold text-center text-dark-text-color"
						href="https://mercadosagricolas.com.br/inteligencia/calendario-de-safra/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Mercados Agrícolas
					</a>
					{' - '} Acessado em 21/05/2023
				</h5>
			</div>
			<VerticalDivider className="my-10 bg-office-green max-md:hidden" height="auto" />
			<div className="flex flex-col items-center my-10 w-full">
				<h2 className="text-5xl font-semibold text-center text-gray-700">Nossa Lua é Importante!</h2>
				<h3 className="text-2xl font-semibold text-center text-dark-text-color">
					Entenda como ela influencia na agricultura
				</h3>
				<article className="flex flex-col gap-4 my-10 px-12 w-full">
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WarningCircle size={24} />
						<VerticalDivider height={24} />
						Qual a sua importância?
					</h3>
					<h4 className="text-justify text-dark-text-color">
						A lua é um satélite natural que não tem iluminação própria. Ela se movimenta ao redor da Terra e tem quatro
						fases, cada uma dura aproximadamente 7 dias, ou seja, o ciclo lunar demora um mês para voltar ao ponto
						incial. Sendo assim, dependendo da posição da lua, ela exerce uma atração magnética e luminosidade
						diferente, afetando o desenvolvimento e fertilização das plantas.
					</h4>
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WarningCircle size={24} />
						<VerticalDivider height={24} />
						Como ela influencia na agricultura?
					</h3>
					<h4 className="text-justify text-dark-text-color">
						As fases da lua influenciam diretamente na agricultura, pois a lua é responsável pela movimentação da seiva
						das plantas, que é o líquido que circula por toda a planta, alimentando as células. Sendo assim, a lua
						influencia na germinação, crescimento, floração e frutificação das plantas.
					</h4>
					<h2 className="text-5xl mt-2 font-semibold text-center text-gray-700">As fases da Lua!</h2>
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WiMoonAltWaningCrescent3 size={24} />
						<VerticalDivider height={24} />
						Lua Minguante
					</h3>
					<h4 className="text-justify text-lg text-gray-800">
						É a fase em que a lua está diminuindo, ou seja, está ficando cada vez menor. A força exercida sobre a Terra
						é menor. Desta forma, é a melhor fase para plantar raízes e tubérculos, ou seja, plantas que crescem para
						dentro da terra. Também é o melhor momento para tirar bambu e madeiras.
					</h4>
					<p className="font-semibold text-lg my-2">Plantas na Lua Minguante:</p>
					<div className="flex flex-wrap content-center mx-7 gap-4">
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCarrot className="mr-2" />
							<span>Rabanetes</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCarrot className="mr-2" />
							<span>Cenoura</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiPotato className="mr-2" />
							<span>Batata</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiBeet className="mr-2" />
							<span>Beterraba</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiRootTip className="mr-2" />
							<span>Inhame</span>
						</div>
					</div>

					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WiMoonNew size={24} />
						<VerticalDivider height={24} />
						Lua Nova
					</h3>
					<h4 className="text-justify text-lg text-gray-800">
						Fase em que o Sol, a lua e a Terra estão completamente alinhados. Assim, a seiva tem mais facilidade para se
						movimentar dos ramos para o caule, ou seja, plantas com maior folhagem tendem a ter melhor desenvolvimento.
					</h4>
					<p className="font-semibold text-lg my-2">Plantas na Lua Minguante:</p>
					<div className="flex flex-wrap content-center mx-7 gap-4">
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiBroccoli className="mr-2" />
							<span>Almeirão</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCurledLeaf className="mr-2" />
							<span>Cebolinha</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCarrot className="mr-2" />
							<span>Espinafre</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiBananaBunch className="mr-2" />
							<span>Banana</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiRemedy className="mr-2" />
							<span>Plantas medicinais</span>
						</div>
					</div>
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WiMoonAltWaxingGibbous1 size={24} />
						<VerticalDivider height={24} />
						Lua Crescente
					</h3>
					<h4 className="text-justify text-lg text-gray-800">
						É a melhor fase para cultivos de legumes e cereais, no geral, plantas que crescem para fora da terra, pois a
						seiva das plantas tem facilidade para circular por toda a planta.
					</h4>
					<p className="font-semibold text-lg my-2">Plantas na Lua Crescente:</p>
					<div className="flex flex-wrap content-center mx-7 gap-4">
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiTomato className="mr-2" />
							<span>Tomate</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiPlantSeed className="mr-2" />
							<span>Berinjela</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCoffeeBeans className="mr-2" />
							<span>Café</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiBowlOfRice className="mr-2" />
							<span>Arroz</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiGrainBundle className="mr-2" />
							<span>Soja</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiGrain className="mr-2" />
							<span>Trigo</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiJellyBeans className="mr-2" />
							<span>Feijão</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCarrot className="mr-2" />
							<span>Quiabo</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiPumpkin className="mr-2" />
							<span>Abóbora</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCarrot className="mr-2" />
							<span>Jiló</span>
						</div>
						<div className="flex items-center border border-gray-800 py-2 px-3 rounded-lg my-1">
							<GiCorn className="mr-2" />
							<span>Milho</span>
						</div>
					</div>
					<h3 className="flex gap-3 text-xl font-semibold text-center border p-3 rounded-lg text-gray-700">
						<WiMoonFull size={24} />
						<VerticalDivider height={24} />
						Lua Cheia
					</h3>
					<h4 className="text-justify text-lg text-gray-800">
						Fase em que a lua tem mais influência sobre as plantas, porém apenas nos primeiros dias. É a melhor época
						para se colher frutas, pois a seiva está mais próxima das extremidades das plantas. Além disso, a forte
						iluminação também contribui para o desenvolvimento de flores e algumas hortaliças
					</h4>
					<p className="font-semibold text-lg my-2">Plantas na Lua Cheia:</p>
					<div className="flex flex-wrap content-center mx-7 gap-4">
						<div className="flex items-center my-1 border py-2 px-3 rounded-lg">
							<GiBroccoli className="mr-2" />
							<span>Alface</span>
						</div>
						<div className="flex items-center my-1 border py-2 px-3 rounded-lg">
							<GiCabbage className="mr-2" />
							<span>Repolho</span>
						</div>
						<div className="flex items-center my-1 border py-2 px-3 rounded-lg">
							<GiLotusFlower className="mr-2" />
							<span>Flores</span>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}
