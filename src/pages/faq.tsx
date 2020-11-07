import { GetStaticProps } from 'next';
import { FaqModel } from '../../api/Faq';
import { openDB } from '../openDB';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
} from '@chakra-ui/core';

interface FaqProps {
	faqs: FaqModel[];
}

export default function Faq({ faqs }: FaqProps) {
	return (
		<Accordion allowToggle>
			{faqs.map((f) => (
				<AccordionItem key={f.id}>
					<AccordionButton _expanded={{ bg: 'gray.200' }}>
						<Box flex="1" textAlign="left">
							<Heading as="h5" size="sm">
								{f.question}
							</Heading>
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Text color="gray.500">{f.answer}</Text>
					</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const db = await openDB();
	const faqs = await db.all('SELECT * FROM FAQ ORDER BY createdDate DESC');
	return { props: { faqs } };
};
