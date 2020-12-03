import { GetStaticProps } from 'next';
import { openDB } from '../openDB';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaqModel } from '../interfaces/Faq';

interface FaqsProps {
	faqs: FaqModel[];
	error: string;
}

function Feature({
	title,
	desc,
	children,
	...rest
}: {
	title: string;
	desc?: string;
	children?: React.ReactNode;
}) {
	return (
		<Box
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			p={4}
			bg="white"
			{...rest}
		>
			<Heading fontSize="xl">{title}</Heading>
			<Text mt={3} whiteSpace="pre-line">
				{desc}
				{children}
			</Text>
		</Box>
	);
}

export default function Faqs({ faqs, error }: FaqsProps) {
	if (error) {
		return <Text>{error}.</Text>;
	}
	return (
		<Stack spacing={8}>
			{faqs.map((f) => (
				<Feature key={f.id} title={f.question} desc={f.answer} />
			))}
			<Feature title="Brand icon">
				Icons made by{' '}
				<Link
					color="teal.500"
					href="https://www.flaticon.com/free-icon/car-repair_846300"
					title="Kiranshastry"
				>
					Kiranshastry
					<ExternalLinkIcon mx={1} />
				</Link>{' '}
				from{' '}
				<Link
					color="teal.500"
					href="https://www.flaticon.com/"
					title="Flaticon"
				>
					{' '}
					www.flaticon.com
				</Link>
			</Feature>
		</Stack>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const db = await openDB();
		const faqs = await db.all('SELECT * FROM FAQ ORDER BY createdDate DESC');

		return { props: { faqs } };

		// const res = await API.get(`/faqs`);
		// return { props: { faqs: res.data } };
	} catch (error) {
		return { props: { faqs: [], error } };
	}
};
