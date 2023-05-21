'use client';

import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
	return (
		<footer className="flex items-center max-md:justify-center max-md:items-center flex-col w-full mt-10">
			<Link className="" href="/">
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
			<div className="flex flex-col items-center justify-center py-4 px-6 text-sm text-gray-500">
				<div className="flex space-x-4 mb-4">
					<a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
						<FacebookLogo size={24} />
					</a>
					<a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
						<TwitterLogo size={24} />
					</a>
					<a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
						<InstagramLogo size={24} />
					</a>
					<a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
						<LinkedinLogo size={24} />
					</a>
				</div>
				<p className="text-center">© 2023 CultivaCiência. Todos os direitos reservados.</p>
				<p className="text-center font-bold">
					Apenas para fins educacionais, nenhuma violação de direitos autorais pretendida.
				</p>
				<p className="text-center">
					Qualquer duvida, entre em contato pelo email{' '}
					<a className="font-bold" href="mailto:jpedrobm0+unip.aps@gmail.com">
						jpedrobm0@gmail.com
					</a>
				</p>
			</div>
		</footer>
	);
}
