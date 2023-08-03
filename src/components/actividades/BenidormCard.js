import React from 'react'
import {CardContent, CardMedia, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

import {faClock, faGasPump, faPeopleGroup, faShip, faUtensils} from "@fortawesome/free-solid-svg-icons";
import islaBenidorm from "../../images/actividades/islaBenidorm.jpeg";
import whatsapplogo from "../../images/actividades/whatsapp-icon.svg";

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

	const { t } = useTranslation();

	return (
		<CardStyled>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6}>
						<CardMedia
							component="img"
							alt={'islaBenidorm'}
							height="350"
							image={islaBenidorm}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} >
						<Grid container spacing={1}>
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
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.barco')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faUtensils} />
									<SpanBarcoFeatures>{t('actividades.charterBenidorm.bebida')}</SpanBarcoFeatures>
								</BarcoFeatures>
							</Grid>
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
						<DivParagraphSeparator />
						<TypographyParrafoTexto>
							{ t('actividades.charterBenidorm.aclaracion2')}
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

			<CardContent>
				<Grid container>
					<Grid item xs={6} sm={6} md={6} />
					<Grid item xs={6} sm={6} md={6} />
				</Grid>
			</CardContent>
		</CardStyled>
	)
}

export default BenidormCard
