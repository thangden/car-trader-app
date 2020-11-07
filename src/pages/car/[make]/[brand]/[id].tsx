import { Badge, Box, Icon, Image } from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import { FaCalendarAlt, FaGasPump, FaTachometerAlt } from 'react-icons/fa';
import { CarModel } from '../../../../../api/Car';
import { openDB } from '../../../../openDB';

interface CarDetailsProps {
	car: CarModel | null | undefined;
}

export default function CarDetails({ car }: CarDetailsProps) {
	if (!car) {
		return <div>Sorry, car not found.</div>;
	}

	return (
		<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src={car.photoUrl} alt={car.make + ' ' + car.model} />

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="teal">
						New
					</Badge>
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					>
						<Icon as={FaCalendarAlt} boxSize={3} mr={2} />
						{car.year}
						<Box as="span" mx={2}>
							&bull;
						</Box>
						<Icon as={FaTachometerAlt} boxSize={3} mr={2} />
						{car.kilometers}
						<Box as="span" mx={2}>
							&bull;
						</Box>
						<Icon as={FaGasPump} boxSize={3} mr={2} />
						{car.fuelType}
					</Box>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h3"
					lineHeight="tight"
					isTruncated
				>
					{car.make + ' ' + car.model}
				</Box>

				<Box>
					{car.price}
					<Box as="span" color="gray.600" fontSize="sm" ml={1}>
						USD
					</Box>
				</Box>

				<Box d="flex" mt="1" alignItems="center">
					<Box as="span" color="gray.600" fontSize="sm">
						{car.details}
					</Box>
				</Box>
			</Box>
		</Box>
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
