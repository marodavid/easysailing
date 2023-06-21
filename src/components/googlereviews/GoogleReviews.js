import React from 'react';
import { useTranslation } from 'react-i18next';

import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

import GoogleBadge from "./GoogleBadge";
import CarouselOpiniones from "./CarouselOpiniones";

import resenaVerificada from '../../images/opiniones/google-resenas-verificadas.png'
import verifiedReviewsLogo from '../../images/opiniones/verifiedReview.png'
import googleAvisClients from '../../images/opiniones/googleAvisClients.png'

import escriberesena from '../../images/opiniones/escribeResena.png'
import reviewUsGoogle from '../../images/opiniones/reviewUsGoogle.png'
import reviewUsFrench from '../../images/opiniones/donnezVotreAvisGoogle.png'



const useStyles = makeStyles((theme) => ({
	logoResenas: {
		display: "flex",
		justifyContent: "center",
		// marginBottom: '10px',
		width: '100%',
	},
	divResena: {
		display: "flex",
		justifyContent: "center",
		// marginBottom: '10px',
		width: '100%',
		marginTop: '20px',
		marginBottom: '20px',
	},
	// horizontalLine: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	width: '100px',
	// 	height: '3px',
	// 	backgroundColor: '#CF9500',
	// 	marginBottom: '40px',
	// },
	fondo: {
		// width: '100%',
		backgroundColor: '#f8f8f8',
	},
	resenaImage: {
		width: '20%',
		height: 'auto',
	},
	writeResenaImage: {
		width: '15%',
		height: '100%',
	},


}));

const GoogleReviews = () => {

	const classes = useStyles();
	const { t } = useTranslation();


	return (
		<div className={classes.fondo}>

		<Grid container>
			<Grid item xs={12} sm={12} md={12} >
				<div className={classes.logoResenas}>
					{ t('idioma') === 'es' && <img src={resenaVerificada} alt="opiniones" className={classes.resenaImage} />}
					{ t('idioma') === 'en' && <img src={verifiedReviewsLogo} alt="opiniones" className={classes.resenaImage} /> }
					{ t('idioma') === 'fr' && <img src={googleAvisClients} alt="opiniones" className={classes.resenaImage} /> }
				</div>
			</Grid>

			<Grid item xs={12} sm={12} md={12} style={{paddingBottom: '1em'}}>
				<GoogleBadge/>
			</Grid>

			<Grid item xs={1} sm={1} md={1} />
			<Grid item xs={10} sm={10} md={10} >
				<CarouselOpiniones />
			</Grid>
			<Grid item xs={1} sm={1} md={1} />

			<Grid item xs={12} sm={12} md={12} >
				<div className={classes.divResena} >
					{ t('idioma') === 'es' && <img src={escriberesena} alt="resena" className={classes.writeResenaImage} />}
					{ t('idioma') === 'en' && <img src={reviewUsGoogle} alt="resena" className={classes.writeResenaImage} />}
					{ t('idioma') === 'fr' && <img src={reviewUsFrench} alt="resena" className={classes.writeResenaImage} />}
				</div>
			</Grid>

			</Grid>
		</div>
	)
};

export default GoogleReviews;
