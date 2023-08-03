import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@mui/styles';

import review1 from '../../images/opiniones/review1.png'
import review1EN from '../../images/opiniones/review1EN.png'
import review1FR from '../../images/opiniones/review1FR.png'
import review2 from '../../images/opiniones/review2.png'
import review2EN from '../../images/opiniones/review2EN.png'
import review2FR from '../../images/opiniones/review2FR.png'
import review3 from '../../images/opiniones/review3.png'
import review3EN from '../../images/opiniones/review3EN.png'
import review3FR from '../../images/opiniones/review3FR.png'
import review4 from '../../images/opiniones/review4.png'
import review4EN from '../../images/opiniones/review4EN.png'
import review4FR from '../../images/opiniones/review4FR.png'
import review5 from '../../images/opiniones/review5.png'
import review5EN from '../../images/opiniones/review5EN.png'
import review5FR from '../../images/opiniones/review5FR.png'
import review6 from '../../images/opiniones/review6.png'
import review6EN from '../../images/opiniones/review6EN.png'
import review6FR from '../../images/opiniones/review6FR.png'
import review7 from '../../images/opiniones/review7.png'
import review7EN from '../../images/opiniones/review7EN.png'
import review7FR from '../../images/opiniones/review7FR.png'
import review8 from '../../images/opiniones/review8.png'
import review8EN from '../../images/opiniones/review8EN.png'
import review8FR from '../../images/opiniones/review8FR.png'



const useStyles = makeStyles((theme) => ({
	imagenes: {
		width:'99%',
		height: 'auto',
		'&:hover': {
			width:'105%',
		},
	},
	slider: {
		// border: '1px solid #555',
	}
}));


const CarouselOpiniones = () => {

	const { t, i18n } = useTranslation();
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
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
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
		<Slider {...settings} className={classes.slider}>

			<div>
				{ t('idioma') === 'es' && <img src={review1} alt="Review 1" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review1FR} alt="Review 1" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review1EN} alt="Review 1" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review2} alt="Review 2" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review2FR} alt="Review 2" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review2EN} alt="Review 2" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review3} alt="Review 3" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review3FR} alt="Review 3" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review3EN} alt="Review 3" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review4} alt="Review 4" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review4FR} alt="Review 4" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review4EN} alt="Review 4" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review5} alt="Review 5" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review5FR} alt="Review 5" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review5EN} alt="Review 5" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review6} alt="Review 6" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review6FR} alt="Review 6" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review6EN} alt="Review 6" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review7} alt="Review 7" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review7FR} alt="Review 7" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review7EN} alt="Review 7" className={classes.imagenes} /> }
			</div>
			<div>
				{ t('idioma') === 'es' && <img src={review8} alt="Review 8" className={classes.imagenes} /> }
				{ t('idioma') === 'fr' && <img src={review8FR} alt="Review 8" className={classes.imagenes} /> }
				{ t('idioma') === 'en' && <img src={review8EN} alt="Review 8" className={classes.imagenes} /> }
			</div>
			{/* Agrega más imágenes aquí */}
		</Slider>
		{/*<div style={{height: '150px'}} />*/}
		</a>
	);
};

export default CarouselOpiniones;
