import React from 'react'
import {useTranslation} from "react-i18next";
import {
	CardContent,
	CardMedia,
	Grid
} from "@mui/material";
import {faClock, faGasPump, faPeopleGroup, faUtensils} from "@fortawesome/free-solid-svg-icons";
import amanecerDesayuno from "../../images/actividades/amanecerDesayuno.png";
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
	TypographyTituloTexto, violeta
} from './CardComponents'

const SolDesayunoCard = () => {

	const { t } = useTranslation();

	return (
		<CardStyled>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={6}>
						<CardMedia
							component="img"
							alt={'amanecerDesayuno'}
							height="300"
							image={amanecerDesayuno}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} >
						<Grid container spacing={1}>
							<Grid item xs={12} sm={12} md={12} >
								<TypographyTituloTexto variant="h2" style={{color: '#7c73e6'}} >
									{ t('actividades.expSolDesayuno.protitulo')}
								</TypographyTituloTexto>
								<TypographySubTituloTexto variant="h5" style={{color: '#7c73e6'}} >
									{ t('actividades.expSolDesayuno.titulo')}
								</TypographySubTituloTexto>
								<DivParagraphSeparator />
								<BarcoFeatures>
									<IconoVioleta icon={faClock} />
									<SpanBarcoFeatures>{t('actividades.expSolDesayuno.duracion')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faPeopleGroup} />
									<SpanBarcoFeatures>{t('actividades.expSolDesayuno.capacidad')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faGasPump} />
									<SpanBarcoFeatures>{t('actividades.expSolDesayuno.barco')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faUtensils} />
									<SpanBarcoFeatures>{t('actividades.expSolDesayuno.bebida')}</SpanBarcoFeatures>
								</BarcoFeatures>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.expSolDesayuno.subtitulo')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto variant="h5" >
							{ t('actividades.expSolDesayuno.actividad')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<Grid container>
							<Grid item xs={6} sm={6} md={6}>
								<BarcoPrecio>
									{t('actividades.expSolDesayuno.precio')}<br/>
									<span style={{color: violeta, fontSize: '0.65em'}}>{t('actividades.expSolDesayuno.precioTexto')}</span>
								</BarcoPrecio>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<BarcoPrecio>
									{t('actividades.expSolDesayuno.precio2')}<br/>
									<span style={{color: violeta, fontSize: '0.65em'}}>{t('actividades.expSolDesayuno.precio2Texto')}</span>
								</BarcoPrecio>
							</Grid>
						</Grid>
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

export default SolDesayunoCard
