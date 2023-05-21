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
					className="before:absolute before:h-[300px]"
					height={40}
					priority
					src="/logo-with-text.svg"
					width={200}
				/>
			</Link>
			<nav className="flex flex-row text-snow items-center space-x-4 text-lg font-semibold py-2 px-4 border-y">
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#fff]" href="/agro-calendar">
					<Calendar size={24} />
					Calendário Agricola
				</Link>
				<VerticalDivider />
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#fff]" href="/general-concepts">
					<Info size={24} />
					Conceito Gerais
				</Link>
				<VerticalDivider />
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#fff]" href="/resource-optimization">
					<Grains size={24} />
					Otimização de recursos
				</Link>
				<VerticalDivider />
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#fff]" href="/fonts">
					<ListMagnifyingGlass size={24} />
					Fontes de Pesquisa
				</Link>
				<VerticalDivider />
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#fff]" href="/participants">
					<UsersFour size={24} />
					Participantes
				</Link>
			</nav>
		</header>
	);
}
