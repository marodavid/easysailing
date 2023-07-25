import React from 'react'
import {CardContent, CardMedia, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

import {faClock, faGasPump, faPeopleGroup, faShip, faUtensils} from "@fortawesome/free-solid-svg-icons";
import islaBenidorm from "../../images/actividades/islaBenidorm.jpeg";
import whatsapplogo from "../alquileres/whatsapp-icon.svg";

import {
	BarcoFeatures,
	BarcoPrecio,
	BotonWhatsapp,
	CardStyled,
	DivBoton,
	DivParagraphSeparator,
	IconoVioleta,
	SpanBarcoFeatures,
	TypographyParrafoTexto,
	TypographySubTituloTexto,
	TypographyTituloTexto
} from './CardComponents'

const BenidormCard = () => {

	const { t, i18n } = useTranslation();

	return (
		<CardStyled>
			{/*<CardContent style={{backgroundColor: '#00B4D8'}}>*/}
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6}>
						{/*<div style={{height: '250px', width: 'auto'}}>*/}
						<CardMedia
							component="img"
							alt={'islaBenidorm'}
							height="350"
							image={islaBenidorm}
						/>
						{/*</div>*/}
					</Grid>
					<Grid item xs={12} sm={12} md={6} >
						<Grid container spacing={1}>
							{/*<Grid item xs={1} sm={1} md={1} />*/}
							<Grid item xs={12} sm={12} md={12} >
								<TypographyTituloTexto variant="h2" style={{color: '#7c73e6'}} >
									{ t('actividades.charterBenidorm.protitulo')}
								</TypographyTituloTexto>
								<TypographySubTituloTexto variant="h5" style={{color: '#7c73e6'}} >
									{ t('actividades.charterBenidorm.titulo')}
								</TypographySubTituloTexto>
								<DivParagraphSeparator />


								<BarcoFeatures>
									<IconoVioleta icon={faClock} />
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.duracion')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faPeopleGroup} />
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.capacidad')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faShip} />
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.incluidos')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faGasPump} />
									{/*<SpanBarcoFeatures>{t('alquileres.hulk.titulacion')}</SpanBarcoFeatures>*/}
									{/*<SpanBarcoFeatures>{`10€ (2 Horas)`}&nbsp;&nbsp;&nbsp;&nbsp;{'20€ (4 Horas)'}&nbsp;&nbsp;&nbsp;&nbsp;{'30€ (9 Horas)'}</SpanBarcoFeatures>*/}
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.barco')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faUtensils} />
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.bebida')}</SpanBarcoFeatures>
								</BarcoFeatures>


							</Grid>
							{/*<Grid item xs={1} sm={1} md={1} />*/}
						</Grid>


					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.charterBenidorm.subtitulo')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto variant="h5" >
							{ t('actividades.charterBenidorm.actividad')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto>
							{ t('actividades.charterBenidorm.aclaracion')}
						</TypographyParrafoTexto>
						<TypographyParrafoTexto>
							{ t('actividades.charterBenidorm.aclaracion2')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto>
							{ t('actividades.charterBenidorm.aclaracion3')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<BarcoPrecio>
							{t('actividades.charterBenidorm.precio')}
						</BarcoPrecio>
						{/*<div align="center"><span style={{color: '#7c73e6', fontSize: '1.75em'}}>{t('actividades.charterBenidorm.precio')}</span></div>*/}
						<DivParagraphSeparator />
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
						<DivParagraphSeparator />

					</Grid>


				</Grid>

			</CardContent>
			{/*<CardContent style={{backgroundColor: '#e0ffcd'}}>*/}
			{/*	<Typography variant="h5" component="div" gutterBottom style={{textAlign: 'center',  color: '#385170'}} >*/}
			{/*		{ t('actividades.charterBenidorm.protitulo') }*/}
			{/*	</Typography>*/}
			{/*</CardContent>*/}

			{/*<CardMedia*/}
			{/*		component="img"*/}
			{/*		alt={'islaBenidorm'}*/}
			{/*		height="400"*/}
			{/*		image={islaBenidorm}*/}
			{/*	/>*/}

			<CardContent>
				<Grid container>
					<Grid item xs={6} sm={6} md={6} />
					<Grid item xs={6} sm={6} md={6} />
				</Grid>
			</CardContent>
			{/*)}*/}
		</CardStyled>

	)
}

export default BenidormCard
