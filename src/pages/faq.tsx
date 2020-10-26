import { GetStaticProps } from 'next';
import { FaqModel } from '../../api/Faq';
import { openDB } from '../openDB';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ChangeEvent, useState } from 'react';

interface FaqProps {
	faqs: FaqModel[];
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: { width: '100%' },
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightMedium,
		},
	})
);

export default function Faq({ faqs }: FaqProps) {
	const classes = useStyles();
	const [expanded, setExpanded] = useState<number | false>(false);

	const handleChange = (panel: number) => (
		event: ChangeEvent<{}>,
		isExpanded: boolean
	) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className={classes.root}>
			{faqs.map((f) => (
				<Accordion
					key={f.id}
					expanded={expanded === f.id}
					onChange={handleChange(f.id)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${f.id}-content`}
						id={`${f.id}-header`}
					>
						<Typography className={classes.heading}>{f.question}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{f.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const db = await openDB();
	const faqs = await db.all('SELECT * FROM FAQ ORDER BY createdDate DESC');
	return { props: { faqs } };
};
