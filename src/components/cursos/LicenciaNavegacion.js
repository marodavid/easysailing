import React from 'react';
import {styled} from "@mui/system"

import { Button, Grid, Typography } from '@mui/material';
import { Dialog, DialogTitle,  } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import {esES, LocalizationProvider} from '@mui/x-date-pickers';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat, faCompassDrafting, faSun } from '@fortawesome/free-solid-svg-icons'
import jetSki from '../../images/cursos/licencianavegacion/jetski.png'
import helice from '../../images/cursos/licencianavegacion/helice.png'

import GeneralMenu2 from "../generalmenu/GeneralMenu2";

import VentanaVideo from "../ventanavideo/VentanaVideo";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import {getTodayDate} from "@mui/x-date-pickers/internals";


const DivBoton = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginBottom: '10px',
	marginTop: '15px',
	width: '100%',
}));

const DivTituloCursos = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	marginBottom: '10px',
	marginTop: '15px',
	width: '100%',
}));

const SpanTituloBulletpoint = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	marginBottom: '10px',
	marginTop: '15px',
	width: '100%',
}));

const DivHorizontalLine = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	width: '100px',
	height: '3px',
	backgroundColor: '#CF9500',
	marginBottom: '20px',
}));

const DivSeparator = styled('div')(({ theme }) => ({
	height: '1em',
}));

const DivSeparatorBulletpoint = styled('div')(({ theme }) => ({
	height: '1em',
}));

const DivBigSeparator = styled('div')(({ theme }) => ({
	height: '3em',
}));

const ImagenLogoJetski = styled('img')(({ theme }) => ({
	width: '80%',
	height: 'auto',
	marginLeft: '-1.5em',
	[theme.breakpoints.down("xl")]: {
		width: '95%',
		marginLeft: '-0.5em',

	},
}));

const ImagenLogoHelice = styled('img')(({ theme }) => ({
	width: '50%',
	height: 'auto',
	marginLeft: '-0.5em',
	[theme.breakpoints.down("xl")]: {
		width: '70%',
		marginLeft: '0em',
	}
}));

const PrimerVideo = styled('span')(({ theme }) => ({
	[theme.breakpoints.down("lg")]: {
			display: 'none',
	}
}));


