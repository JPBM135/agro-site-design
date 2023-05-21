'use client';

import { Calendar, Info, UsersFour, Grains, ListMagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { VerticalDivider } from './VerticalDivider';

const participants = [
	{
		name: 'Ana Lívia',
		lastName: 'Ribeiro',
		RA: 'G76GAH-0',
	},
	{
		name: 'Brenda',
		lastName: 'Ferreira dos Santos',
		RA: 'N0993E-5',
	},
	{
		name: 'Gabriela',
		lastName: 'Carolini Paliuco',
		RA: 'G7485B-8',
	},
	{
		name: 'João Pedro',
		lastName: 'Borges Martins',
		RA: 'N07752-2',
	},
	{
		name: 'Matheus Ricardo',
		lastName: 'da Silva Viela',
		RA: 'G74364-4',
	},
	{
		name: 'Yohana A.',
		lastName: 'Lellis da Silva',
		RA: 'G75584-7',
	},
];

export function Header() {
	const [participantsOpen, setParticipantsOpen] = useState(false);

	return (
		<header className="flex flex-row justify-between items-center w-full py-4 px-6">
			<Link href="/">
				<Image
					alt="Logo da CultivaCiência"
					className="drop-shadow-[0_0_2rem_#00ff0070] max-md:hidden"
					height={40}
					priority
					src="/logo-with-text.svg"
					width={200}
				/>
				<Image
					alt="Logo da CultivaCiência"
					className="drop-shadow-[0_0_2rem_#00ff0070] md:hidden"
					height={40}
					priority
					src="/logo-no-text.svg"
					width={40}
				/>
			</Link>
			<nav className="flex flex-row text-snow items-center space-x-2 2xl:space-x-4 text-lg font-semibold py-2 px-4 border-y">
				<Link
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					href="/agro-calendar"
				>
					<Calendar size={24} />
					<span className="max-md:hidden">Calendário</span> <span className="max-2xl:hidden">Agricola</span>
				</Link>
				<VerticalDivider />
				<Link
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					href="/general-concepts"
				>
					<Info size={24} />
					<span className="max-md:hidden">Conceito</span> <span className="max-2xl:hidden">Gerais</span>
				</Link>
				<VerticalDivider />
				<Link
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					href="/resource-optimization"
				>
					<Grains size={24} />
					<span className="max-md:hidden">Otimização</span> <span className="max-2xl:hidden">de recursos</span>
				</Link>
				<VerticalDivider />
				<Link
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					href="/fonts"
				>
					<ListMagnifyingGlass size={24} />
					<span className="max-md:hidden">Fontes</span> <span className="max-2xl:hidden">de Pesquisa</span>
				</Link>
				<VerticalDivider />
				<button
					aria-roledescription="Abrir lista de participantes"
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					onClick={() => setParticipantsOpen(!participantsOpen)}
					type="button"
				>
					<UsersFour size={24} />
					<span className="max-md:hidden">Participantes</span>
				</button>
			</nav>
			{participantsOpen && (
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen z-10 backdrop-blur"
					onClick={() => setParticipantsOpen(false)}
				>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 min-w-[20%] max-lg:min-w-[80%] h-auto p-5 bg-gradient-to-b from-raisin-black to-slate-gray bg-opacity-90 flex flex-col justify-center items-center rounded-lg">
						<h2 className="text-snow text-2xl font-semibold mb-4 drop-shadow-[0_0_1rem_#ffffffff">Participantes</h2>
						<ul className="flex flex-col gap-2">
							{participants.map((participant) => (
								<li className="flex flex-col gap-1 items-center tracking-tighter" key={participant.RA}>
									<div>
										<span className="text-snow text-lg font-semibold">{participant.name}</span>{' '}
										<span className="text-snow text-lg">{participant.lastName}</span>
									</div>
									<span className="text-snow text-sm">{participant.RA}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</header>
	);
}
