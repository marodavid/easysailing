import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid, Typography } from '@mui/material';
import { Dialog, DialogTitle,  } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat } from '@fortawesome/free-solid-svg-icons'
import GeneralMenu2 from "../generalmenu/GeneralMenu2";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import {esES, LocalizationProvider} from '@mui/x-date-pickers';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'




import pazEasySailing from '../../images/cursos/pazEasySailing.jpeg'
import PazCursoEasySailing from '../../images/cursos/PazCursoEasySailing.jpg'
import VentanaVideo from "../ventanavideo/VentanaVideo";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import {getTodayDate} from "@mui/x-date-pickers/internals";

const useStyles = makeStyles((theme) => ({
	card: {
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},

	button: {
		display: "flex",
		justifyContent: "center",
		marginBottom: '10px',
		marginTop: '15px',
		width: '100%',
	},

	tituloCursos: {
		display: "flex",
		justifyContent: "left",
		marginBottom: '10px',
		marginTop: '15px',
		width: '100%',
	},

	tituloTexto: {
		// fontFamily: 'Cinzel',
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
	},

	tituloBulletpoint: {
		// fontFamily: 'Cinzel',
		fontFamily: 'Reem Kufi Fun',
		// fontFamily: "Roboto Helvetica Arial sans-serif",
		fontWeight: '300',
		fontSize: '21px',
	},
	textoBulletpoint: {
		// fontFamily: 'Cinzel',
		// fontFamily: 'Reem Kufi Fun',
		fontFamily: "Roboto Helvetica Arial sans-serif",
		fontWeight: '300',
		fontSize: '19px',
	},

	horizontalLine: {
		display: "flex",
		justifyContent: "center",
		width: '100px',
		height: '3px',
		backgroundColor: '#CF9500',
		marginBottom: '40px',

	},
	separator: {
		height: '10px',
	},
	separatorBulletPoint: {
		height: '30px',
	},
	separatorBetweenPoint: {
		height: '20px',
	},
	bigSeparator: {
		height: '100px',
	},


}));

const LicenciaNavegacion = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const classes = useStyles();
	const {t, i18n} = useTranslation();

	return (
		<>
			<GeneralMenu2 />
			<Grid container>

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					{/*<div className={classes.tituloCursos} style={{alignItems: "left"}}>*/}
						<Typography variant="h3" className={classes.tituloTexto} align={'left'}  >
							{/*{' Cursos y Licencias'}*/}
							{ t('cursos.LicenciaNavegacion.Titulo')}
						</Typography>
					{/*</div>*/}
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					<div className={classes.tituloCursos}>
						<div className={classes.horizontalLine} />
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />



				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={8} sm={8} md={5} lg={5} >
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo1')}
					</Typography>
					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo2')}
					</Typography>
					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo3')}
					</Typography>

					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo4')}
					</Typography>
					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo5')}
					</Typography>
					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo6')}
					</Typography>
					<div className={classes.separator} />
					<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo7')}
					</Typography>


					</Grid>
				<Grid item xs={0.25} sm={0.25} md={1} lg={1} />
				<Grid item xs={2.5} sm={2.5} md={3} lg={3} >
					{/*<VentanaVideo  embedId='https://player.vimeo.com/video/721928154' />*/}
					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />
				</Grid>
				<Grid item xs={0.25} sm={0.25} md={1} lg={1} />

				<Grid item xs={12} sm={12} md={12} lg={12} >
					<div className={classes.bigSeparator} />
				</Grid>


				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={8} sm={8} md={5} lg={5} >
					<Typography variant="h5" className={classes.tituloTexto} style={{fontWeight: 'bold'}} align={'left'} >
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Heading')}
					</Typography>
				</Grid>
				<Grid item xs={3} sm={3} md={5} lg={5} />

				<Grid item xs={12} sm={12} md={12} lg={12} >
					<div className={classes.separatorBulletPoint} />
				</Grid>


				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}
				<Grid item xs={5} sm={5} md={6} lg={6} >
					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />
				</Grid>
				{/*<Grid item xs={1} sm={1} md={1} lg={1 } />*/}
				<Grid item xs={5} sm={5} md={6} lg={6} >
					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />
				</Grid>
				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}


				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={1} sm={1} md={0.75} lg={0.75} >
					<FontAwesomeIcon icon={faSailboat} size="3x" />
					{/*<span className={classes.tituloBulletpoint}>{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto1Titulo') }</span>*/}
				</Grid>

				<Grid item xs={3.5} sm={3.5} md={2} lg={2} >
					{/*<Typography variant="h6" className={classes.tituloBulletpoint} align={'left'} >*/}
						<span className={classes.tituloBulletpoint}>
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto1Titulo')}
						{/*{ 'Atribuciones Licencia dee' }*/}
						</span>
					<div className={classes.separatorBetweenPoint} />
					{/*</Typography>*/}
					<span className={classes.textoBulletpoint} align={'left'} >
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto1Texto')}
						{/*{ 'Atribuciones Licencia dee' }*/}
					</span>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={1} />

				<Grid item xs={3.5} sm={3.5} md={2} lg={2} >
					<Typography variant="h5" className={classes.tituloTexto} align={'left'} >
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Heading')}
					</Typography>
				</Grid>

				{/*<iframe src="https://player.vimeo.com/video/835483432?h=8c9cd503a9" width="640" height="564" frameBorder="0"*/}
				{/*				allow="autoplay; fullscreen" allowFullScreen></iframe>*/}



				<Grid item xs={3} sm={3} md={5} lg={5} />


				<Grid item xs={12} sm={12} md={12} lg={12} >
					<div className={classes.bigSeparator} />
				</Grid>

				{/*<Grid item xs={12} sm={12} md={12} lg={12} >*/}
				{/*	<div className={classes.separator} />*/}
				{/*</Grid>*/}



				<Grid item xs={12} sm={12} md={12} lg={12} >
					<div className={classes.button}>
						{/*<a*/}
						{/*	href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.LicenciaNavegacion.Reserva')}`}*/}
						{/*	target="_blank"*/}
						{/*	rel="noopener noreferrer"*/}
						{/*	>*/}
							<Button size='large' variant='outlined' sx={{ bgcolor: '#CF9500', color: 'white' }} onClick={handleClickOpen}>
								{ t('cursos.LicenciaNavegacion.ReservaBoton') }
							</Button>
						{/*</a>*/}
					</div>
				</Grid>



			</Grid>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{ t('cursos.LicenciaNavegacion.ReservaBoton') }</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{ ' ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD '}
					</DialogContentText>

					<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('idioma')}>
						<DatePicker defaultValue={dayjs(new Date())} />
					</LocalizationProvider>
					<br/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</>

				);


}

export default LicenciaNavegacion;
