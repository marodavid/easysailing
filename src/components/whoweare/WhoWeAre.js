import React from 'react'
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

import Paz from '../../images/whoweare/pazEasySailing.jpeg'
import JeanDavid from '../../images/whoweare/jeanDavidEasySailing.jpg'
import ESLogo from '../../images/generalmenu/easySealingLogoBigUpPart.png'



const DivTituloCursos = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginBottom: '10px',
	width: '100%',
}));

const DivHorizontalLine = styled('div')(({ theme }) => ({
	display: "flex",
	width: '100px',
	height: '3px',
	backgroundColor: '#CF9500',
	marginBottom: '20px',
}));

const DivSeparator = styled('div')(({ theme }) => ({
	marginBottom: '40px',
}));

const DivParagraphSeparator = styled('div')(({ theme }) => ({
	marginBottom: '15px',
}));

const TypographyTituloTexto= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '700',
	// textTransform: 'upperCase',
	fontSize: '32px'
}));

const TypographyTituloIntroduccion= styled('div')(({ theme }) => ({
	fontFamily: 'Average Sans, sans-serif',
	fontWeight: '400',
	fontSize: '1.10em',
	// textAlign: 'center',
}));
const TypographyEquipo= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '400',
	fontSize: '1.5em',
	textAlign: 'center',
}));

const DivWhoWeAre = styled('div')(({ theme }) => ({
	backgroundColor: fondo,
}));

const DivMarco = styled('div')(({ theme }) => ({
	backgroundColor: '#ddc',
	border: 'solid 5vmin #eee',
	borderBottomColor: '#fff',
	borderLeftColor: '#eee',
	borderRadius: '2px',
	borderRightColor: '#eee',
	borderTopColor: '#ddd',
	boxShadow: '0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25)',
	boxSizing: 'border-box',
	display: 'inline-block',
	margin: '0vh 0vw',
	height: '40vh',
	padding: '2vmin',
	position: 'relative',
	textAlign: 'center',
	'&::before': {
		borderRadius:'2px',
		bottom:'-2vmin',
		boxShadow:'0 2px 5px 0 rgba(0,0,0,.25) inset',
		content:'""',
		left:'-2vmin',
		position:'absolute',
		right:'-2vmin',
		top:'-2vmin',
	},
		'&::after': {
		borderRadius:'2px',
		bottom:'-2.5vmin',
		boxShadow:' 0 2px 5px 0 rgba(0,0,0,.25)',
		content:'""',
		left:'-2.5vmin',
		position:'absolute',
		right:'-2.5vmin',
		top:'-2.5vmin',
	}
}));

const fondo = 'white';
// const fondo = '#FFF1F1';
// const fondo = '#E4EFFF';
// const fondo = '#E4EBFF';

const LogoIMG = styled('img')(({ theme }) => ({
	width: '6.5em',
	height: '6.5em',
	[theme.breakpoints.down('md')]:{
		width: '3em',
		height: '3em',
		display: 'none',
	}
}));


const WhoWeAre = () => {

	const { t } = useTranslation();

	return (
		<DivWhoWeAre>
		<Grid container id="whoweare">
			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
				<DivTituloCursos>
					<TypographyTituloTexto variant="h1" >
						{ t('whoweare.portada')}
					</TypographyTituloTexto>
				</DivTituloCursos>
			</Grid>

			<Grid item xs={12} sm={12} md={12} >
				<DivTituloCursos >
					<DivHorizontalLine />
				</DivTituloCursos>
			</Grid>

			<Grid item xs={1} sm={1} md={2} />
			<Grid item xs={10} sm={10} md={8} >
				<TypographyTituloIntroduccion variant="body1" >
					{ t('whoweare.parrafo1')}<br/>
					{ t('whoweare.parrafo2')}
				</TypographyTituloIntroduccion>
				<DivParagraphSeparator />
				<Grid container>
					<Grid item xs={12} sm={12} md={1.5} alignItems="center" justifyContent="center" >
						<LogoIMG src={ESLogo} alt={'logo'} />
					</Grid>
					<Grid item xs={12} sm={12} md={10.5} >
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.parrafo3')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.parrafo4')}
						</TypographyTituloIntroduccion>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={1} sm={1} md={2} />

			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>

			<Grid item xs={1} sm={1} md={2} />
			<Grid item xs={10} sm={10} md={3.75} >
				<DivMarco>
					<img
						src={Paz}
						alt={'Paz'}
						style={{
							maxWidth: '100%',
							alignImage: 'center',
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					/>
					<TypographyEquipo variant="body1" >
						{ t('whoweare.paz.nombre')}
					</TypographyEquipo>
				</DivMarco>
				<ul style={{ marginLeft: 1, marginRight: 2}}>
					<DivParagraphSeparator />
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.paz.parrafo1')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.paz.parrafo2')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.paz.parrafo3')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.paz.idiomas')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
				</ul>

			</Grid>
			<Grid item xs={1} sm={1} md={0.25} />
			<Grid item xs={1} sm={1} md={0.25} />
			<Grid item xs={10} sm={10} md={3.75} >
				<div align="center">
					<DivMarco>
						<img
							src={JeanDavid}
							alt={'JeanDavid'}
							style={{
								// maxWidth: '42%',
								maxHeight: '90%',
								alignImage: 'center',
								marginLeft: 'auto',
								marginRight: 'auto'
							}}
						/>
						<TypographyEquipo variant="body1" >
							{ t('whoweare.jean.nombre')}
						</TypographyEquipo>
					</DivMarco>
				</div>
				<ul style={{ marginLeft: 1, marginRight: 2}}>
					<DivParagraphSeparator />
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.jean.parrafo1')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.jean.parrafo2')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.jean.parrafo3')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
					<li>
						<TypographyTituloIntroduccion variant="body1" >
							{ t('whoweare.jean.idiomas')}
						</TypographyTituloIntroduccion>
						<DivParagraphSeparator />
					</li>
				</ul>
			</Grid>
			<Grid item xs={1} sm={1} md={2} />

			<Grid item xs={12} sm={12} md={12} >
			<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12}>
				<hr />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>

		</Grid>
		</DivWhoWeAre>
	);
}

export default WhoWeAre
