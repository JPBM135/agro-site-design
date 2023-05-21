'use client';

import { Calendar, Info, UsersFour, Grains, ListMagnifyingGlass } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { VerticalDivider } from './VerticalDivider';

export function Header() {
	return (
		<header className="flex flex-row justify-between items-center w-full py-4 px-6 ">
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
				<Link
					className="flex gap-1 tracking-tighter items-center hover:drop-shadow-[0_0_0.5rem_#fff] hover:text-dark-text-color transition-colors duration-300"
					href="/participants"
				>
					<UsersFour size={24} />
					<span className="max-md:hidden">Participantes</span>
				</Link>
			</nav>
		</header>
	);
}
