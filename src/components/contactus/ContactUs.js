import React from 'react'
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import VentanaVideo from "../ventanavideo/VentanaVideo";


const WhatsAppIconSize = styled(WhatsAppIcon)(({ theme}) => ({
	color: 'white',
	fontSize: 45,
	[theme.breakpoints.down('md')]: {
		fontSize: 35,
	}
}));

const PhoneInTalkIconSize = styled(PhoneInTalkIcon)(({ theme}) => ({
	color: 'white',
	fontSize: 45,
	[theme.breakpoints.down('md')]: {
		fontSize: 35,
	}
}));

const LocationOnIconSize = styled(LocationOnIcon)(({ theme}) => ({
	color: 'white',
	fontSize: 45,
	[theme.breakpoints.down('md')]: {
		fontSize: 35,
	}
}));

const FacebookIconSize = styled(FacebookIcon)(({ theme}) => ({
	color: 'white',
	fontSize: 45,
	[theme.breakpoints.down('md')]: {
		fontSize: 35,
	}
}));

const InstagramIconSize = styled(InstagramIcon)(({ theme}) => ({
	color: 'white',
	fontSize: 45,
	[theme.breakpoints.down('md')]: {
		fontSize: 35,
	}
}));




const DivTituloCursos = styled('div')(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginBottom: '10px',
	width: '100%',
}));


const DivSeparator = styled('div')(({ theme }) => ({
	marginBottom: '40px',
}));

const DivParagraphSeparator = styled('div')(({ theme }) => ({
	marginBottom: '15px',
}));

const DivDoubleParagraphSeparator = styled('div')(({ theme }) => ({
	marginBottom: '30px',
}));

const TypographyTituloTexto= styled('div')(({ theme }) => ({
	// fontFamily: 'Reem Kufi Fun',
	// fontFamily: 'Barlow Condensed, sans-serif',
	// fontWeight: '700',
	textTransform: 'upperCase',
	fontSize: '32px',
	// fontSize: '3em'
	// fontFamily: 'Source Code Pro, monospace',
	fontFamily: 'Oswald, sans-serif',
	color: 'white'

}));

const TypographyTituloIntroduccion= styled('div')(({ theme }) => ({
	// fontFamily: 'Reem Kufi Fun',
	// fontWeight: '500',
	fontFamily: 'Average Sans, sans-serif',
	// fontFamily: 'Roboto',
	fontWeight: '400',
	fontSize: '1.25em',
	color: 'white',
	// textAlign: 'center',
}));

const DivContactUs = styled('div')(({ theme }) => ({
	backgroundColor: fondo,
}));


// const fondo = '#FFF1F1';
// const fondo = 'white';
// const fondo = '#E4EFFF';
// const fondo = '#E4EBFF';
// const fondo = '#eaf6f6';
// const fondo = '#005051';
const fondo = '#66bfbf';