const LicenciaNavegacion = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { t } = useTranslation();

	return (
		<>
			<GeneralMenu2 />
			<Grid container>

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					{/*<div className={classes.tituloCursos} style={{alignItems: "left"}}>*/}
						<Typography variant="h3" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
							{/*{' Cursos y Licencias'}*/}
							{ t('cursos.LicenciaNavegacion.Titulo')}
						</Typography>
					{/*</div>*/}
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					<DivTituloCursos>
						<DivHorizontalLine />
						{/*<div className={classes.horizontalLine} />*/}
					</DivTituloCursos>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />



				<Grid item xs={1} sm={1} md={2} lg={2} />
				{/*<Grid item xs={8} sm={8} md={5} lg={5} >*/}
				<Grid item xs={10} sm={10} md={5} lg={5} >
					{/*<Typography variant="body1" className={classes.tituloTexto} align={'left'}  >*/}
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo1')}
					</Typography>
					<DivSeparator />
					{/*<div className={classes.separator} />*/}
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo2')}
					</Typography>
					<DivSeparator />
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo3')}
					</Typography>

					<DivSeparator />
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo4')}
					</Typography>
					<DivSeparator />
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo5')}
					</Typography>
					<DivSeparator />
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo6')}
					</Typography>
					<DivSeparator />
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo7')}
					</Typography>
				</Grid>

				<Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} />
				<Grid item xs={0.25} sm={0.25} md={4} lg={4} >

				{/*<Grid item xs={0.25} sm={0.25} md={1} lg={0.25} />*/}

				{/*<Grid item xs={2.75} sm={2.75} md={4} lg={4} >*/}
				{/*<Grid item xs={2.75} sm={2.75} md={5} lg={5} >*/}
				{/*<Grid item xs={2.5} sm={2.5} md={3} lg={3.75} >*/}
					{/*<VentanaVideo  embedId='https://player.vimeo.com/video/721928154' />*/}
					<PrimerVideo>
						<VentanaVideo  embedId='https://player.vimeo.com/video/838927728?h=d3ef5f63dc' />
					</PrimerVideo>
				</Grid>
				<Grid item xs={0.25} sm={0.25} md={0.5} lg={0.5} />



				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}
				{/*<Grid item xs={10} sm={10} md={3} lg={3} >*/}
				{/*	<VentanaVideo  embedId='https://player.vimeo.com/video/838914025?' />*/}
				{/*</Grid>*/}
				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}

				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}
				{/*<Grid item xs={10} sm={10} md={3} lg={3} >*/}
				{/*	<VentanaVideo  embedId='https://player.vimeo.com/video/838914025?' />*/}
				{/*</Grid>*/}
				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}

				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}
				{/*<Grid item xs={10} sm={10} md={3} lg={3} >*/}
				{/*	<VentanaVideo  embedId='https://player.vimeo.com/video/838914025?' />*/}
				{/*</Grid>*/}
				{/*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*/}



				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivBigSeparator />
					{/*<div className={classes.bigSeparator} />*/}
				</Grid>


				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={8} sm={8} md={5} lg={5} >
					<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: 'bold'}} align={'left'} >
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Heading')}
					</Typography>
				</Grid>
				<Grid item xs={3} sm={3} md={5} lg={5} />

				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivSeparatorBulletpoint />
					{/*<div className={classes.separatorBulletPoint} />*/}
				</Grid>


				{/*/!*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*!/*/}
				{/*<Grid item xs={5} sm={5} md={6} lg={6} >*/}
				{/*	<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
				{/*</Grid>*/}
				{/*/!*<Grid item xs={1} sm={1} md={1} lg={1 } />*!/*/}
				{/*<Grid item xs={5} sm={5} md={6} lg={6} >*/}
				{/*	<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
				{/*</Grid>*/}
				{/*/!*<Grid item xs={1} sm={1} md={0.5} lg={0.5} />*!/*/}



				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<FontAwesomeIcon icon={faSailboat} size="3x" />
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'}>
					{/*<span className={classes.textoBulletpoint} align={'left'} >*/}
						<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >

						{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto1Texto')}
						</Typography>
					</SpanTituloBulletpoint>
				</Grid>

				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />
				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />

				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<FontAwesomeIcon icon={faCompassDrafting} size="3x" />
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'} >
					{/*<span className={classes.textoBulletpoint} align={'left'} >*/}
						<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto2Texto')}
						</Typography>
					</SpanTituloBulletpoint>
				</Grid>
				<Grid item xs={1} sm={1} md={2.5} lg={2.5} />


				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<FontAwesomeIcon icon={faSun} size="3x" />
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'}>
						<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
							{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto3Texto')}
						</Typography>
					</SpanTituloBulletpoint>
				</Grid>

				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />
				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />

				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<ImagenLogoHelice src={helice} />
					{/*<img src={helice} style={{width: '50%', height: 'auto', marginLeft: '-0.5em'}} align="left"/>*/}
					{/*<FontAwesomeIcon icon={faSailboat} size="3x" />*/}
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'} >
						<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
							{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto4Texto')}
						</Typography>
					</SpanTituloBulletpoint>
				</Grid>
				<Grid item xs={1} sm={1} md={2.5} lg={2.5} />



				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<ImagenLogoJetski src={jetSki} />
					{/*<img src={jetSki} style={{width: '80%', height: 'auto', marginLeft: '-1.5em'}} align="left"/>*/}
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'}>
						<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
							{ t('cursos.LicenciaNavegacion.Bulletpoint.Punto5Texto')}
						</Typography>
					</SpanTituloBulletpoint>
				</Grid>

				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />
				<Grid item xs={1} sm={0.5} md={0.5} lg={0.5} />

				<Grid item xs={12} sm={6} md={6} lg={6} />



				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivBigSeparator />
				</Grid>
			</Grid>

			<Grid container spacing={0.5}>




			<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivBoton>
						{/*<a*/}
						{/*	href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.LicenciaNavegacion.Reserva')}`}*/}
						{/*	target="_blank"*/}
						{/*	rel="noopener noreferrer"*/}
						{/*	>*/}
						{/*	<Button size='large' variant='outlined' sx={{ bgcolor: '#CF9500', color: 'white'}} onClick={handleClickOpen}>*/}
							<Button size='large'
														 sx={{
														 	bgcolor: '#CF9500',
														 	color: 'white',
															"&.MuiButtonBase-root:hover": {
																bgcolor: "#CF9500",
																transform: 'scale(1.15)',
															}}}
														 onClick={handleClickOpen}>
								{ t('cursos.LicenciaNavegacion.ReservaBoton') }
							</Button>
						{/*</a>*/}
					</DivBoton>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivSeparator />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<VentanaVideo embedId={'https://player.vimeo.com/video/838956949?badge=0'} />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivSeparator />
				</Grid>

{/*				<Grid item xs={12} sm={12} md={3} lg={3} >*/}
{/*					<div height="3000px">*/}
{/*					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
{/*					</div>*/}
{/*				</Grid>*/}
{/*				<Grid item xs={12} sm={12} md={3} lg={3} >*/}
{/*					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
{/*				</Grid>*/}

{/*<Grid item xs={12} sm={12} md={3} lg={3} >*/}
{/*					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
{/*				</Grid>*/}

{/*<Grid item xs={12} sm={12} md={3} lg={3} >*/}
{/*					<VentanaVideo  embedId='https://player.vimeo.com/video/835483432?h=8c9cd503a9' />*/}
{/*				</Grid>*/}



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
