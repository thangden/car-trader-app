import { GetServerSideProps } from 'next';
import { CarModel } from '../../../../../api';
import CarDetail, { CarDetailProps } from '../../../../components/CarDetail';
import { openDB } from '../../../../openDB';

export default function CarDetails({ car }: CarDetailProps) {
	if (!car) {
		return <div>Sorry, car not found.</div>;
	}

	return <CarDetail car={car} />;
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
