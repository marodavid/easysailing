import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@mui/styles';

import alma1 from '../../images/alquileres/astilux.jpg'
// import alma2 from '../../images/alquileres/astilux2.jpg'
import alma3 from '../../images/alquileres/astilux3.jpg'
import alma4 from '../../images/alquileres/astilux4.jpg'
import alma5 from '../../images/alquileres/astilux5.jpg'
import alma6 from '../../images/alquileres/astilux6.jpg'
import alma7 from '../../images/alquileres/astilux7.jpg'


const useStyles = makeStyles((theme) => ({
	imagenes: {
		width:'100%',
		objectFit: 'cover',
	},
	slider: {
		height: 400,
	}
}));


const CarouselAlma = () => {

	const { i18n } = useTranslation();
	const classes = useStyles();
	const [language, setLanguage] = useState(i18n.language.substring(0,2));

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
				<div><img src={alma1} alt="" className={classes.imagenes} /></div>
				{/*<div><img src={alma2} alt="" className={classes.imagenes} /></div>*/}
				<div><img src={alma3} alt="" className={classes.imagenes} /></div>
				<div><img src={alma4} alt="" className={classes.imagenes} /></div>
				<div><img src={alma5} alt="" className={classes.imagenes} /></div>
				<div><img src={alma6} alt="" className={classes.imagenes} /></div>
				<div><img src={alma7} alt="" className={classes.imagenes} /></div>
		</Slider>
	)
};

export default CarouselAlma;
