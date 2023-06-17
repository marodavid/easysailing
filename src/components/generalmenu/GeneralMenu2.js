import React from 'react'
import PropTypes from 'prop-types';
import { GB } from 'country-flag-icons/react/3x2'
import {
	Grid,
	Link,
	Slide,
	Typography,
	Tooltip
} from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'

import Toolbar from '@mui/material/Toolbar'
import {styled} from "@mui/system"
import AppBar from '@mui/material/AppBar'
import MenuBanderas from './MenuBanderas'
import MenuOpciones from './MenuOpciones'
import ESLogo from '../../images/generalmenu/easySealingLogoBigUpPart.png'
import CookieConsent from "react-cookie-consent";
import {Cookie} from "@mui/icons-material";
import Cookies from "../cookies/Cookies";
import Banner3 from "../banner/Banner3";
import imageBanner from "../../images/banner/nudosBannerResizedHeight6.png";


const DivRoot = styled('div')(({ theme }) => ({
	flexGrow: 1,
}));

const Typography1 = styled(Typography)(({ theme }) => ({
	fontSize: 36,
	fontFamily: 'Cinzel',
	// color: theme.palette.white,
	color: '#02006c',
	underline: false,
	// justifyContent: 'flex-end',
	justifyContent: 'center',
	flex: 1,
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: 20
	}
}));
const Typography2 = styled(Typography)(({ theme }) => ({
	fontSize: 25,
	fontFamily: 'Baskervville', // cursive,
	textDecoration: 'none',
	// fontStyle: 'cursive',
	// color: theme.palette.white,
	color: '#02006c',
	underline: false,
	justifyContent: 'center',
	flex: 1,
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: 15
	}
}));

const MenuLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none'
}));






const DivPlaceholder = styled('div')(({ theme }) => ({
	// height: 164,
	// [theme.breakpoints.up('sm')]: {
		height: 175,
	// },
}));

const ToolbarStyles = styled(Toolbar)(({ theme }) => ({
	justifyContent: 'space-between',
}))

const DivCenter = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
}));

const DivLeft = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	justifyContent: 'flex-start',
}));

const TypographyCenter = styled(Typography)(({ theme }) => ({
	fontSize: 36,
	fontFamily: 'Cinzel',
	// color: theme.palette.white,
	color: '#02006c',
	underline: false,
	// justifyContent: 'flex-end',
	justifyContent: 'center',
	flex: 1,
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		fontSize: 20
	}
}));

const DivRight = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	justifyContent: 'flex-end',
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
// const LinkLeft = styled(Link)(({ theme }) => ({
//   color: theme.palette.white,
//   underline: false,
// }));


const ImagenLogoLeft = styled('img')(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	maxWidth: '10%',
	justifyContent: 'flex-end',
	flex: 0,
	[theme.breakpoints.down('md')]:{
		maxWidth: '50%'
	}
}));

// const FlagIcons = styled('svg')(( { theme }) => ({
const FlagIcons = styled(GB)(( { theme }) => ({
	userSelect: 'none',
	width: '1em',
	height: '1em',
	display: 'inline-block',
	fill: 'currentColor',
	flexShrink: 0,
	transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	fontSize: '2.1875rem',
}))

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

function GeneralMenu2(props) {
	const { window } = props
	const { colorMenu } = props

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
							<Grid item xs={1} sm={1} md={2} lg={2} />

							{/*<Grid item xs={11} sm={11} md={9} lg={9} />*/}
							<Grid item xs={8} sm={8} md={4} lg={4}>
								<Typography1>
									{'Easy Sailing'}
								</Typography1>

							</Grid>

							{/*<Grid item xs={2} sm={2} md={2} lg={2}>*/}
							<Grid item xs={1} sm={1} md={1} lg={1} >
								<LogoIMG src={ESLogo} alt={''} />
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1} />
							{/*<Grid item xs={4} sm={4} md={2} lg={2}>*/}
							{/*	<DivCenter>*/}
							{/*		<Typography2>*/}
							{/*			{'Sailing'}*/}
							{/*		</Typography2>*/}
							{/*	</DivCenter>*/}
							{/*</Grid>*/}
							{/*<Grid item xs={1} sm={1} md={1} lg={1} />*/}
							<Grid item xs={2} sm={2} md={2} lg={2}>
								<DivRight>
									<LinkRight
										variant="h6"
										underline="none"
										href="https://www.facebook.com/Easy-Sailing-113317854699398"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Tooltip title={'Facebook'}>
											<FacebookIconSize />
											{/*<FacebookIcon fontSize={'large'}/>*/}
											{/*<SvgIcon fontSize={'large'} color={"secondary"} component={facebook} viewBox="0 0 300 238.3" alt={'Facebook'}/>*/}
										</Tooltip>
									</LinkRight>
									<LinkRight
										variant="h6"
										underline="none"
										href="https://www.instagram.com/easysailing.es/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<Tooltip title={'Instagram'}>
											{/*<SvgIcon fontSize={'large'} component={instagram} viewBox="0 0 150 119.15" alt={'Instagram'}/>*/}
											{/*<InstagramIcon fontSize={'large'} color={'warning'}/>*/}
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
											{/*<WhatsAppIcon fontSize={'large'} style={{ color: 'lightGreen' }}/>*/}
											<WhatsAppIconSize />
										</Tooltip>
									</LinkRight>
									<MenuBanderas />
									{/*<LinkRight>*/}
									{/*  <FlagIcons title="United Kingdom" />*/}
									{/*</LinkRight>*/}
								</DivRight>
							</Grid>



							<Grid item xs={12} sm={12} md={12} lg={12}>
								<div style={{ height: '1em' }} />
							</Grid>

							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
									<Typography2>
										{'QUIENES SOMOS'}
									</Typography2>
								</MenuLink>
							</Grid>
							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
								<Typography2>
									{'CURSOS'}
								</Typography2>
								</MenuLink>
							</Grid>
							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
								<Typography2>
									{'ALQUILERES'}
								</Typography2>
								</MenuLink>
							</Grid>
							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
									<Typography2>
									{'EXPERIENCIAS'}
								</Typography2>
								</MenuLink>
							</Grid>
							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
								<Typography2>
									{'COLABORACIONES'}
								</Typography2>
								</MenuLink>
							</Grid>
							<Grid item xs={4} sm={4} md={2} lg={2}>
								<MenuLink onClick={() => alert('proximamente')}>
									<Typography2>
									{'CONTACTO'}
								</Typography2>
								</MenuLink>
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
					</ToolbarStyles>
				</AppBar>
				<DivPlaceholder />
			</DivRoot>
		</Slide>
		{/*<Cookies />*/}
	{/*<CookieConsent*/}
	{/*	location="bottom"*/}
	{/*	buttonText={'Accept'}*/}
	{/*	// buttonText={t('cookies.buttonAccept')}*/}
	{/*	cookieName="easysailingCookie"*/}
	{/*	style={{ background: "#2B373B" }}*/}
	{/*	buttonStyle={{ color: "#4e503b", fontSize: "13px" }}*/}
	{/*	expires={150}*/}
	{/*>*/}
	{/*	{'Texto de cookies'}*/}
	{/*</CookieConsent>*/}
	</>
	);
}

GeneralMenu2.propTypes = {
	colorMenu: PropTypes.string.isRequired,
};

export default GeneralMenu2;
