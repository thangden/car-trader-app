import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Car Trader</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Hello from Home</h1>
				<Link href="/faq">
					<a>Faq</a>
				</Link>
			</main>
		</div>
	);
}
