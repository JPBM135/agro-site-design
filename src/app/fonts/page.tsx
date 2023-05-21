'use client';

import { ArrowSquareOut } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import fonts from '../../../public/fonts-metadata.json' assert { type: 'json' };

export default function Home() {
	return (
		<main className="flex flex-col gap-4 min-h-screen w-full justify-center items-center my-10">
			<h1 className="text-7xl my-5 font-bold text-center text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70]">
				Nossas fontes
			</h1>
			{fonts.map((font) => (
				<div
					className="w-2/3 flex items-center justify-between gap-4 border-2 border-raisin-black p-5 rounded-lg"
					key={font.url}
				>
					<div className="flex gap-4 items-center">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img alt={font.title} className="rounded-full" height={50} src={font.icon} width={50} />
						<h1 className="text-xl font-bold text-left text-raisin-black drop-shadow-[0_0_0.3rem_#ffffff70]">
							{font.title}
						</h1>
					</div>
					<Link className="hover:bg-slate-gray p-1 rounded-full animate-pulse" href={`${font.url}`}>
						<ArrowSquareOut size={32} />
					</Link>
				</div>
			))}
		</main>
	);
}
