import axios from 'axios';
import { SWRConfig } from 'swr';
import { Nav } from '../components/Nav';

axios.defaults.baseURL = 'http://localhost:4001';

import theme from '../theme';
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { Box, ChakraProvider, Flex } from '@chakra-ui/core';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';

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
		<ChakraProvider resetCSS theme={theme}>
			<SWRConfig
				value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
			>
				<Box backgroundColor="gray.100" minH="100vh">
					<Flex backgroundColor="white" w="full">
						<Nav />
					</Flex>
					<Flex my={16} mx="auto" direction="column" maxW="1250px" px={8}>
						<Component {...pageProps} />
					</Flex>
				</Box>
			</SWRConfig>
		</ChakraProvider>
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
