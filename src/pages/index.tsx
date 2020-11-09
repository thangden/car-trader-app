import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	SelectProps,
	SimpleGrid,
} from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { FieldError, useForm, useWatch } from 'react-hook-form';
import { getMakes, Make } from '../database/getMakes';
import getAsString from '../getAsString';
import { getModels, Model } from '../database/getModels';
import { LegacyRef } from 'react';
import useSWR from 'swr';

interface IFormData {
	make: string;
	model: string;
	minPrice: string;
	maxPrice: string;
}

export interface HomeProps {
	makes: Make[];
	models: Model[];
}
export default function Home({ makes, models }: HomeProps) {
	const { query } = useRouter();
	const { handleSubmit, errors, register, control, formState } = useForm<
		IFormData
	>({
		defaultValues: {
			make: getAsString(query.make) || 'all',
			model: getAsString(query.model) || 'all',
			minPrice: getAsString(query.minPrice) || 'all',
			maxPrice: getAsString(query.maxPrice) || 'all',
		},
	});

	const make = useWatch({
		control,
		name: 'make',
		defaultValue: getAsString(query.make) || 'all',
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
									<Select name="make" ref={register({ required: true })}>
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
							<ModelSelect
								name="model"
								make={make}
								models={models}
								error={errors.model}
								register={register}
							/>
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

export interface ModelSelectProps extends SelectProps {
	// name: string;
	make: string;
	models: Model[];
	error: FieldError;
	register: any;
}

export function ModelSelect({
	make,
	models,
	register,
	error,
	...props
}: ModelSelectProps) {
	const { data, isValidating } = useSWR<Model[]>('/api/models?make=' + make);
	const newModels = data || models;
	return (
		<Box>
			<FormControl as="fieldset" isInvalid={!!error} isDisabled={isValidating}>
				<Select ref={register({ required: true })} {...props}>
					<option value="all">Model (any)</option>
					{newModels.map((m) => (
						<option
							key={m.model}
							value={m.model}
						>{`${m.model} (${m.count})`}</option>
					))}
				</Select>
				{/* <FormErrorMessage>
			{errors.model && errors.model.message}
		</FormErrorMessage> */}
			</FormControl>
		</Box>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const make = getAsString(ctx.query.make);

	const [makes, models] = await Promise.all([getMakes(), getModels(make)]);
	return { props: { makes, models } };
};
