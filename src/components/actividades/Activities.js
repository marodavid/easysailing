import React from 'react'
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

import TabarcaCard from './TabarcaCard'
import BenidormCard from "./BenidormCard";
import SolCenaCard from "./SolCenaCard";
import SolDesayunoCard from "./SolDesayunoCard";
import SportCalasCard from "./SportCalasCard";
import SportDivingCard from "./SportDivingCard";
import SportMindfulCard from "./SportMindfulCard";
import SportVelaCard from "./SportVelaCard";
import PartyBachelorCard from "./PartyBachelorCard";
import PartyBirthdayCard from "./PartyBirthdayCard";
import PartyPhotosCard from "./PartyPhotosCard";
import PartyRegaloCard from "./PartyRegaloCard";
import EmpresasCard from "./EmpresasCard";
import CustomMadeCard from "./CustomMadeCard";


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

const DivParagraphSeparator = styled('div')(({ theme }) => ({
	marginBottom: '15px',
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
}));

const DivActividades = styled('div')(({ theme }) => ({
	backgroundColor: fondo,
}));

const fondo = '#FFF1F1';
// const fondo = '#E4EFFF';
// const fondo = '#E4EBFF';


const Activities = () => {

	const { t, i18n } = useTranslation();

	return (
		<DivActividades>
		<Grid container id="actividades">
			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
				<DivTituloCursos>
					<TypographyTituloTexto variant="h1" >
						{ t('actividades.portada')}
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
					{ t('actividades.introduccion')}
				</TypographyTituloIntroduccion>
				<TypographyTituloIntroduccion variant="body1" >
					{ t('actividades.introduccion2')}
				</TypographyTituloIntroduccion>

			</Grid>
			<Grid item xs={2} sm={2} md={3} />
			<Grid item xs={12} sm={12} md={12} >
				<DivSeparator />
			</Grid>


			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={10} sm={10} md={8} lg={9} >
				{/*<div className={classes.tituloCursos} style={{alignItems: "left"}}>*/}
				<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'}  >
					{/*{' Cursos y Licencias'}*/}
					{ t('actividades.charterTitulo')}
				</Typography>
				{/*</div>*/}
			</Grid>
			<Grid item xs={1} sm={1} md={2} lg={1.5} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<TabarcaCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<BenidormCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />
			{/* Fin Charters */}

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>

			{/* Experiencias */}
			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={10} sm={10} md={8} lg={9} >
				<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'} >
					{ t('actividades.expTitulo')}
				</Typography>
			</Grid>
			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<SolCenaCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<SolDesayunoCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />
			{/* Fin Experiencias */}

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>

			{/* Deportes */}
			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={10} sm={10} md={8} lg={9} >
				<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'} >
					{ t('actividades.sportTitulo')}
				</Typography>
			</Grid>
			<Grid item xs={1} sm={1} md={2} lg={1.5} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<SportCalasCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<SportDivingCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<SportMindfulCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<SportVelaCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />
			{/* Fin Deportes */}

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>


			{/* Fiestas */}
			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={10} sm={10} md={8} lg={9} >
				<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'} >
					{ t('actividades.partyTitulo')}
				</Typography>
			</Grid>
			<Grid item xs={1} sm={1} md={2} lg={1.5} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<PartyBachelorCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<PartyBirthdayCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<PartyPhotosCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<PartyRegaloCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />
			{/* Fin Fiestas */}

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>


			{/* Otras Actividades */}
			<Grid item xs={1} sm={1} md={2} lg={1.5} />
			<Grid item xs={10} sm={10} md={8} lg={9} >
				<Typography variant="h5" style={{fontFamily: 'Reem Kufi Fun', fontWeight: '700'}} align={'left'} >
					{ t('actividades.empresasTitulo')}
				</Typography>
			</Grid>
			<Grid item xs={1} sm={1} md={2} lg={1.5} />

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivParagraphSeparator />
			</Grid>

			<Grid item xs={12} sm={12} md={12} xl={1.25} />
			<Grid item xs={12} sm={12} md={12} xl={4.5} >
				<EmpresasCard />
			</Grid>
			<Grid item xs={12} sm={12} md={12} xl={0.5} />
			<Grid item xs={12} sm={12} md={12} xl={4.5}>
				<CustomMadeCard />
			</Grid>
			<Grid item xs={12} sm={12} md={1.25} xl={1.25} />

			{/* Fin Otras Actividades */}

			<Grid item xs={12} sm={12} md={12} xl={12} >
				<DivSeparator />
			</Grid>
		</Grid>
		</DivActividades>

	);
}

export default Activities
