import React from 'react'
import {styled} from "@mui/system";
import {Card} from "@mui/material";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

	export const CardStyled = styled(Card)(({ theme }) => ({
		transition: 'transform 0.3s',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	}));


	export const DivTituloCursos = styled('div')(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		marginBottom: '10px',
		width: '100%',
	}));

	export const DivHorizontalLine = styled('div')(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		width: '100px',
		height: '3px',
		backgroundColor: '#CF9500',
		marginBottom: '20px',
	}));

	export const DivSeparator = styled('div')(({ theme }) => ({
		marginBottom: '40px',
	}));

	export const DivParagraphSeparator = styled('div')(({ theme }) => ({
		marginBottom: '15px',
	}));

export const DivLineSeparator = styled('div')(({ theme }) => ({
	marginBottom: '10px',
}));



	export const TypographyTituloTexto= styled('div')(({ theme }) => ({
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
		fontSize: '32px'
	}));

	export const TypographySubTituloTexto= styled('div')(({ theme }) => ({
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
		fontSize: '20px'
	}));

	export const TypographyParrafoTexto= styled('div')(({ theme }) => ({
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontSize: '18px',
		fontcolor: 'black',
	}));

	export const TypographyAclaracionTexto= styled('div')(({ theme }) => ({
		fontFamily: 'Roboto',
		fontWeight: '400',
		fontSize: '16px',
		fontcolor: 'black',
	}));

	export const IconoVioleta = styled(FontAwesomeIcon)(({ theme }) => ({
		color: violeta,
	}));

	export const SpanBarcoFeatures = styled('span')(({ theme }) => ({
		// fontSize: '20px',
		marginLeft: '1em',
	}));

	export const BarcoPrecio= styled('div')(({ theme }) => ({
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '700',
		marginTop: '1em',
		fontSize: '2em',
		color: violeta,
		textAlign: 'center',
	}));

	export const BarcoFeatures= styled('div')(({ theme }) => ({
		fontFamily: 'Reem Kufi Fun',
		fontWeight: '500',
		// fontFamily: 'Roboto',
		// fontWeight: '400',
		marginTop: '1em',
		// textAlign: 'center',
	}));

	export const DivBoton = styled('div')(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		marginBottom: '10px',
		marginTop: '15px',
		width: '100%',
	}));

	export const BotonWhatsapp = styled('div')(({ theme }) => ({
		border: '2px solid #25d366',
		display: 'flex',
		alignItems: 'center',
		borderRadius: '25px',
		padding: '15px',
	}));

	export const violeta = '#7c73e6'





