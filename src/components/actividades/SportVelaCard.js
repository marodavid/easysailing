import React from 'react'
import {CardContent, CardMedia, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

import sportVela from "../../images/actividades/sportVela.jpg";
import whatsapplogo from "../alquileres/whatsapp-icon.svg";

import {
	BotonWhatsapp,
	CardStyled,
	DivBoton,
	DivParagraphSeparator,
	TypographyParrafoTexto,
	TypographyTituloTexto,
} from './CardComponents'


const SportVelaCard = () => {

	const { t, i18n } = useTranslation();

	return (
		<CardStyled>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={12} >
								<TypographyTituloTexto variant="h2" style={{color: '#7c73e6'}} >
									{ t('actividades.sportVelaCrucero.protitulo')}
								</TypographyTituloTexto>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<CardMedia
							component="img"
							alt={'sportVela'}
							height="200"
							image={sportVela}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<TypographyParrafoTexto variant="h5">
							{ t('actividades.sportVelaCrucero.subtitulo')}
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

export default SportVelaCard