const ContactUs = () => {

	const { t } = useTranslation();

	return (
		<DivContactUs id={'contacto'}>
		<Grid container id="contactus">
			<Grid item xs={12} sm={12} md={12} >
				<div align="center">
					<DivSeparator />
					<DivTituloCursos>
						<TypographyTituloTexto variant="h1" >
							{ t('contacta')}
							{/*{'Contacta con nosotros'}*/}
						</TypographyTituloTexto>
					</DivTituloCursos>
				</div>
			</Grid>

			<Grid item xs={12} sm={12} md={12} >
				<DivParagraphSeparator sx={{display:{xs: 'block', sm:'block', md: 'none'}}}/>
				<DivSeparator sx={{display:{xs: 'none', sm:'none', md: 'block'}}}/>
			</Grid>

			<Grid item xs={1} sm={1} md={0.5} />
			<Grid item xs={10} sm={10} md={3} >
				<div align="center">
					<a
						style={{textDecoration: 'none', color: 'white'}}
						href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('whatsappButton')}`}
						rel="noopener noreferrer"
						target="_blank">
							<TypographyTituloIntroduccion variant="body1" >
								<PhoneInTalkIconSize />
								<WhatsAppIconSize />
								<DivParagraphSeparator />
								{'+34 624 15 84 28'}
								<DivParagraphSeparator />
								{'+33 622 18 90 63'}
							</TypographyTituloIntroduccion>
							<DivDoubleParagraphSeparator />
					</a>
				</div>
			</Grid>
			<Grid item xs={1} sm={1} md={0.5} />

			<Grid item xs={1} sm={1} md={0.5} />
			<Grid item xs={10} sm={10} md={3} >
				<div align="center">
					<a
						style={{textDecoration: 'none', color: 'white',}}
						href="https://goo.gl/maps/puSXaeBWDdZT4RnH8"
						rel="noopener noreferrer"
						target="_blank">
							<TypographyTituloIntroduccion variant="body1" sx={{display:{xs: 'none', sm:'none', md: 'inline-block'}}}>
								<LocationOnIconSize />
								<DivParagraphSeparator />
								{'Carrer de la Illeta'}<br/>
								{'03560 El Campello'}<br/>
								{'Alicante, Spain'}
							</TypographyTituloIntroduccion>
					</a>
				</div>
			</Grid>
			<Grid item xs={1} sm={1} md={0.5} />

			<Grid item xs={1} sm={1} md={0.5} />
			<Grid item xs={10} sm={10} md={3} >
				<div align="center" >
						<a
							style={{textDecoration: 'none', color: 'white'}}
							href="https://www.instagram.com/easysailing.es/"
							rel="noopener noreferrer"
							target="_blank">
							<InstagramIconSize />
						</a>
						{' '}
						<a
							style={{textDecoration: 'none'}}
							href="https://www.facebook.com/easysailing.es"
							rel="noopener noreferrer"
							target="_blank">
							<FacebookIconSize />
						</a>

						<DivParagraphSeparator />
						<div>
							<a
								style={{textDecoration: 'none', color: 'white'}}
								href="https://www.instagram.com/easysailing.es/"
								rel="noopener noreferrer"
								target="_blank">
								<TypographyTituloIntroduccion variant="body1" >{'@easysailing.es'}</TypographyTituloIntroduccion>
							</a>
						</div	>

				</div>
			</Grid>
			<Grid item xs={1} sm={1} md={0.5} />

			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>

			<Grid item xs={1} sm={1} md={1} />
			<Grid item xs={10} sm={10} md={10} >
				<div align="center">
					<a
						style={{textDecoration: 'none', color: 'white',}}
						href="https://goo.gl/maps/puSXaeBWDdZT4RnH8"
						rel="noopener noreferrer"
						target="_blank">
						<TypographyTituloIntroduccion variant="body1" sx={{display:{xs: 'block', sm:'block', md: 'none'}}}>
							<LocationOnIconSize />
							<DivParagraphSeparator />
							{'Carrer de la Illeta'}<br/>
							{'03560 El Campello'}<br/>
							{'Alicante, Spain'}
						</TypographyTituloIntroduccion>
					</a>
					<DivParagraphSeparator />
				</div>
			</Grid>
			<Grid item xs={1} sm={1} md={1} />

			<Grid item xs={1} sm={1} md={3} />
			<Grid item xs={10} sm={10} md={6} >
				<VentanaVideo embedId={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50390.9065303506!2d-0.48583282027373653!3d38.37959375408425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd623bb4f8934093%3A0xf4dfce42588efe58!2sEscuela%20N%C3%A1utica%20Easy%20Sailing!5e0!3m2!1sen!2sde!4v1690997287722!5m2!1sen!2sde'} />
			</Grid>
			<Grid item xs={1} sm={1} md={3} />


			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>


		</Grid>
		</DivContactUs>

	);
}

export default ContactUs
