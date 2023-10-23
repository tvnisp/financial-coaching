import { Footer } from './components/layout/header/Footer';
import {Header} from './components/layout/header/Header';
import './globals.scss';
import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body>
				<link
					href='https://assets.calendly.com/assets/external/widget.css'
					rel='stylesheet'
				/>
				<script
					src='https://assets.calendly.com/assets/external/widget.js'
					type='text/javascript'
					async
				></script>

				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
