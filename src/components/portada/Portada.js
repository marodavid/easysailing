import React from 'react'
// import PropTypes from 'prop-types'

import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';
import VentanaVideo from '../ventanavideo/VentanaVideo'
import GeneralMenu from "../generalmenu/GeneralMenu";
import AnchorSpan from "../separadores/AnchorSpan";
// import fondooceano from '../../images/fondoOceanoMedium.jpg'
import Typography from "@mui/material/Typography";
import portada1 from '../../images/portada/1-comienzaVerano.png'
import nudosfondo from '../../images/portada/nudosFondoPantalla.jpg'
import portada2 from '../../images/portada/2-licenciaNavegacion.png'
import portada3 from '../../images/portada/3-precio.png'
import portada4 from '../../images/portada/4-contacta.png'
import portada5 from '../../images/portada/5-flyerLicencia.png'
import motoagua from '../../images/portada/motoagua.jpg'
import barcoAlquiler from '../../images/portada/fotoBarco.jpg'


const DivFrames = styled('div')(({ theme }) => ({
	height: '400px',
	background: 'white',
	[theme.breakpoints.down('md')]: {
		height: '300px',
	},
	[theme.breakpoints.down('sm')]: {
		height: '200px',
	}
}));

const ImagenesFlyer = styled('img')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	maxWidth: '90%',
	[theme.breakpoints.up('md')]: {
		maxWidth: '70%',
		maxHeight: '100%',
	},
}));

const TypographyTitulos = styled(Typography)(({ theme }) => ({
	fontFamily: 'Alegreya SC',
	[theme.breakpoints.down('md')]: {
		maxWidth: '100%',
		fontSize: '100%',
		// maxHeight: '100%',
	},
}));

function Portada() {
	// const url = require('url').URL;
	return (
		<div style={{
			backgroundImage: `url(${nudosfondo})`
		}}>
			<GeneralMenu />
			<AnchorSpan />
			<Grid
				container
				direction="row"
				// justifyContent="space-evenly"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				{/* FILA FLYERS BANNER */}
				<Grid item xs={0.5} sm={0.5} md={1} lg={1} />
				<Grid item xs={11} sm={11} md={10} lg={10}>
					<div align="center" >
						<ImagenesFlyer
							src={ portada1 }
							alt={''}
						/>
					</div>
				</Grid>
				<Grid item xs={0.5} sm={10.5} md={1} lg={1} />

				{/* FILA FLYERS INFO */}
				<Grid item xs={12} sm={12} md={12} lg={12} alignItems='center'>
					<AnchorSpan />
				</Grid>
				<Grid item xs={1} sm={1} md={0.5} lg={0.25} />
				<Grid item xs={10} sm={10} md={5} lg={5.5}>
					<DivFrames align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'darkBlue'}
						>
							{'¿Qué puedo hacer?'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ portada2 }
							alt={''}
						/>
					</DivFrames>
				</Grid>
				<Grid item xs={1} sm={1} md={0.25} lg={0.25} />
				<Grid item xs={1} sm={1} md={0.25} lg={0.25} />
				<Grid item xs={10} sm={10} md={5.5} lg={5.5} alignItems='center'>
					<DivFrames align="center">
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'darkBlue'}
						>
							{'¿Y cuánto cuesta esta licencia?'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ portada3 }
							alt={''}
						/>
					</DivFrames>
				</Grid>
				<Grid item xs={1} sm={1} md={0.25} lg={0.25} />

				{/* FILA TE LO VAS A PERDER */}
				<Grid item xs={1} sm={1} md={1} lg={1} />
				<Grid item xs={10} sm={10} md={10} lg={10}>
					<div align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{'¿Aún tienes dudas?'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ portada5 }
							alt={''}
						/>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={1} />

				{/* SEPARATION */}
				<Grid item xs={12} sm={12} md={12} lg={12} />

				{/* FILA CONTACTANOS */}
				<Grid item xs={1} sm={1} md={1} lg={1} />
				<Grid item xs={10} sm={10} md={10} lg={10}>
					<div align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{'¿A qué esperas? Contáctanos !!'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ portada4 }
							alt={''}
						/>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={1} />

				{/* SEPARATION */}
				<Grid item xs={12} sm={12} md={12} lg={12} />

				{/* TABARCA */}
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<div align={'center'}>
						<TypographyTitulos
								variant="h2"
								underline="none"
								color={'white'}
							>
								{'Descubre Tabarca'}
						</TypographyTitulos>
						<TypographyTitulos
							variant="h2"
							underline="none"
							color={'white'}
						>
							{'con tu licencia de navegación'}
						</TypographyTitulos>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8}>
					<VentanaVideo  embedId='https://player.vimeo.com/video/721928154' />
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				{/* MOTOS DE AGUA */}
				<Grid item xs={12} sm={12} md={12} lg={12} alignItems='center'>
					<div align="center" style={{height: '50px'}} />
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={0.5} />
				<Grid item xs={10} sm={10} md={10} lg={5}>
					<div align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{'Disfruta Motos Acuáticas'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ motoagua }
							alt={''}
						/>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={0.5} />

				<Grid item xs={1} sm={1} md={1} lg={0.5} />
				<Grid item xs={10} sm={10} md={10} lg={5}>
					<div align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{'Te alquilamos una embarcación'}
						</TypographyTitulos>
						<br/>
						<ImagenesFlyer
							src={ barcoAlquiler }
							alt={''}
						/>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={0.5} />

				<Grid item xs={12} sm={12} md={12} lg={12}>
					<AnchorSpan />
				</Grid>
			</Grid>
		</div>
	)
}

export default Portada
