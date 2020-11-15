import { GetStaticProps } from 'next';
import API, { FaqModel } from '../../api';
import { openDB } from '../openDB';
import { Box, Heading, Stack, Text } from '@chakra-ui/core';

interface FaqsProps {
	faqs: FaqModel[];
	error: string;
}

function Feature({ title, desc, ...rest }) {
	return (
		<Box p={5} shadow="md" borderWidth="1px" {...rest} bg="white">
			<Heading fontSize="xl">{title}</Heading>
			<Text mt={4} whiteSpace="pre-line">
				{desc}
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
