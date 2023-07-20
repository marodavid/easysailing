import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import {styled} from "@mui/system"
import { Card, CardContent, CardMedia, Dialog, DialogTitle, Grid, Typography } from '@mui/material';

// import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import whatsapplogo from "../alquileres/whatsapp-icon.svg";

import licenciaNavegacion from '../../images/cursos/licenciaNavegacion.png'
import perVelero from '../../images/cursos/perVelero.jpg'
import clasesPerfec from '../../images/cursos/clasesPerfeccionamiento.PNG'
import PazCursoEasySailing from '../../images/cursos/PazCursoEasySailing.jpg'


const CardStyled = styled(Card)(({ theme }) => ({
	transition: 'transform 0.3s',
	'&:hover': {
		transform: 'scale(1.05)',
	},
}));

const LinkStyled = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
}));

const LinkCursos = styled('a')(({ theme }) => ({
	textDecoration: 'none',
}));

const DivTituloCursos = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginBottom: '10px',
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
	marginBottom: '40px',
}));

const TypographyTituloTexto= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '700',
	fontSize: '32px'
}));

const TypographyTituloIntroduccion= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '500',
	textAlign: 'center',
}));

const DivBoton = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginBottom: '10px',
	marginTop: '15px',
	width: '100%',
}));

const TypographyTitulos = styled(Typography)(({ theme }) => ({
	fontFamily: 'Alegreya SC',
	color: 'black',
	[theme.breakpoints.down('md')]: {
		maxWidth: '100%',
		fontSize: '100%',
		// maxHeight: '100%',
	},
}));

const BotonWhatsapp = styled('div')(({ theme }) => ({
	border: '2px solid #25d366',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '25px',
	padding: '15px',
}));


