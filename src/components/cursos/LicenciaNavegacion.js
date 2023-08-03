import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from "@mui/system"
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSailboat, faCompassDrafting, faSun } from '@fortawesome/free-solid-svg-icons'

import jetSki from '../../images/cursos/licencianavegacion/jetski.png'
import helice from '../../images/cursos/licencianavegacion/helice.png'
import whatsapplogo from "../../images/cursos/whatsapp-icon.svg";
import GeneralMenu2 from "../generalmenu/GeneralMenu2";
import VentanaVideo from "../ventanavideo/VentanaVideo";

// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import {esES, LocalizationProvider} from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import {getTodayDate} from "@mui/x-date-pickers/internals";
// import dayjs from 'dayjs';
// import 'dayjs/locale/de';
// import 'dayjs/locale/en-gb';
// import 'dayjs/locale/es';
// import 'dayjs/locale/fr';


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
	backgroundColor: colorBoton,
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

const BotonWhatsapp = styled('div')(({ theme }) => ({
	border: '2px solid #CF9500',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '25px',
	padding: '15px',
}));

const colorBoton = '#CF9500'



const LicenciaNavegacion = () => {

	// const [open, setOpen] = useState(false);
	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };
	// const handleClose = () => {
	// 	setOpen(false);
	// };

	const { t } = useTranslation();

	return (
		<>
			<GeneralMenu2 />
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivBigSeparator />
				</Grid>

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					<Typography
						variant="h3"
						align={'left'}
						sx={{
							fontFamily: 'Reem Kufi Fun',
							fontWeight: '700',
							fontSize: {xl: '48px', lg: '48px', md: '48px', sm:'36px', xs: '30px'}
						}}
					>
						{ t('cursos.LicenciaNavegacion.Titulo')}
					</Typography>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8} >
					<DivTituloCursos>
						<DivHorizontalLine />
					</DivTituloCursos>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={5} lg={5} >
					<Typography variant="body1" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
						{ t('cursos.LicenciaNavegacion.Parrafo1')}
					</Typography>
					<DivSeparator />
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
					<PrimerVideo>
						<VentanaVideo  embedId='https://player.vimeo.com/video/838927728?h=d3ef5f63dc' />
					</PrimerVideo>
				</Grid>
				<Grid item xs={0.25} sm={0.25} md={0.5} lg={0.5} />

				<Grid item xs={12} sm={12} md={12} lg={12} >
					<DivBigSeparator />
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
				</Grid>

				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={2} sm={1} md={0.75} lg={0.75} >
					<FontAwesomeIcon icon={faSailboat} size="3x" />
				</Grid>
				<Grid item xs={8} sm={3.5} md={2} lg={2} >
					<SpanTituloBulletpoint align={'left'}>
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
						<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.LicenciaNavegacion.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
							<BotonWhatsapp style={{backgroundColor:colorBoton}}>
								<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
								<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em', textTransform: 'upperCase'}}>
										{t('cursos.ClasesPerfec.ReservaBoton')}
								</span>
							</BotonWhatsapp>
						</a>
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
			</Grid>

			{/*<Dialog open={open} onClose={handleClose}>*/}
			{/*	<DialogTitle>{ t('cursos.LicenciaNavegacion.ReservaBoton') }</DialogTitle>*/}
			{/*	<DialogContent>*/}
			{/*		<DialogContentText>*/}
			{/*			{ ' ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD '}*/}
			{/*		</DialogContentText>*/}

			{/*		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={t('idioma')}>*/}
			{/*			<DatePicker defaultValue={dayjs(new Date())} />*/}
			{/*		</LocalizationProvider>*/}
			{/*		<br/>*/}
			{/*		<TextField*/}
			{/*			autoFocus*/}
			{/*			margin="dense"*/}
			{/*			id="name"*/}
			{/*			label="Email Address"*/}
			{/*			type="email"*/}
			{/*			fullWidth*/}
			{/*			variant="standard"*/}
			{/*		/>*/}
			{/*	</DialogContent>*/}
			{/*	<DialogActions>*/}
			{/*		<Button onClick={handleClose}>Cancel</Button>*/}
			{/*		<Button onClick={handleClose}>Subscribe</Button>*/}
			{/*	</DialogActions>*/}
			{/*</Dialog>*/}
		</>

				);
}

export default LicenciaNavegacion;
