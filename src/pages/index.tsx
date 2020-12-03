import {
	Box,
	Code,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import { getAsString } from '../common';
import Search from '../components/Search';
import { getMakes, Make } from '../database/getMakes';
import { getModels, Model } from '../database/getModels';

export interface HomeProps {
	makes: Make[];
	models: Model[];
}

export default function Home({ makes, models }: HomeProps) {
	return (
		<SimpleGrid
			columns={[1, null, null, 2]}
			spacing={10}
			py={{ lg: 16 }}
			mb="auto"
			w="full"
		>
			<Box>
				<Stack spacing={4}>
					{/* <Image
						boxSize={16}
						src="/logo.png"
						alt="Car Trader - Icons made by Kiranshastry from www.flaticon.com"
						mb={1}
					/> */}
					<Heading as="h1" size="4xl" color="teal.600">
						Car Trader
					</Heading>
					<Heading as="h2" size="xl" fontWeight="normal" color="gray.700">
						Perfect place to find your next car
					</Heading>
					<Code color="gray.500" p={1} textTransform="uppercase">
						A demo app of Car trader using next.js
					</Code>
				</Stack>
			</Box>
			<Box mx={{ base: 0, lg: 'auto' }}>
				<Search makes={makes} models={models} />
			</Box>
		</SimpleGrid>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const make = getAsString(ctx.query.make);

	const [makes, models] = await Promise.all([getMakes(), getModels(make)]);
	return { props: { makes, models } };
};
