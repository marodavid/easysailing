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
  maxWidth: '30%',
  justifyContent: 'flex-end',
  flex: 1,
  [theme.breakpoints.down('md')]:{
    maxWidth: '50%'
  }
}));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

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
                <TypographyCenter>
                  {'Easy Sailing'}
                </TypographyCenter>
              </DivCenter>
            </Grid>
            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} />
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <ImagenLogoLeft
                src={ESLogo}
                alt={''}
              />
            </Grid>
            <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} />

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
