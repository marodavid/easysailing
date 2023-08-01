import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from "@mui/system"
import {
	Button,
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faRulerHorizontal, faPeopleGroup, faIdCard, faCameraRetro, faGasPump } from "@fortawesome/free-solid-svg-icons";

import alma2 from '../../images/alquileres/astilux2.jpg'
import hulk2 from '../../images/alquileres/bombard2.jpg'
import quicksilver from '../../images/alquileres/quicksilver.jpg'
import whatsapplogo from '../../images/alquileres/whatsapp-icon.svg'

import CarouselHulk from './CarouselHulk'
import CarouselAlma from './CarouselAlma'
import CarouselES from './CarouselES'
import VentanaVideo from "../ventanavideo/VentanaVideo";


const CardStyled = styled(Card)(({ theme }) => ({
	transition: 'transform 0.3s',
	// '&:hover': {
	// 	transform: 'scale(1.05)',
	// },
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
	fontSize: '20px',
}));

const BarcoFeatures= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '500',
	marginTop: '1em',
}));

const BarcoPrecio= styled('div')(({ theme }) => ({
	fontFamily: 'Reem Kufi Fun',
	fontWeight: '500',
	marginTop: '1em',
	textAlign: 'center',
}));

const TypographyTitulos = styled(Typography)(({ theme }) => ({
	fontFamily: 'Alegreya SC',
	color: 'black',
	[theme.breakpoints.down('md')]: {
		maxWidth: '100%',
		fontSize: '100%',
	},
}));

const SpanBarcoFeatures = styled('span')(({ theme }) => ({
	marginLeft: '1em',
}));

const IconoNaranja = styled(FontAwesomeIcon)(({ theme }) => ({
	color: 'orange',
}));

const BotonWhatsapp = styled('div')(({ theme }) => ({
	border: '2px solid #25d366',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '25px',
	padding: '15px',
}));

const BotonFotos = styled('div')(({ theme }) => ({
	border: '2px solid orange',
	display: 'flex',
	alignItems: 'center',
	borderRadius: '25px',
	padding: '15px',
}));


