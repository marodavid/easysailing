import React from 'react'
import {CardContent, CardMedia, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

import partyPhotos from "../../images/actividades/partyPhotos.jpg";
import whatsapplogo from "../alquileres/whatsapp-icon.svg";

import {
	BotonWhatsapp,
	CardStyled,
	DivBoton,
	DivParagraphSeparator,
	TypographyParrafoTexto,
	TypographyTituloTexto,
} from './CardComponents'


const PartyPhotosCard = () => {

	const { t, i18n } = useTranslation();

	return (
		<CardStyled>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={12} >
								<TypographyTituloTexto variant="h2" style={{color: '#7c73e6'}} >
									{ t('actividades.partyPhotos.titulo')}
								</TypographyTituloTexto>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<CardMedia
							component="img"
							alt={'partyPhotos'}
							height="200"
							image={partyPhotos}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.partyPhotos.subtitulo')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.partyPhotos.aclaracion')}
						</TypographyParrafoTexto>
						<DivParagraphSeparator />
						<DivBoton>
							<a href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('cursos.ClasesPerfec.Reserva')}`} target="_blank" rel="noopener" style={{textDecoration: 'none'}}>
								<BotonWhatsapp style={{backgroundColor:'#25d366'}}>
									<img src={whatsapplogo} alt={'icon'} style={{paddingLeft: '0.5em'}}/>
									<span style={{color: 'white', alignItems: 'strecht',paddingLeft: '1em'}}>
									{t('actividades.ConsultaBoton')}
							</span>
								</BotonWhatsapp>
							</a>
						</DivBoton>
					</Grid>
				</Grid>
			</CardContent>
		</CardStyled>
	)
}

export default PartyPhotosCard
