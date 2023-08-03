import React from 'react'
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

import { useTranslation } from 'react-i18next';
import {
	Grid,
	Link,
	Slide,
	Typography,
	Tooltip
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import Toolbar from '@mui/material/Toolbar'
import {styled} from "@mui/system"
import AppBar from '@mui/material/AppBar'
import MenuBanderas from './MenuBanderas'
import MenuOpciones from './MenuOpciones'
import ESLogo from '../../images/generalmenu/easySealingLogoBigUpPart.png'

// import Banner3 from "../banner/Banner3";
// import imageBanner from "../../images/banner/nudosBannerResizedHeight6.png";


const DivRoot = styled('div')(({ theme }) => ({
	flexGrow: 1,
}));

const Typography1 = styled(Typography)(({ theme }) => ({
	fontSize: 36,
	fontFamily: 'Cinzel',
	color: '#02006c',
	underline: false,
	// justifyContent: 'flex-end',
	justifyContent: 'center',
	flex: 1,
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: 15
	}
}));

const Typography2 = styled(Typography)(({ theme }) => ({
	fontSize: 25,
	fontFamily: 'Baskervville', // cursive,
	textDecoration: 'none',
	// fontStyle: 'cursive',
	textTransform: 'uppercase',
	color: '#02006c',
	underline: false,
	justifyContent: 'center',
	flex: 1,
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: 15
	}
}));

const DivPlaceholder = styled('div')(({ theme }) => ({
	height: 175,
	[theme.breakpoints.down('md')]: {
		height: 65,
	},
}));

const ToolbarStyles = styled(Toolbar)(({ theme }) => ({
	justifyContent: 'space-between',
}))

const DivRight = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	justifyContent: 'flex-end',
	// [theme.breakpoints.down('md')]: {
	// 	display: 'none',
	// }
}));

const LinkRight = styled(Link)(({ theme }) => ({
	color: theme.palette.white,
	marginLeft: theme.spacing(1),
	underline: false,
}));

const LogoIMG = styled('img')(({ theme }) => ({
	width: '4.5em',
	height: '4.5em',
	// marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	[theme.breakpoints.down('md')]:{
		width: '3em',
		height: '3em',
	}
}));

const FacebookIconSize = styled(FacebookIcon)(({ theme}) => ({
	color: 'blue',
	fontSize: 35,
	[theme.breakpoints.down('md')]: {
		fontSize: 25,
	}
}));

const InstagramIconSize = styled(InstagramIcon)(({ theme}) => ({
	color: 'orange',
	fontSize: 35,
	[theme.breakpoints.down('md')]: {
		fontSize: 25,
	}
}));

const WhatsAppIconSize = styled(WhatsAppIcon)(({ theme}) => ({
	color: 'lightGreen',
	fontSize: 35,
	[theme.breakpoints.down('md')]: {
		fontSize: 25,
	}
}));

const DivHorizontalLine = styled('div')(({ theme}) => ({
		display: "flex",
		justifyContent: "center",
		width: '100%',
		height: '1px',
		// backgroundColor: '#CF9500',
		backgroundColor: 'black',
		marginBottom: '40px',
	[theme.breakpoints.up('md')]:{
		display: 'none'
	}
}));

const DivFondo = styled('div')(({ theme }) => ({
	backgroundColor: '#f8f8f8',
	width: '100%',
	[theme.breakpoints.down('md')]:{
		display: 'none'
	}
}));

const HashLinkMenu = styled(HashLink)(({ theme }) => ({
	textDecoration: 'none',
}));


