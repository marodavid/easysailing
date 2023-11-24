import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '@mui/system'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
	Card,
	CardContent,
	CardMedia,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Typography
} from '@mui/material';

import whatsapplogo from '../../images/cursos/whatsapp-icon.svg';
import licenciaNavegacion from '../../images/cursos/licencianavegacion/licenciaNavegacion.png'
import perVelero from '../../images/cursos/perVela/perVela.jpg'
import pnbVelero from '../../images/cursos/PNB/pnbFoto.jpg'
import bautismo from '../../images/cursos/bautismo/bautismo.png'
import clasesPerfec from '../../images/cursos/clasesPerfeccionamiento/clasesPerfeccionamiento.png'
import PazCursoEasySailing from '../../images/cursos/LNParticularIntensiva/PazCursoEasySailing.jpg'
import logoGobierno from '../../images/logosOficiales/logoEscuelaHomologada.png'
import { DivLineSeparator } from '../actividades/CardComponents';


const CardStyled = styled(Card)(({ theme }) => ({
	transition: 'transform 0.3s',
	'&:hover': {
		transform: 'scale(1.05)',
	},
}));

const LinkCursos = styled('a')(({ theme }) => ({
	textDecoration: 'none',
}));

const DivTituloCursos = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '10px',
	width: '100%',
}));

const DivHorizontalLine = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
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
	fontSize: '20px'
}));

const TypographyTituloIntroduccionPNB= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '500',
	textAlign: 'left',
	fontSize: '20px'
}));

const DivBoton = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '10px',
	marginTop: '15px',
	width: '100%',
}));

const BotonWhatsapp = styled('div')(({ theme }) => ({
	border: '2px solid #25d366',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '25px',
	padding: '15px',
}));

const LogoIMG = styled('img')(({ theme }) => ({
	width: '8em',
	height: '8em',
	justifyContent:'center',
	alignItems:'center',
	[theme.breakpoints.down('md')]:{
		width: '3em',
		height: '3em',
	}
}));


