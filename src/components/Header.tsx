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
			<nav className="flex flex-row items-center space-x-4 text-lg font-semibold">
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#e85d75ff]" href="/agro-calendar">
					<Calendar size={24} />
					<VerticalDivider />
					Calendário Agricola
				</Link>
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#e85d75ff]" href="/general-concepts">
					<Info size={24} />
					<VerticalDivider />
					Conceito Gerais
				</Link>
				<Link
					className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#e85d75ff]"
					href="/resource-optimization"
				>
					<Grains size={24} />
					<VerticalDivider />
					Otimização de recursos
				</Link>
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#e85d75ff]" href="/fonts">
					<ListMagnifyingGlass size={24} />
					<VerticalDivider />
					Fontes de Pesquisa
				</Link>
				<Link className="flex gap-1 items-center hover:drop-shadow-[0_0_0.5rem_#e85d75ff]" href="/participants">
					<UsersFour size={24} />
					<VerticalDivider />
					Participantes
				</Link>
			</nav>
		</header>
	);
}
