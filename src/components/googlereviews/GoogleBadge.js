import React, {useEffect, useState} from 'react';
// import { useTranslation, Trans } from 'react-i18next';

const GoogleBadge = () => {

	// const [language, setLanguage] = useState('fr');
	// const { t, i18n } = useTranslation();

	// useEffect(() => {
	// 	// const cookiesAccepted = localStorage.getItem('cookiesAccepted');
	// 	const newLanguage = i18n.language.substring(0,2);
	// 	if (newLanguage !== language) {
	// 		setLanguage(newLanguage);
	// 	}
	// }, []);
	return (
		<>
			<div className="review-widget_net" data-uuid="56b8cf15-7ec1-4c3e-bc45-0ffe398f87e5" data-template="10"
					 data-filter="" data-lang="es" data-theme="light" />
			{/*data-filter="" data-lang={language} data-theme="light" />*/}
			{/*<center>*/}
				{/*	<a href="https://www.review-widget.net/" target="_blank" rel="noopener">*/}
				{/*		<img src="https://grwapi.net/assets/spinner/spin.svg" title="Google Review Widget" alt="Google Review Widget"/>*/}
				{/*	</a>*/}
				{/*</center>*/}
			{/*<script async type="text/javascript" src="https://grwapi.net/widget.min.js"></script>*/}
		</>
	);
}

export default GoogleBadge


