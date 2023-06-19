import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';

import AnchorSpan from "../separadores/AnchorSpan";
import GoogleBadge from "./GoogleBadge";
import CarouselOpiniones from "./CarouselOpiniones";


const useStyles = makeStyles((theme) => ({
	tituloCursos: {
		display: "flex",
		justifyContent: "center",
		marginBottom: '10px',
		width: '100%',
	},
	horizontalLine: {
		display: "flex",
		justifyContent: "center",
		width: '100px',
		height: '3px',
		backgroundColor: '#CF9500',
		marginBottom: '40px',
	},
	tituloTexto: {
		// fontFamily: 'Cinzel',
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
	},
}));

const GoogleReviews = () => {

	const classes = useStyles();
	const { t, i18n } = useTranslation();


	return (
		<Grid container>
			<Grid item xs={12} sm={12} md={12} >
				<div className={classes.tituloCursos}>
					<Typography variant="h4" className={classes.tituloTexto}>
						{/*{' ? Qué dicen de nosotros ?'}*/}
						{t('opiniones.titulo')}
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} sm={12} md={12} >
				<div className={classes.tituloCursos}>
					<div className={classes.horizontalLine} />
				</div>
			</Grid>

			<Grid item xs={12} sm={12} md={12} >
				<GoogleBadge />
			</Grid>
			<Grid item xs={12} sm={12} md={12} >
				<CarouselOpiniones />
			</Grid>
		</Grid>
	)
};

export default GoogleReviews;
