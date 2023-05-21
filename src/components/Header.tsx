import Image from 'next/image';
import Link from 'next/link';

export function Header() {
	return (
		<header className="flex flex-row justify-between items-center w-full py-4 px-6 ">
			<Image
				alt="Logo da CultivaCiência"
				className="before:absolute before:h-[300px]"
				height={40}
				priority
				src="/logo-with-text.svg"
				width={200}
			/>
			<nav className="flex flex-row items-center space-x-8 text-lg font-semibold">
				<Link className="hover:bg-green-600 hover:backdrop-blur-md" href="/agro-calendar">
					Calendário Agricola
				</Link>
				<Link href="/general-concepts">Conceito Gerais</Link>
				<Link href="/resource-optimization">Otimização de recursos</Link>
				<Link href="/fonts">Fontes de Pesquisa</Link>
				<Link href="/participants">Participantes</Link>
			</nav>
		</header>
	);
}
