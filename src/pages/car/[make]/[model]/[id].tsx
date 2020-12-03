import { Box } from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import CarCard, { CarCardProps } from '../../../../components/CarCard';
import { CarModel } from '../../../../interfaces/Car';
import { openDB } from '../../../../openDB';

export default function CarDetails({ car }: CarCardProps) {
	if (!car) {
		return <div>Sorry, car not found.</div>;
	}

	return (
		<>
			<Head>
				<title>{car?.make + ' ' + car?.model}</title>
			</Head>
			<Box mb="auto">
				<CarCard car={car} />
			</Box>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const id = ctx.params.id;
	const db = await openDB();
	const car = await db.get<CarModel | undefined>(
		'SELECT * FROM Car WHERE id = ?',
		id
	);
	return { props: { car: car || null } };
};