const Alquileres = () => {

	const { t } = useTranslation();
	const [openHulk, setOpenHulk] = useState(false);
	const [openAlma, setOpenAlma] = useState(false);
	const [openES, setOpenES] = useState(false);

	const handleClickOpenHulk = () => setOpenHulk(true);
	const handleClickOpenAlma = () => setOpenAlma(true);
	const handleClickOpenES = () => setOpenES(true);

	const handleCloseHulk = () => setOpenHulk(false);
	const handleCloseAlma = () => setOpenAlma(false);
	const handleCloseES = () => setOpenES(false);

	return (
		<>
			<Grid container id="alquileres">
				<Grid item xs={12} sm={12} md={12} >
					<DivTituloCursos>
							<TypographyTituloTexto variant="h1" >
								{ t('alquileres.portada')}
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
						{ t('alquileres.introduccion')}
					</TypographyTituloIntroduccion>
				</Grid>
				<Grid item xs={2} sm={2} md={3} />
				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>

				<Grid item xs={1} sm={1} md={2} />
				<Grid item xs={10} sm={10} md={3.5}>
					<CardStyled>
						<CardContent style={{backgroundColor: '#00B4D8'}}>
							<Typography variant="h5" component="div" gutterBottom style={{textAlign: 'center', textTransform: 'uppercase', color: 'white'}} >
								{ t('alquileres.alma.titulo') }
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							alt={'alma'}
							height="400"
							image={alma2}
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom >
								{ t('alquileres.alma.modelo') }
							</Typography>
							<BarcoFeatures>
								<IconoNaranja icon={faShip} />
								<SpanBarcoFeatures>{t('alquileres.alma.motor')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faRulerHorizontal} />
								<SpanBarcoFeatures>{t('alquileres.alma.eslora')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faPeopleGroup} />
								<SpanBarcoFeatures>{t('alquileres.alma.capacidad')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faIdCard} />
								<SpanBarcoFeatures>{t('alquileres.alma.titulacion')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoPrecio>
								<Grid container>
									<Grid item xs={6} sm={6} md={6}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.alma.titulo4')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.alma.precio4')}</span>
									</Grid>
									<Grid item xs={6} sm={6} md={6}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.alma.titulo9')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.alma.precio9')}</span>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('alquileres.alma.reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
											<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
												<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
															{t('alquileres.botonReserva')}
												</span>
											</BotonWhatsapp>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />

									<Grid item xs={12} sm={12} md={12} >
										<div style={{paddingTop: '1em'}} />
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a
											onClick={handleClickOpenAlma}
											style={{textDecoration: 'none', topMargin: '1em'}}>
											<BotonFotos style={{backgroundColor:'white',topMargin: '1em'}}>
												<FontAwesomeIcon fontSize='large' icon={faCameraRetro} color={'orange'} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'orange', alignItems: 'strecht',paddingLeft: '1em'}}>
															{t('alquileres.botonFotos')}
												</span>
											</BotonFotos>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
								</Grid>
							</BarcoPrecio>
						</CardContent>
					</CardStyled>
				</Grid>
				<Grid item xs={1} sm={1} md={0.5} />

				<Grid item xs={1} sm={1} md={0.5} />
				<Grid item xs={10} sm={10} md={3.5}>
					<CardStyled>
						<CardContent style={{backgroundColor: '#00B4D8'}}>
							<Typography variant="h5" component="div" gutterBottom style={{textAlign: 'center', textTransform: 'uppercase', color: 'white'}} >
								{ t('alquileres.easy_sailing.titulo') }
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							alt={'easy sailing'}
							height="400"
							image={quicksilver}
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom >
								{ t('alquileres.easy_sailing.modelo') }
							</Typography>
							<BarcoFeatures>
								<IconoNaranja icon={faShip} />
								<SpanBarcoFeatures>{t('alquileres.easy_sailing.motor')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faRulerHorizontal} />
								<SpanBarcoFeatures>{t('alquileres.easy_sailing.eslora')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faPeopleGroup} />
								<SpanBarcoFeatures>{t('alquileres.easy_sailing.capacidad')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faIdCard} />
								<SpanBarcoFeatures>{t('alquileres.easy_sailing.titulacion')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoPrecio>
								<Grid container id="alquileres">
									<Grid item xs={6} sm={6} md={6}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.easy_sailing.titulo4')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.easy_sailing.precio4')}</span>
									</Grid>
									<Grid item xs={6} sm={6} md={6}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.easy_sailing.titulo9')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.easy_sailing.precio9')}</span>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('alquileres.easy_sailing.reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
											<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
												<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
															{t('alquileres.botonReserva')}
												</span>
											</BotonWhatsapp>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />

									<Grid item xs={12} sm={12} md={12} >
										<div style={{paddingTop: '1em'}} />
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a
											onClick={handleClickOpenES}
											style={{textDecoration: 'none', topMargin: '1em'}}
										>
											<BotonFotos style={{backgroundColor:'white',topMargin: '1em'}}>
												<FontAwesomeIcon fontSize='large' icon={faCameraRetro} color={'orange'} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'orange', alignItems: 'strecht',paddingLeft: '1em'}}>
																{t('alquileres.botonFotos')}
													</span>
											</BotonFotos>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
								</Grid>
							</BarcoPrecio>
						</CardContent>
					</CardStyled>
				</Grid>
				<Grid item xs={1} sm={1} md={2} />

				<Grid item xs={12} sm={12} md={12}>
					<DivSeparator />
				</Grid>
				<Grid item xs={1} sm={1} md={4} />
				<Grid item xs={10} sm={10} md={4} >
					<CardStyled>
						<CardContent style={{backgroundColor: '#00B4D8'}}>
							<Typography variant="h5" component="div" gutterBottom style={{textAlign: 'center', textTransform: 'uppercase', color: 'white'}} >
								{ t('alquileres.hulk.titulo') }
							</Typography>
						</CardContent>
						<CardMedia
							component="img"
							alt={'hulk'}
							height="400"
							image={hulk2}
						/>
						<CardContent>
							<Typography variant="h5" component="div" gutterBottom >
								{ t('alquileres.hulk.modelo') }
							</Typography>
							<BarcoFeatures>
								<IconoNaranja icon={faShip} />
								<SpanBarcoFeatures>{t('alquileres.hulk.motor')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faRulerHorizontal} />
								<SpanBarcoFeatures>{t('alquileres.hulk.eslora')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faPeopleGroup} />
								<SpanBarcoFeatures>{t('alquileres.hulk.capacidad')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faGasPump} />
								<SpanBarcoFeatures>{t('alquileres.hulk.gasolina2')}&nbsp;&nbsp;&nbsp;&nbsp;{t('alquileres.hulk.gasolina4')}&nbsp;&nbsp;&nbsp;&nbsp;{t('alquileres.hulk.gasolina9')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoFeatures>
								<IconoNaranja icon={faIdCard} />
								<SpanBarcoFeatures>{t('alquileres.hulk.titulacion')}</SpanBarcoFeatures>
							</BarcoFeatures>
							<BarcoPrecio>
								<Grid container>
									<Grid item xs={4} sm={4} md={4}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.hulk.titulo2')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.hulk.precio2')}</span>
									</Grid>
									<Grid item xs={4} sm={4} md={4}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.hulk.titulo4')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.hulk.precio4')}</span>
									</Grid>
									<Grid item xs={4} sm={4} md={4}>
										<span style={{color: 'orange', fontSize: '1.5em'}}>{t('alquileres.hulk.titulo9')}</span>
										<div style={{topMargin: '1em'}} />
										<span style={{color: '#00B4D8', fontSize: '2.25em'}}>{t('alquileres.hulk.precio9')}</span>
									</Grid>

									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('alquileres.hulk.reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
											<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
												<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
															{t('alquileres.botonReserva')}
												</span>
											</BotonWhatsapp>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />

									<Grid item xs={12} sm={12} md={12} >
										<div style={{paddingTop: '1em'}} />
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
									<Grid item xs={10} sm={10} md={8}>
										<a
											onClick={handleClickOpenHulk}
											style={{textDecoration: 'none', topMargin: '1em'}}
										>
											<BotonFotos style={{backgroundColor:'white',topMargin: '1em'}}>
												<FontAwesomeIcon fontSize='large' icon={faCameraRetro} color={'orange'} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
												<span style={{color: 'orange', alignItems: 'strecht',paddingLeft: '1em'}}>
													{t('alquileres.botonFotos')}
												</span>
											</BotonFotos>
										</a>
									</Grid>
									<Grid item xs={1} sm={1} md={2} />
								</Grid>
							</BarcoPrecio>
							<BarcoFeatures>
								<span>{t('alquileres.hulk.notaPrecio')}</span>
							</BarcoFeatures>
						</CardContent>
					</CardStyled>
				</Grid>
				<Grid item xs={1} sm={1} md={4} />

				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>
				<Grid item xs={12} sm={12} md={12} >
					<DivSeparator />
				</Grid>

				{/* VIDEO TABARCA */}
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<div align={'center'}>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{t('alquileres.tabarca1')}
						</TypographyTitulos>
						<TypographyTitulos
							variant="h3"
							underline="none"
							color={'white'}
						>
							{t('alquileres.tabarca2')}
						</TypographyTitulos>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />
				<Grid item xs={10} sm={10} md={8} lg={8}>
					<VentanaVideo  embedId='https://player.vimeo.com/video/721928154' />
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={2} />

				<Grid item xs={12} sm={12} md={12} >
					<hr/>
					<DivSeparator />
				</Grid>
			</Grid>

			<Dialog
				open={openHulk}
				onClose={handleCloseHulk}
				PaperProps={{
					sx: {
						minHeight: '90vh',
						maxHeight: '90vh',
					}
				}}
			>
				<DialogTitle>{ t('alquileres.hulk.titulo') }</DialogTitle>
				<DialogContent>
					<CarouselHulk/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseHulk}>Close</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={openAlma}
				onClose={handleCloseAlma}
				PaperProps={{
					sx: {
						minHeight: '90vh',
						maxHeight: '90vh',
					}
				}}
			>
				<DialogTitle>{ t('alquileres.alma.titulo') }</DialogTitle>
				<DialogContent>
					<CarouselAlma/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseAlma}>Close</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={openES}
				onClose={handleCloseES}
				PaperProps={{
					sx: {
						minHeight: '90vh',
						maxHeight: '90vh',
					}
				}}
			>
				<DialogTitle>{ t('alquileres.easy_sailing.titulo') }</DialogTitle>
				<DialogContent>
					<CarouselES/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseES}>Close</Button>
				</DialogActions>
			</Dialog>

		</>
	);
};

export default Alquileres;
