import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';


import { useTranslation, Trans } from 'react-i18next';

import pazEasySailing from '../../images/cursos/pazEasySailing.jpeg'
import PazCursoEasySailing from '../../images/cursos/PazCursoEasySailing.jpg'

import draftReview1 from './draftReview1.png'
import draftReview2 from './draftReview2.png'
import draftReview3 from './draftReview3.png'

const useStyles = makeStyles((theme) => ({
	imagenes: {
		width:'99%',
		height: 'auto',
		'&:hover': {
			width:'105%',
		},
	},
}));


const CarouselOpiniones = () => {

	const classes = useStyles();
	const [language, setLanguage] = useState('es');

	const { t, i18n } = useTranslation();

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
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		// rows: 2,
		// height: '300px'
		// nextArrow: <ArrowForwardIos color="action" fontSize="large"/>,
		// prevArrow: <ArrowBackIos color="action" fontSize="large"/>,
		// responsive: [
		// 	{
		// 		breakpoint: 600,
		// 		settings: {
		// 			slidesToShow: 1,
		// 		},
		// 	},
		// 	{
		// 		breakpoint: 960,
		// 		settings: {
		// 			slidesToShow: 2,
		// 		},
		// 	},
		// ],
	};

	return (
		<a href="https://search.google.com/local/reviews?placeid=ChIJk0CT-LQ7Yg0RWP6OWELO3_Q" target="_blank" rel="noopener">
		<Slider {...settings}>
			{/*<div>*/}
			{/*	<img src="foto1.jpg" alt="Foto 1" />*/}
			{/*</div>*/}
			{/*<div>*/}
			{/*	<img src="foto2.jpg" alt="Foto 2" />*/}
			{/*</div>*/}
			{/*<div>*/}
			{/*	<img src="foto3.jpg" alt="Foto 3" />*/}
			{/*</div>*/}
			{/*<div>*/}
			{/*	<img src="foto4.jpg" alt="Foto 4" />*/}
			{/*</div>*/}
			{/*<div>*/}
			{/*	<img src="foto5.jpg" alt="Foto 5" />*/}
			{/*</div>*/}

			<div>
				{/*<img src={draftReview1} alt="Foto 1" style={{width:'100%', height: 'auto'}} />*/}
				<img src={draftReview1} alt="Foto 1" className={classes.imagenes} />
			</div>
			<div>
				<img src={draftReview1} alt="Foto 2" className={classes.imagenes} />
			</div>
			<div>
				<img src={draftReview1} alt="Foto 3" className={classes.imagenes} />
			</div>
			<div>
				<img src={draftReview1} alt="Foto 4" className={classes.imagenes} />
			</div>
			<div>
				<img src={draftReview1} alt="Foto 5" className={classes.imagenes} />
			</div>
			{/* Agrega más imágenes aquí */}
		</Slider>
		<div style={{height: '150px'}} />
		</a>
	);
};

export default CarouselOpiniones;
