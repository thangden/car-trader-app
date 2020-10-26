import { GetServerSideProps } from 'next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedIcon from '@material-ui/icons/Speed';
import TodayIcon from '@material-ui/icons/Today';
import { CarModel } from '../../../../../api/Car';
import { openDB } from '../../../../openDB';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			margin: 'auto',
		},
		img: {
			width: '100%',
		},
	})
);

interface CarDetailsProps {
	car: CarModel | null | undefined;
}

export default function CarDetails({ car }: CarDetailsProps) {
	const classes = useStyles();

	if (!car) {
		return <div>Sorry, car not found.</div>;
	}

	return (
		<Paper className={classes.paper}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={5}>
					<img
						className={classes.img}
						alt={car.make + ' ' + car.model}
						src={car.photoUrl}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={7} container>
					<Grid item xs container direction="column" spacing={2}>
						<Grid item xs>
							<Typography gutterBottom variant="h5">
								{car.make + ' ' + car.model}
							</Typography>
							<Typography variant="h4" gutterBottom>
								${car.price}
							</Typography>
							<Grid
								container
								direction="row"
								justify="flex-start"
								alignItems="center"
								spacing={3}
							>
								<Grid item>
									<Typography variant="body1" gutterBottom>
										<TodayIcon
											fontSize="small"
											style={{ verticalAlign: 'sub' }}
										/>
										{' ' + car.year}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body1" gutterBottom>
										<SpeedIcon
											fontSize="small"
											style={{ verticalAlign: 'sub' }}
										/>
										{' ' + car.kilometers}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body1" gutterBottom>
										<LocalGasStationIcon
											fontSize="small"
											style={{ verticalAlign: 'sub' }}
										/>
										{' ' + car.fuelType}
									</Typography>
								</Grid>
							</Grid>
							<Typography variant="body1" color="textSecondary">
								{car.details}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
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
