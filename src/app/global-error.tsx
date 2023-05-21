'use client';

import { FireExtinguisher, FireSimple, SkipBackCircle } from '@phosphor-icons/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({ error, reset }: { error: Error; reset(): void }) {
	return (
		<html lang="pt-br">
			<Head />
			<body className={`${inter.className} body-background bg-gradient-to-br from-snow to-slate-gray`}>
				<Header />
				<main className="flex min-h-screen w-full">
					<div className="w-full">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center">
							<h1 className="text-9xl font-bold text-center text-white drop-shadow-[0_0_0.3rem_#ffffff70]">500</h1>
							<h2 className="flex gap-4 text-2xl font-semibold text-center text-white">
								<FireSimple size={32} />
								Opss! Houve um erro inesperado!
							</h2>
							<h3 className="text-lg font-semibold text-center text-white">
								Pedimos desculpas pelo transtorno, estamos trabalhando para resolver o problema o mais rápido possível.
							</h3>
							<button
								className="flex justify-center max-w-30% space-x-2 mt-10 items-center bg-office-green p-3 rounded-md drop-shadow-xl"
								onClick={reset}
								type="button"
							>
								<FireExtinguisher size={32} />
								<div className="text-xl font-semibold text-center text-white">Tentar novamente!</div>
							</button>
						</div>
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