const Cursos = () => {

	const { t } = useTranslation();

	const [openLNPart, setOpenLNPart] = useState(false);
	const [openPER, setOpenPER] = useState(false);
	const [openPNB, setOpenPNB] = useState(false);
	const [openClases, setOpenClases] = useState(false);
	const [openIntroNav, setOpenIntroNav] = useState(false);

	const handleClickOpenLNPart = () => setOpenLNPart(true);
	const handleClickOpenPER = () => setOpenPER(true);
	const handleClickOpenPNB = () => setOpenPNB(true);
	const handleClickOpenClases = () => setOpenClases(true);
	const handleClickOpenIntroNav = () => setOpenIntroNav(true);

	const handleCloseLNPart = () => setOpenLNPart(false);
	const handleClosePER = () => setOpenPER(false);
	const handleClosePNB = () => setOpenPNB(false);
	const handleCloseClases = () => setOpenClases(false);
	const handleCloseIntroNav = () => setOpenIntroNav(false);

	const openLicenciaNavegacion = () => window.location.replace(window.location.protocol + "//" + window.location.host + "/licencia_navegacion");

	const cards = [
		{
			id: 1,
			title: t('cursos.LicenciaNavegacion.Titulo'),
			image: licenciaNavegacion,
			text: t('cursos.LicenciaNavegacion.Subtitulo'),
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
			title: t('cursos.ClasesPerfec.Titulo'),
			image: clasesPerfec,
			text: t('cursos.ClasesPerfec.Subtitulo'),
			enlace: handleClickOpenClases,
		},
		{
			id: 4,
			title: t('cursos.PNB.Titulo'),
			image: pnbVelero,
			text: t('cursos.PNB.Subtitulo'),
			enlace: handleClickOpenPNB,
		},

		{
			id: 5,
			title: t('cursos.PerVela.Titulo'),
			image: perVelero,
			text: t('cursos.PerVela.Subtitulo'),
			enlace: handleClickOpenPER,
		},
		{
			id: 6,
			title: t('cursos.IntroNavegacion.Titulo'),
			image: bautismo,
			text: t('cursos.IntroNavegacion.Subtitulo'),
			enlace: handleClickOpenIntroNav,
		},
	];

	return (
		<>
			<Grid container direction="row"
						justifyContent="center"
						alignItems="center"
						id="cursos">

				<Grid item xs={12} sm={12} md={12} >
					<DivTituloCursos>
						<TypographyTituloTexto variant="h1" >
							{ t('cursos.portada')}
						</TypographyTituloTexto>
					</DivTituloCursos>
				</Grid>

				<Grid item xs={12} sm={12} md={12} >
					<DivTituloCursos >
					<DivHorizontalLine />
					</DivTituloCursos>
				</Grid>


				<Grid item xs={3} sm={3} md={3} sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}}/>
				<Grid item xs={6} sm={6} md={6} sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}}>
					<div align="center"><LogoIMG src={logoGobierno} alt={'Escuela homologada'} /></div>
				</Grid>
				<Grid item xs={3} sm={3} md={3} sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}}/>

				<Grid item xs={2} sm={2} sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}}/>
				<Grid item xs={8} sm={8} sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}} >
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.introduccion')}
						{' '}
						{ t('cursos.introduccion2')}
						<DivLineSeparator />
						{ t('cursos.introduccion3')}
						<DivLineSeparator />
						{ t('cursos.introduccion4')}
					</TypographyTituloIntroduccion>
				</Grid>
				<Grid item xs={2} sm={2}  sx={{display: {xl: 'none', lg: 'none', md: 'none', sm: 'none'}}} />

				<Grid item xs={2} sm={2} md={2} lg={2} xl={2}  sx={{display: {xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block'}}} />
				<Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} xl={1.5} sx={{display: {xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block'}}} >
					<div align="center"><LogoIMG src={logoGobierno} alt={'Escuela homologada'} /></div>
				</Grid>
				<Grid item xs={5} sm={5} md={5}   sx={{display: {xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block'}}} >
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.introduccion')}
						<br />
						{ t('cursos.introduccion2')}
						<DivLineSeparator />
						{ t('cursos.introduccion3')}
						<DivLineSeparator />
						{ t('cursos.introduccion4')}
					</TypographyTituloIntroduccion>
				</Grid>
				<Grid item xs={1.5} sm={1.5} md={1.5}  sx={{display: {xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block'}}} >
					{/*<div align="center"><LogoIMG src={logoTurismo} alt={'Turismo'} /></div>*/}
				</Grid>
				<Grid item xs={2} sm={2} md={2}  sx={{display: {xs: 'none', sm: 'inline-block', md: 'inline-block', lg: 'inline-block', xl: 'inline-block'}}} />

				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>

				<Grid item xs={12} sm={12} md={2} />
				<Grid item xs={12} sm={12} md={8} >
					<Grid container spacing={3}>
						{cards.map((card) => (
							<>
							<Grid item xs={1} sm={0.5} md={0.25} />
							<Grid item xs={10} sm={5} md={3.5} key={card.id}>
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
										<Typography variant="body1" color="text.secondary">
											{card.text}
										</Typography>
										<DivBoton>
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

				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>

				<Grid item xs={12} sm={12} md={12} >
					<hr/>
					<DivSeparator />
				</Grid>

			</Grid>

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
				</DialogActions>
			</Dialog>

			{/*<PER />*/}
			<Dialog
				open={openPER}
				onClose={handleClosePER}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion style={{fontWeight: 'bold'}} variant="h5" >
						{ t('cursos.PerVela.Titulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PerVela.Subtitulo')}
					</TypographyTituloIntroduccionPNB>
					<DivSeparator />
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PerVela.Parrafo1')}
					</TypographyTituloIntroduccionPNB>

					<ul className="a">
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo2')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo3')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo4')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo5')}</li>
					</ul>

					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Parrafo6')}
					</TypographyTituloIntroduccion>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Parrafo7')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PerVela.Parrafo8')}
					</TypographyTituloIntroduccionPNB>
					<DivSeparator />
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PerVela.Parrafo9')}
					</TypographyTituloIntroduccionPNB>
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PerVela.Parrafo10')}
					</TypographyTituloIntroduccionPNB>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Precios')}
					</TypographyTituloIntroduccion>
					<ul className="a">
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo11')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo12')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo13')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo14')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PerVela.Parrafo15')}</li>
					</ul>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PerVela.Parrafo16')}
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
				</DialogActions>
			</Dialog>

			{/*<PNB />*/}
			<Dialog
				open={openPNB}
				onClose={handleClosePNB}
			>
				<DialogTitle>
					<TypographyTituloIntroduccion style={{fontWeight: 'bold'}} variant="h5" >
						{ t('cursos.PNB.Titulo')}
					</TypographyTituloIntroduccion>
				</DialogTitle>
				<DialogContent>
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PNB.Subtitulo')}
					</TypographyTituloIntroduccionPNB>
					<DivSeparator />
					<TypographyTituloIntroduccionPNB variant="body1" >
						{ t('cursos.PNB.Parrafo1')}
					</TypographyTituloIntroduccionPNB>

					<ul className="a">
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo2')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo3')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo4')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo5')}</li>
					</ul>

					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PNB.Parrafo6')}
					</TypographyTituloIntroduccion>
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PNB.Parrafo7')}
					</TypographyTituloIntroduccion>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PNB.Precios')}
					</TypographyTituloIntroduccion>
					<ul className="a">
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo8')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo9')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo10')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo11')}</li>
						<li style={{listStyleType: 'circle'}}>{ t('cursos.PNB.Parrafo12')}</li>
					</ul>
					<DivSeparator />
					<TypographyTituloIntroduccion variant="body1" >
						{ t('cursos.PNB.Parrafo13')}
					</TypographyTituloIntroduccion>
				</DialogContent>
				<DialogActions >
					<DivBoton>
					<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.PNB.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
						<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
							<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
							<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('cursos.PNB.ReservaBoton')}
							</span>
						</BotonWhatsapp>
					</a>
					</DivBoton>
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
				</DialogActions>
			</Dialog>

		</>
	);
};

export default Cursos;
