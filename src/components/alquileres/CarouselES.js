import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@mui/styles';

import quicksilver1 from '../../images/alquileres/quicksilver.jpg'
import quicksilver2 from '../../images/alquileres/quicksilver2.jpg'
import quicksilver3 from '../../images/alquileres/quicksilver3.jpg'
import quicksilver4 from '../../images/alquileres/quicksilver4.jpg'
import quicksilver5 from '../../images/alquileres/quicksilver5.jpg'
import quicksilver6 from '../../images/alquileres/quicksilver6.jpg'
import quicksilver7 from '../../images/alquileres/quicksilver7.jpg'


const useStyles = makeStyles((theme) => ({
	imagenes: {
		width:'100%',
		objectFit: 'cover',
	},
	slider: {
		height: 400,
	}
}));


const CarouselES = () => {

	const { t, i18n } = useTranslation();
	const classes = useStyles();
	const [language, setLanguage] = useState(i18n.language.substring(0,2));

	console.log('language is: '+language);
	console.log('language is: '+t('idioma'));

	useEffect(() => {
		const newLanguage = i18n.language.substring(0,2);
		if (newLanguage !== language) {
			setLanguage(newLanguage);
		}
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 1500,
		adaptiveHeight: true
	};

	return(
		<Slider {...settings} className={classes.slider}>
			<div><img src={quicksilver1} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver2} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver3} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver4} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver5} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver6} alt="" className={classes.imagenes} /></div>
			<div><img src={quicksilver7} alt="" className={classes.imagenes} /></div>
		</Slider>
	)
};

export default CarouselES;
