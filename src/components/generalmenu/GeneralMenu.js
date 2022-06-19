import React from 'react'
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
import MenuOpciones from './MenuOpciones'
import ESLogo from '../../images/generalmenu/easySealingLogoBigUpPart.png'


const DivRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const DivPlaceholder = styled('div')(({ theme }) => ({
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
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
  justifyContent: 'flex-end',
  flex: 1,
  display: 'flex',
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

// const LinkLeft = styled(Link)(({ theme }) => ({
//   color: theme.palette.white,
//   underline: false,
// }));


const ImagenLogoLeft = styled('img')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '30%',
  justifyContent: 'flex-end',
  flex: 1,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GeneralMenu(props) {
  const { window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 70,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <DivRoot>
      <AppBar color="inherit" elevation={0} position="fixed" variant="scrollable">
        <ToolbarStyles>
          <Grid container row justify="center" alignItems="center">

            <Grid item xs={2} sm={2} md={2} lg={2}>
              <DivLeft>
                <MenuOpciones />
                {/*<LinkLeft*/}
                {/*  variant="h6"*/}
                {/*  underline="none"*/}
                {/*  style={{alignSelf: 'flex-start'}}*/}
                {/*  href="/"*/}
                {/*>*/}
                {/*  <Tooltip title={'Inicio'}>*/}
                {/*    <HomeOutlinedIcon fontSize={'large'}/>*/}
                {/*  </Tooltip>*/}
                {/*</LinkLeft>*/}
              </DivLeft>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5}>
              <DivCenter>
              <TypographyCenter
                variant="h4"
                underline="none"
              >
                {'Easy Sealing'}
              </TypographyCenter>
            </DivCenter>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} />
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <ImagenLogoLeft
                src={ESLogo}
                alt={''}
              />
            </Grid>
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
                    <FacebookIcon fontSize={'large'}/>
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
                    <InstagramIcon fontSize={'large'} color={'warning'}/>
                  </Tooltip>
                </LinkRight>
                <LinkRight
                  variant="h6"
                  underline="none"
                  href="https://wa.me/0034624158428/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Tooltip title={'Whatsapp'}>
                    <WhatsAppIcon fontSize={'large'} color={'success'}/>
                  </Tooltip>
                </LinkRight>
                {/*<Tooltip title={'Translate'}>*/}
                {/*  <LinkRight*/}
                {/*    variant="h6"*/}
                {/*    underline="none"*/}
                {/*    href={`https://translate.google.com/translate?sl=es&tl=en&u=https://labodica.es${location.pathname}`}*/}
                {/*    rel="noopener noreferrer"*/}
                {/*    target="_blank"*/}
                {/*  >*/}
                {/*    <span>Banderita</span>*/}
                {/*    <IconFlagUK fontSize={'large'}/>*/}
                {/*  </LinkRight>*/}
                {/*</Tooltip>*/}
              </DivRight>
            </Grid>
          </Grid>
        </ToolbarStyles>
      </AppBar>
      <DivPlaceholder />
    </DivRoot>
  </Slide>
  );
}

GeneralMenu.propTypes = {
};

export default GeneralMenu;
