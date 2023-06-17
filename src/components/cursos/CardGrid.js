import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {Card, CardContent, CardMedia, Dialog, Grid, Typography} from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';

import pazEasySailing from '../../images/cursos/pazEasySailing.jpeg'
import PazCursoEasySailing from '../../images/cursos/PazCursoEasySailing.jpg'

const useStyles = makeStyles((theme) => ({
	card: {
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},

	link: {
		textDecoration: 'none',
	},

	tituloCursos: {
		display: "flex",
		justifyContent: "center",
		marginBottom: '10px',
		width: '100%',
	},

	tituloTexto: {
		// fontFamily: 'Cinzel',
		// fontFamily: 'Roboto Slab',
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
	},

	horizontalLine: {
		display: "flex",
		justifyContent: "center",
		width: '100px',
		height: '3px',
		backgroundColor: '#CF9500',
		marginBottom: '40px',
	},
}));

const CardGrid = () => {
	const classes = useStyles();
	const { t, i18n } = useTranslation();

	const cards = [
		{
			id: 1,
			title: t('cursos.LicenciaNavegacion.Titulo'),
			image: pazEasySailing,
			text: t('cursos.LicenciaNavegacion.Subtitulo'),
			enlace: 'licencia_navegacion'
		},
		{
			id: 2,
			title: t('cursos.LnParticular.Titulo'),
			image: PazCursoEasySailing,
			text: t('cursos.LnParticular.Subtitulo'),
			enlace: "POR_DETERMINAR",
		},
		{
			id: 3,
			title: t('cursos.PerVela.Titulo'),
			image: 'https://media.sailwiz.com/1098345b71a/licencia-de-navegacion.jpg',
			text: t('cursos.PerVela.Subtitulo'),
			enlace: "POR_DETERMINAR",
		},
		{
			id: 4,
			title: t('cursos.ClasesPerfec.Titulo'),
			image: 'https://media.sailwiz.com/1098345b71a/licencia-de-navegacion.jpg',
			text: t('cursos.ClasesPerfec.Subtitulo'),
			enlace: "POR_DETERMINAR",
		},
		{
			id: 5,
			title: t('cursos.IntroNavegacion.Titulo'),
			image: 'https://media.sailwiz.com/1098345b71a/licencia-de-navegacion.jpg',
			text: t('cursos.IntroNavegacion.Subtitulo'),
			enlace: "POR_DETERMINAR",
		},
	];

	return (
		<>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} >
					<div className={classes.tituloCursos}>
							<Typography variant="h4" className={classes.tituloTexto}  >
								{ t('cursos.portada')}
							</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12} >
					<div className={classes.tituloCursos}>
					<div className={classes.horizontalLine} />
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={2} />



			<Grid item xs={12} sm={12} md={8} >
				<Grid container spacing={3}>
					{cards.map((card) => (
						<>
						<Grid item xs={1} sm={0.5} md={0.25} />
						<Grid item xs={10} sm={4} md={3.5} key={card.id}>
							<Link className={classes.link} to={card.enlace} >
								<Card className={classes.card}>
								<CardMedia
									component="img"
									alt={card.title}
									height="200"
									image={card.image}
								/>
								<CardContent>
									<Typography variant="h5" component="div" gutterBottom >
										{card.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{card.text}
									</Typography>
								</CardContent>
							</Card>
							</Link>
						</Grid>
						<Grid item xs={1} sm={0.5} md={0.25}/>
						</>
					))}
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={2} />
			</Grid>
			{/*<Outlet />*/}
		</>
	);
};

export default CardGrid;
