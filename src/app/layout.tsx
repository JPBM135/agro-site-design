import { Inter } from 'next/font/google';
import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import './globals.css';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<Head />
			<body className={`${inter.className} body-background bg-gradient-to-br from-snow to-slate-gray`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
