import NextLink from 'next/link';
import {
	AspectRatio,
	Badge,
	Box,
	Flex,
	Heading,
	Icon,
	Image,
	Skeleton,
	Text,
} from '@chakra-ui/core';
import { FaCalendarAlt, FaGasPump, FaTachometerAlt } from 'react-icons/fa';
import { formatter } from '../common';
import { CarModel } from '../interfaces/Car';

export interface CarCardProps {
	car?: CarModel;
	loading?: boolean;
}

export default function CarCard({ car, loading = false }: CarCardProps) {
	return (
		<NextLink
			href="/car/[make]/[model]/[id]"
			as={`/car/${car?.make}/${car?.model}/${car?.id}`}
			passHref
		>
			<Flex
				as="a"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				textDecoration="none"
				direction={['column', null, null, 'row']}
			>
				<Skeleton isLoaded={!loading}>
					<AspectRatio minW={['100%', null, null, 'sm']} ratio={4 / 3}>
						<Image
							src={car?.photoUrl}
							alt={car?.make + ' ' + car?.model}
							objectFit="cover"
						/>
					</AspectRatio>
				</Skeleton>

				<Box p="6" bg="white" flex={{ md: 1 }}>
					<Skeleton isLoaded={!loading}>
						<Box d={{ md: 'flex' }} alignItems="baseline">
							<Badge borderRadius="full" px="2" mr={2} colorScheme="teal">
								New
							</Badge>
							<Box
								color="gray.500"
								fontWeight="semibold"
								letterSpacing="wide"
								fontSize="xs"
								textTransform="uppercase"
								mt={{ base: 1, sm: 0 }}
							>
								<Icon as={FaCalendarAlt} boxSize={3} mr={2} />
								{car?.year}
								<Box as="span" mx={2}>
									&bull;
								</Box>
								<Icon as={FaTachometerAlt} boxSize={3} mr={2} />
								{car?.kilometers}
								<Box as="span" mx={2}>
									&bull;
								</Box>
								<Icon as={FaGasPump} boxSize={3} mr={2} />
								{car?.fuelType}
							</Box>
						</Box>
					</Skeleton>

					<Heading
						as="h3"
						size="md"
						fontWeight="semibold"
						lineHeight="tight"
						mt={2}
						isTruncated
					>
						<Skeleton isLoaded={!loading}>
							{car?.make + ' ' + car?.model}
						</Skeleton>
					</Heading>
					<Heading
						as="h5"
						size="sm"
						fontWeight="normal"
						lineHeight="tight"
						mt={1}
						isTruncated
					>
						<Skeleton isLoaded={!loading}>
							{car?.price && formatter.format(car.price)}
						</Skeleton>
					</Heading>

					<Box d="flex" mt="1" alignItems="center" pr={2}>
						<Text noOfLines={[3, null, null, 5]} color="gray.500" fontSize="sm">
							{car?.details}
						</Text>
					</Box>
				</Box>
			</Flex>
		</NextLink>
	);
}
