import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	SimpleGrid,
} from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getMakes, Make } from '../database/getMakes';

interface IFormData {
	make: string | string[];
	model: string | string[];
	minPrice: string | string[];
	maxPrice: string | string[];
}

export interface HomeProps {
	makes: Make[];
}
export default function Home({ makes }: HomeProps) {
	const { query } = useRouter();
	const { handleSubmit, errors, register, formState } = useForm<IFormData>({
		defaultValues: {
			make: query.make || 'all',
			model: query.model || 'all',
			minPrice: query.minPrice || 'all',
			maxPrice: query.maxPrice || 'all',
		},
	});

	const onSubmit = (data: IFormData) => {
		console.log(data);
	};
	return (
		<div>
			<Head>
				<title>Car Trader</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box
						maxW="md"
						borderWidth="1px"
						borderRadius="lg"
						overflow="hidden"
						mx="auto"
						p={4}
						bg="white"
					>
						<Heading as="h2" size="md" mb={4} isTruncated>
							Find your perfect car
						</Heading>
						<SimpleGrid columns={[1, 2]} spacing={4}>
							<Box>
								<FormControl as="fieldset" isInvalid={!!errors.make}>
									<Select
										name="make"
										placeholder="Select a make"
										ref={register({ required: true })}
									>
										<option value="all">Make (any)</option>
										{makes.map((m) => (
											<option
												key={m.make}
												value={m.make}
											>{`${m.make} (${m.count})`}</option>
										))}
									</Select>
									{/* <FormErrorMessage>
										{errors.make && errors.make.message}
									</FormErrorMessage> */}
								</FormControl>
							</Box>
							<Box>
								<FormControl as="fieldset" isInvalid={!!errors.make}>
									<Select
										name="make"
										placeholder="Select a make"
										ref={register({ required: true })}
									>
										<option value="all">Model (any)</option>
										{makes.map((m) => (
											<option
												key={m.make}
												value={m.make}
											>{`${m.make} (${m.count})`}</option>
										))}
									</Select>
									{/* <FormErrorMessage>
										{errors.make && errors.make.message}
									</FormErrorMessage> */}
								</FormControl>
							</Box>
						</SimpleGrid>
						<Button
							mt={6}
							w="100%"
							colorScheme="teal"
							isLoading={formState.isSubmitting}
							loadingText="Searching..."
							type="submit"
						>
							Search
						</Button>
					</Box>
				</form>
			</main>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const makes = await getMakes();
	return { props: { makes } };
};
