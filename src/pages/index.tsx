import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	Heading,
	Select,
	SimpleGrid,
	Spacer,
} from '@chakra-ui/core';
import { GetServerSideProps } from 'next';
import router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useForm, useWatch } from 'react-hook-form';
import { getMakes, Make } from '../database/getMakes';
import { formatter, getAsString } from '../common';
import { getModels, Model } from '../database/getModels';
import { ModelSelect } from '../components/ModelSelect';
import { RepeatIcon } from '@chakra-ui/icons';

const prices = [500, 1000, 5000, 15000, 25000, 50000, 250000];

interface IFormData {
	make: string;
	model: string;
	minPrice: string;
	maxPrice: string;
}

export interface SearchProps {
	makes: Make[];
	models: Model[];
	singleColumns?: boolean;
}
export default function Search({ makes, models, singleColumns }: SearchProps) {
	const { query } = useRouter();
	const {
		handleSubmit,
		errors,
		register,
		control,
		formState,
		reset,
		getValues,
	} = useForm<IFormData>({
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

	const model = useWatch({
		control,
		name: 'model',
		defaultValue: getAsString(query.model) || 'all',
	});

	const onSubmit = (data: IFormData) => {
		router.push({
			pathname: '/cars',
			query: { ...data, page: 1 },
		});
		console.log(data);
	};

	const handleReset = () => {
		reset({
			make: 'all',
			model: 'all',
			minPrice: 'all',
			maxPrice: 'all',
		});
		onSubmit(getValues());
	};

	return (
		<>
			<Head>
				<title>Car Trader</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box
				maxW="md"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				mx="auto"
				p={4}
				bg="white"
				pos={{ md: 'sticky' }}
				top={{ md: 4 }}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading as="h2" size="md" mb={4} isTruncated>
						Find your perfect car
					</Heading>
					<SimpleGrid columns={singleColumns ? 1 : [1, 2]} spacing={4}>
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
						<Box>
							<FormControl as="fieldset" isInvalid={!!errors.minPrice}>
								<Select name="minPrice" ref={register({ required: true })}>
									<option value="all">Min price (any)</option>
									{prices.map((p) => (
										<option key={p} value={p}>
											{formatter.format(p)}
										</option>
									))}
								</Select>
								{/* <FormErrorMessage>
										{errors.make && errors.make.message}
									</FormErrorMessage> */}
							</FormControl>
						</Box>
						<Box>
							<FormControl as="fieldset" isInvalid={!!errors.maxPrice}>
								<Select name="maxPrice" ref={register({ required: true })}>
									<option value="all">Max price (any)</option>
									{prices.map((p) => (
										<option key={p} value={p}>
											{formatter.format(p)}
										</option>
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
					<ButtonGroup mt={3} w="100%" justifyContent="space-between">
						<Button
							leftIcon={<RepeatIcon />}
							colorScheme="teal"
							variant="link"
							onClick={handleReset}
							isDisabled={Object.keys(query).length === 0}
						>
							Reset
						</Button>
						<Button colorScheme="teal" variant="link" isDisabled>
							More options
						</Button>
					</ButtonGroup>
				</form>
			</Box>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const make = getAsString(ctx.query.make);
	const model = getAsString(ctx.query.model);

	const [makes, models] = await Promise.all([getMakes(), getModels(make)]);
	return { props: { makes, models } };
};
