'use client';

import { SkipBackCircle } from '@phosphor-icons/react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<main className="flex min-h-screen w-full">
			<div className="w-full">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
					<h1 className="text-9xl font-bold text-center text-white drop-shadow-[0_0_0.3rem_#ffffff70]">404</h1>
					<h2 className="text-2xl font-semibold text-center text-white">Opss! Página não encontrada</h2>

					<Link className="flex justify-center space-x-2 mt-10 items-center bg-office-green p-3 rounded-md" href="/">
						<SkipBackCircle size={32} />
						<div className="text-xl font-semibold text-center text-white">Voltar para a página inicial</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
