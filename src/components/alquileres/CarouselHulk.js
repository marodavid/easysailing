import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@mui/styles';

// import hulk2 from '../../images/alquileres/bombard2.jpg'
import hulk1 from '../../images/alquileres/bombard.jpg'
import hulk3 from '../../images/alquileres/bombard3.jpg'
import hulk4 from '../../images/alquileres/bombard4.jpg'
import hulk5 from '../../images/alquileres/bombard5.jpg'


const useStyles = makeStyles((theme) => ({
	imagenes: {
		width:'100%',
		objectFit: 'cover',
	},
	slider: {
		height: 400,
	}
}));


const CarouselHulk = () => {

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
			<div><img src={hulk1} alt="" className={classes.imagenes} /></div>
			<div><img src={hulk3} alt="" className={classes.imagenes} /></div>
			<div><img src={hulk4} alt="" className={classes.imagenes} /></div>
			<div><img src={hulk5} alt="" className={classes.imagenes} /></div>
		</Slider>
	)
};

export default CarouselHulk;
