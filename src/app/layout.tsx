import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'CultivaCiência - Sua melhor fonte de conhecimento',
	description:
		'CultivaCiência é um site de divulgação científica dedicado ao campo da agricultura. Nosso objetivo é fornecer informações valiosas e atualizadas sobre práticas agrícolas, inovações tecnológicas, tendências de mercado e pesquisa científica relacionada à agricultura. Com uma equipe dedicada de alunos da UNIP apaixonados por ciência e agricultura, buscamos compartilhar conhecimentos e promover a disseminação de boas práticas para melhorar a produtividade, sustentabilidade e eficiência no setor agrícola. Explore nosso conteúdo e descubra as últimas descobertas e avanços na ciência agrícola.',
	keywords:
		'agricultura, divulgação científica, UNIP, práticas agrícolas, inovações tecnológicas, tendências de mercado, pesquisa científica, produtividade, sustentabilidade, eficiência',
	image: 'https://agro-site-design.vercel.app/metadata-image.png',
	url: 'https://agro-site-design.vercel.app/',
	'twitter:card': 'summary_large_image',
	'twitter:site': '@cultivaciencia',
	'twitter:creator': '@cultivaciencia',
	'twitter:title': 'CultivaCiência - Sua melhor fonte de conhecimento',
	'twitter:description':
		'CultivaCiência é um site de divulgação científica dedicado ao campo da agricultura. Nosso objetivo é fornecer informações valiosas e atualizadas sobre práticas agrícolas, inovações tecnológicas, tendências de mercado e pesquisa científica relacionada à agricultura. Com uma equipe dedicada de alunos da UNIP apaixonados por ciência e agricultura, buscamos compartilhar conhecimentos e promover a disseminação de boas práticas para melhorar a produtividade, sustentabilidade e eficiência no setor agrícola. Explore nosso conteúdo e descubra as últimas descobertas e avanços na ciência agrícola.',
	'twitter:image': 'https://agro-site-design.vercel.app/metadata-image.png',
	'twitter:image:alt': 'CultivaCiência - Sua melhor fonte de conhecimento',
	'twitter:url': 'https://agro-site-design.vercel.app/',
	'og:title': 'CultivaCiência - Sua melhor fonte de conhecimento',
	'og:description':
		'CultivaCiência é um site de divulgação científica dedicado ao campo da agricultura. Nosso objetivo é fornecer informações valiosas e atualizadas sobre práticas agrícolas, inovações tecnológicas, tendências de mercado e pesquisa científica relacionada à agricultura. Com uma equipe dedicada de alunos da UNIP apaixonados por ciência e agricultura, buscamos compartilhar conhecimentos e promover a disseminação de boas práticas para melhorar a produtividade, sustentabilidade e eficiência no setor agrícola. Explore nosso conteúdo e descubra as últimas descobertas e avanços na ciência agrícola.',
	'og:image': 'https://agro-site-design.vercel.app/metadata-image.png',
	'og:image:alt': 'CultivaCiência - Sua melhor fonte de conhecimento',
	'og:url': 'https://agro-site-design.vercel.app/',
	'og:site_name': 'CultivaCiência',
	'og:type': 'website',
	'og:locale': 'pt_BR',
	'article:author': 'https://jpbm.dev/',
	'article:publisher': 'ttps://jpbm.dev/',
	'article:section': 'Agricultura',
	'article:tag':
		'agricultura, divulgação científica, UNIP, práticas agrícolas, inovações tecnológicas, tendências de mercado, pesquisa científica, produtividade, sustentabilidade, eficiência',
	'article:published_time': '2023-05-21T00:35:24.093Z',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={`${inter.className} body-background bg-gradient-to-br from-snow to-slate-gray`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
