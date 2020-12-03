import { useState } from 'react';
import { Grid, GridItem, Stack } from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { stringify } from 'querystring';
import deepEqual from 'fast-deep-equal';
import { getAsString } from '../common';
import { getMakes, Make } from '../database/getMakes';
import { getModels, Model } from '../database/getModels';
import { getPaginatedCars } from '../database/getPaginatedCars';
import { Pagination } from '../components/Pagination';
import CarCard from '../components/CarCard';
import Head from 'next/head';
import Search from '../components/Search';
import { CarModel } from '../interfaces/Car';

export interface CarsProps {
	makes: Make[];
	models: Model[];
	cars: CarModel[];
	totalPages: number;
}

export default function Cars({ makes, models, cars, totalPages }: CarsProps) {
	const { query } = useRouter();
	const [serverQuery] = useState(query);
	const { data, isValidating, error } = useSWR(
		'/api/cars?' + stringify(query),
		{
			dedupingInterval: 15000, // cache page for 15s before fetch again
			// Using deepEqual to tell swr that we only initialData for query first page serverSide, from the 2 page you need to fetch again
			initialData: deepEqual(query, serverQuery)
				? { cars, totalPages }
				: undefined,
		}
	);

	return (
		<>
			<Head>
				<title>List of all available cars - Car Trader</title>
			</Head>
			<Grid
				h="100%"
				templateRows="repeat(1, 1fr)"
				templateColumns="repeat(4, 1fr)"
				gap={4}
			>
				<GridItem colSpan={[4, null, 1]}>
					<Search singleColumns makes={makes} models={models} />
				</GridItem>
				<GridItem colSpan={[4, null, 3]}>
					<Stack spacing={4}>
						{isValidating &&
							Array(3)
								.fill(null)
								.map((_, i) => <CarCard key={i} loading />)}
						<Pagination totalPages={data?.totalPages} />
						{(data?.cars || []).map((car) => (
							<CarCard key={car.id} car={car} />
						))}
						<Pagination totalPages={data?.totalPages} />
					</Stack>
				</GridItem>
			</Grid>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const make = getAsString(ctx.query.make);
	const model = getAsString(ctx.query.model);

	const [makes, models, paginatedCars] = await Promise.all([
		getMakes(),
		getModels(make),
		getPaginatedCars(ctx.query),
	]);
	return {
		props: {
			makes,
			models,
			cars: paginatedCars.cars,
			totalPages: paginatedCars.totalPages,
		},
	};
};
