import { extendTheme } from '@chakra-ui/core';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = ['40em', '52em', '64em'];

const theme = extendTheme({
	colors: {
		black: '#16161D',
	},
	fonts,
	breakpoints,
});

export default theme;
