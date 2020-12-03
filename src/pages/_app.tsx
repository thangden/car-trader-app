import theme from '../theme';
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import {
	Box,
	ChakraProvider,
	Container,
	Flex,
	Link,
	Text,
} from '@chakra-ui/core';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';
import { SWRConfig } from 'swr';
import { Nav } from '../components/Nav';
import Head from 'next/head';
import Axios from 'axios';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});
Router.events.on('routeChangeError', () => {
	NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Car Trader - Perfect place to find your next car</title>
				<link rel="icon" href="/favicons/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicons/safari-pinned-tab.svg"
					color="#333333"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<ChakraProvider resetCSS theme={theme}>
				<SWRConfig
					value={{ fetcher: (url: string) => Axios(url).then((r) => r.data) }}
				>
					<Box backgroundColor="gray.100" minH="100vh">
						<Nav />
						<Container
							maxW="xl"
							centerContent
							minH="calc(100vh - 70px)"
							px={8}
							py={16}
						>
							<Component {...pageProps} />
							<Box as="footer" mt="auto" pt={8} textAlign="center">
								<Text fontSize="sm">
									<Text as="span">Proudly made in 🇻🇳 </Text>
									<Text as="span">
										by{' '}
										<Link
											href="https://github.com/thangden"
											isExternal
											fontWeight="semibold"
										>
											thangden
										</Link>
									</Text>
								</Text>
							</Box>
						</Container>
					</Box>
				</SWRConfig>
			</ChakraProvider>
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