const Actividades = () => {

	const { t, i18n } = useTranslation();

	const [openLNPart, setOpenLNPart] = React.useState(false);
	const [openPER, setOpenPER] = React.useState(false);
	const [openClases, setOpenClases] = React.useState(false);
	const [openIntroNav, setOpenIntroNav] = React.useState(false);

	const handleClickOpenLNPart = () => setOpenLNPart(true);
	const handleClickOpenPER = () => setOpenPER(true);
	const handleClickOpenClases = () => setOpenClases(true);
	const handleClickOpenIntroNav = () => setOpenIntroNav(true);

	const handleCloseLNPart = () => setOpenLNPart(false);
	const handleClosePER = () => setOpenPER(false);
	const handleCloseClases = () => setOpenClases(false);
	const handleCloseIntroNav = () => setOpenIntroNav(false);

	const openLicenciaNavegacion = () => window.location.replace(window.location.protocol + "//" + window.location.host + "/licencia_navegacion");

	const cards = [
		{
			id: 1,
			title: t('cursos.LicenciaNavegacion.Titulo'),
			image: licenciaNavegacion,
			text: t('cursos.LicenciaNavegacion.Subtitulo'),
			// enlace: 'licencia_navegacion'
			enlace: openLicenciaNavegacion,
		},
		{
			id: 2,
			title: t('cursos.LnParticular.Titulo'),
			image: PazCursoEasySailing,
			text: t('cursos.LnParticular.Subtitulo'),
			enlace: handleClickOpenLNPart,
		},
		{
			id: 3,
			title: t('cursos.PerVela.Titulo'),
			image: perVelero,
			text: t('cursos.PerVela.Subtitulo'),
			enlace: handleClickOpenPER,
		},
		{
			id: 4,
			title: t('cursos.ClasesPerfec.Titulo'),
			image: clasesPerfec,
			text: t('cursos.ClasesPerfec.Subtitulo'),
			enlace: handleClickOpenClases,
		},
		{
			id: 5,
			title: t('cursos.IntroNavegacion.Titulo'),
			image: 'https://media.sailwiz.com/1098345b71a/licencia-de-navegacion.jpg',
			text: t('cursos.IntroNavegacion.Subtitulo'),
			enlace: handleClickOpenIntroNav,
		},
	];

	return (
		<>
			<Grid container id="actividades">
				<Grid item xs={12} sm={12} md={12} >
					<DivTituloCursos>
							<TypographyTituloTexto variant="h1" >
								{ t('actividades.portada')}
							</TypographyTituloTexto>
					</DivTituloCursos>
				</Grid>
				<Grid item xs={12} sm={12} md={12} >
					<DivTituloCursos >
					<DivHorizontalLine />
					</DivTituloCursos>
				</Grid>

				<Grid item xs={2} sm={2} md={3} />
				<Grid item xs={8} sm={8} md={6} >
					<TypographyTituloIntroduccion variant="body1" >
						{ t('actividades.introduccion')}
					</TypographyTituloIntroduccion>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('actividades.introduccion2')}
					</TypographyTituloIntroduccion>

				</Grid>
				<Grid item xs={2} sm={2} md={3} />
				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>

				<Grid item xs={12} sm={12} md={2} />


			<Grid item xs={12} sm={12} md={8} >
				<Grid container spacing={3}>
					{cards.map((card) => (
						<>
						<Grid item xs={1} sm={0.5} md={0.25} />
						<Grid item xs={10} sm={4} md={3.5} key={card.id}>
							<LinkCursos onClick={card.enlace} >
								<CardStyled>
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
									<DivBoton>
										{/*<FontAwesomeIcon icon={faHeartCirclePlus} color={'black'} size="lg" />*/}
										{/*<FontAwesomeIcon icon={light("circle-plus")} />*/}
										<AddCircleOutlineIcon fontSize={'large'} />
									</DivBoton>
								</CardContent>
								</CardStyled>
							</LinkCursos>
						</Grid>
						<Grid item xs={1} sm={0.5} md={0.25}/>
						</>
					))}
				</Grid>
			</Grid>
			<Grid item xs={12} sm={12} md={2} />


			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} >
				{/*<DivBoton>*/}
				{/*	/!*<a*!/*/}
				{/*	/!*	href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.LicenciaNavegacion.Reserva')}`}*!/*/}
				{/*	/!*	target="_blank"*!/*/}
				{/*	/!*	rel="noopener noreferrer"*!/*/}
				{/*	/!*	>*!/*/}
				{/*	<Button size='large' variant='outlined' sx={{ bgcolor: '#CF9500', color: 'white' }} onClick={null}>*/}
				{/*		{ t('cursos.LicenciaNavegacion.ReservaBoton') }*/}
				{/*	</Button>*/}
				{/*	/!*</a>*!/*/}
				{/*</DivBoton>*/}
			</Grid>
			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} >
				<hr/>
				<DivSeparator />
			</Grid>


			</Grid>
			{/*<Outlet />*/}

			{/*<LN Particular />*/}
			<Dialog
				open={openLNPart}
				onClose={handleCloseLNPart}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion variant="h5" >
						{ t('cursos.LnParticular.Titulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					{/*<TypographyTituloIntroduccion variant="body1" >*/}
					{/*	{ t('cursos.LnParticular.Subtitulo')}*/}
					{/*</TypographyTituloIntroduccion>*/}
					{/*<TypographyTituloIntroduccion variant="body1" >*/}
					{/*	{ t('cursos.LnParticular.Parrafo1')}*/}
					{/*</TypographyTituloIntroduccion>*/}
					{/*<DivSeparator />*/}
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.LnParticular.Parrafo2')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.LnParticular.Parrafo3')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.LnParticular.Parrafo4')}
					</TypographyTituloIntroduccion>
				</DialogContent>
				<DialogActions >
					<DivBoton>
					<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.LnParticular.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
						<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
							<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
							<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('cursos.LnParticular.ReservaBoton')}
							</span>
						</BotonWhatsapp>
					</a>
					</DivBoton>
					{/*<Button onClick={handleCloseLNPart}>Close</Button>*/}
				</DialogActions>
			</Dialog>


			{/*<PER />*/}
			<Dialog
				open={openPER}
				onClose={handleClosePER}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion variant="h5" >
						{ t('cursos.PerVela.Subtitulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Parrafo1')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Parrafo2')}
					</TypographyTituloIntroduccion>
				</DialogContent>
				<DialogActions >
					<DivBoton>
					<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.PerVela.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
						<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
							<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
							<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('cursos.PerVela.ReservaBoton')}
							</span>
						</BotonWhatsapp>
					</a>
					</DivBoton>
					{/*<Button onClick={handleClosePER}>Close</Button>*/}
				</DialogActions>
			</Dialog>

			{/*<CLASES PERFECCIONAMIENTO />*/}
			<Dialog
				open={openClases}
				onClose={handleCloseClases}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion variant="h5" >
						{ t('cursos.ClasesPerfec.Titulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.ClasesPerfec.Parrafo1')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{t('cursos.ClasesPerfec.GruposTexto')}
					</TypographyTituloIntroduccion>
					<TypographyTituloIntroduccion variant="body1" >
						{t('cursos.ClasesPerfec.GruposPrecio')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{t('cursos.ClasesPerfec.MixtoTexto')}
					</TypographyTituloIntroduccion>
					<TypographyTituloIntroduccion variant="body1" >
						{t('cursos.ClasesPerfec.MixtoPrecio')}
					</TypographyTituloIntroduccion>
				</DialogContent>
				<DialogActions >
					<DivBoton>
					<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.ClasesPerfec.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
						<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
							<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
							<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('cursos.ClasesPerfec.ReservaBoton')}
							</span>
						</BotonWhatsapp>
					</a>
					</DivBoton>
					{/*<Button onClick={handleClosePER}>Close</Button>*/}
				</DialogActions>
			</Dialog>

		{/*<INTRO NAVEGACION />*/}
			<Dialog
				open={openIntroNav}
				onClose={handleCloseIntroNav}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion variant="h5" >
						{ t('cursos.IntroNavegacion.Titulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.IntroNavegacion.Parrafo1')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{t('cursos.IntroNavegacion.Parrafo2')}
					</TypographyTituloIntroduccion>
				</DialogContent>
				<DialogActions >
					<DivBoton>
					<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.ClasesPerfec.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
						<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
							<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
							<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('cursos.ClasesPerfec.ReservaBoton')}
							</span>
						</BotonWhatsapp>
					</a>
					</DivBoton>
					{/*<Button onClick={handleClosePER}>Close</Button>*/}
				</DialogActions>
			</Dialog>

		</>
	);
};

export default Actividades;