function GeneralMenu2(props) {
	const { window } = props
	const { t } = useTranslation();

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 70,
		target: window ? window() : undefined,
	});

	return (
		<>
		<Slide appear={false} direction="down" in={!trigger}>
			<DivRoot>
				<AppBar color="inherit" elevation={0} position="fixed" variant="scrollable">
				{/*<AppBar color="transparent" elevation={0} position="fixed">*/}
					{/*variant="scrollable">*/}
					<ToolbarStyles>
						<Grid container row justify="center" alignItems="center">
							<Grid item xs={1} sm={1} md={2} lg={2} >
								<MenuOpciones />
							</Grid>
							<Grid item xs={0.25} sm={0.25} md={2} lg={2} />
							<Grid item xs={4.75} sm={4.75} md={4} lg={4}>
								<Typography1>
									{'Easy Sailing'}
								</Typography1>
							</Grid>

							<Grid item xs={1} sm={1} md={1} lg={1} >
								<LogoIMG src={ESLogo} alt={''} />
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1} />

							<Grid item xs={4} sm={4} md={2} lg={2}>
								<DivRight>
									<Link
										variant="h6"
										underline="none"
										href="https://www.facebook.com/Easy-Sailing-113317854699398"
										rel="noopener noreferrer"
										target="_blank"
										sx={{
											color: 'white',
											marginLeft: '1em',
											underline: false,
											display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' }
										}}
									>
										<Tooltip title={'Facebook'}>
											<FacebookIconSize />
										</Tooltip>
									</Link>
									<LinkRight
										variant="h6"
										underline="none"
										href="https://www.instagram.com/easysailing.es/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Tooltip title={'Instagram'}>
											<InstagramIconSize />
										</Tooltip>
									</LinkRight>
									<LinkRight
										variant="h6"
										underline="none"
										href="https://wa.me/+34624158428/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Tooltip title={'Whatsapp'}>
											<WhatsAppIconSize />
										</Tooltip>
									</LinkRight>
									<MenuBanderas />
								</DivRight>
							</Grid>

							<Grid item xs={12} sm={12} md={12} lg={12}>
								<DivHorizontalLine />
							</Grid>

							<Grid item xs={12} sm={12} md={12} lg={12}>
								<div style={{ height: '1em' }} />
							</Grid>

							<Grid item xs={12} sm={12} md={12} lg={12}>
								<DivFondo>
									<Grid container row justify="center" alignItems="center">
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#whoweare' style={{textDecoration: 'none'}}>
												<Typography2>
													{t('menuOpciones.whoweare')}
												</Typography2>
											</HashLinkMenu>
										</Grid>
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#cursos' style={{textDecoration: 'none'}}>
											<Typography2>
												{t('menuOpciones.cursos')}
											</Typography2>
											</HashLinkMenu>
										</Grid>
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#alquileres' style={{textDecoration: 'none'}}>
											<Typography2>
												{t('menuOpciones.alquileres')}
											</Typography2>
											</HashLinkMenu>
										</Grid>
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#actividades' style={{textDecoration: 'none'}}>
												<Typography2>
												{t('menuOpciones.actividades')}
											</Typography2>
											</HashLinkMenu>
										</Grid>
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#opiniones' style={{textDecoration: 'none'}}>
											<Typography2>
												{t('menuOpciones.colaboraciones')}
											</Typography2>
											</HashLinkMenu>
										</Grid>
										<Grid item xs={4} sm={4} md={2} lg={2}>
											<HashLinkMenu to='/#contacto' style={{textDecoration: 'none'}}>
												<Typography2>
												{t('menuOpciones.contacto')}
											</Typography2>
											</HashLinkMenu>
										</Grid>

										{/*<Grid item xs={12} sm={12} md={12} lg={12}>*/}
										{/*	<Banner3 imageUrl={imageBanner} />*/}
										{/*</Grid>*/}
										<Grid item xs={12} sm={12} md={12} lg={12}>
											<div width="100%">
												<hr/>
											</div>
										</Grid>
									</Grid>
								</DivFondo>
							</Grid>
					</Grid>

				</ToolbarStyles>
				</AppBar>
				<DivPlaceholder />
			</DivRoot>
		</Slide>
	</>
	);
}

GeneralMenu2.propTypes = {
	// colorMenu: PropTypes.string.isRequired,
};

export default GeneralMenu2;
