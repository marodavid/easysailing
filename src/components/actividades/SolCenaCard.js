import React from 'react'
import {CardContent, CardMedia, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

import {faClock, faGasPump, faPeopleGroup, faShip, faUtensils} from "@fortawesome/free-solid-svg-icons";
import atardecerCena from "../../images/actividades/atardecerCena.JPG";
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
	TypographyTituloTexto, violeta
} from './CardComponents'

const SolCenaCard = () => {

	const { t, i18n } = useTranslation();

	return (
		<CardStyled>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={6} sm={6} md={6}>
						<CardMedia
							component="img"
							alt={'atardecerCena'}
							height="300"
							image={atardecerCena}
						/>
					</Grid>
					<Grid item xs={6} sm={6} md={6} >
						<Grid container spacing={1}>
							<Grid item xs={12} sm={12} md={12} >
								<TypographyTituloTexto variant="h2" style={{color: '#7c73e6'}} >
									{ t('actividades.expSolCena.protitulo')}
								</TypographyTituloTexto>
								<TypographySubTituloTexto variant="h5" style={{color: '#7c73e6'}} >
									{ t('actividades.expSolCena.titulo')}
								</TypographySubTituloTexto>
								<DivParagraphSeparator />
								<BarcoFeatures>
									<IconoVioleta icon={faClock} />
									<SpanBarcoFeatures>{t('actividades.expSolCena.duracion')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faPeopleGroup} />
									<SpanBarcoFeatures>{t('actividades.expSolCena.capacidad')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faGasPump} />
									<SpanBarcoFeatures>{t('actividades.expSolCena.barco')}</SpanBarcoFeatures>
								</BarcoFeatures>
								<BarcoFeatures>
									<IconoVioleta icon={faUtensils} />
									<SpanBarcoFeatures>{t('actividades.expSolCena.bebida')}</SpanBarcoFeatures>
								</BarcoFeatures>
							</Grid>
						</Grid>


					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.expSolCena.subtitulo')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto variant="h5" >
							{ t('actividades.expSolCena.actividad')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<Grid container>
							<Grid item xs={6} sm={6} md={6}>
								<BarcoPrecio>
									{t('actividades.expSolCena.precio')}<br/>
									<span style={{color: violeta, fontSize: '0.65em'}}>{t('actividades.expSolCena.precioTexto')}</span>
								</BarcoPrecio>
							</Grid>
							<Grid item xs={6} sm={6} md={6}>
								<BarcoPrecio>
									{t('actividades.expSolCena.precio2')}<br/>
									<span style={{color: violeta, fontSize: '0.65em'}}>{t('actividades.expSolCena.precio2Texto')}</span>
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

export default SolCenaCard
