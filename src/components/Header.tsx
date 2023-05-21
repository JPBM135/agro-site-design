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
			<nav className="flex flex-row items-center space-x-4 text-lg font-semibold">
				<Link className="py-1 border-b border-slate-gray hover:border-bright-pink-crayola" href="/agro-calendar">
					Calendário Agricola
				</Link>
				<Link className="py-1 border-b border-slate-gray hover:border-bright-pink-crayola" href="/general-concepts">
					Conceito Gerais
				</Link>
				<Link
					className="py-1 border-b border-slate-gray hover:border-bright-pink-crayola"
					href="/resource-optimization"
				>
					Otimização de recursos
				</Link>
				<Link className="py-1 border-b border-slate-gray hover:border-bright-pink-crayola" href="/fonts">
					Fontes de Pesquisa
				</Link>
				<Link className="py-1 border-b border-slate-gray hover:border-bright-pink-crayola" href="/participants">
					Participantes
				</Link>
			</nav>
		</header>
	);
}
