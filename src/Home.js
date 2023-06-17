import React from 'react';
import ReactDOM from 'react-dom/client'

import CardGrid from "./components/cursos/CardGrid";
import Actividades from "./components/actividades/Actividades";
import WhatsappButton from "./components/whatsappbutton/WhatsappButton";
import CookieConsent from "react-cookie-consent";
import GeneralMenu2 from "./components/generalmenu/GeneralMenu2";
import Banner3 from "./components/banner/Banner3";
import imageBanner from './images/banner/nudosBannerResizedHeight6.png'


export default function Home() {

	return (
		<>
			<GeneralMenu2 />
			{/*<Banner3 imageUrl={imageBanner} />*/}
			<CardGrid />
			<Actividades />
			<WhatsappButton />
			<CookieConsent />
		</>
	)
}



// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// // import { AnimatedSwitch } from 'react-router-transition'
// import ReactGA from 'react-ga'
//
// import withRoot from './modules/withRoot'
// // import PiePagina from './components/footer/PiePagina'
// import Portada from './components/portada/Portada'
//
//
// function Index() {
//
// 	const host = window.location.hostname;
// 	if(host !== "localhost") {
// 		const MEASUREMENT_ID = "G-E0N5TTD7QD"; // YOUR_OWN_TRACKING_ID
// 		ReactGA.initialize(MEASUREMENT_ID);
// 	}
// 	useEffect(() => {
// 		if(host !== "localhost") ReactGA.pageview(window.location.pathname + window.location.search  + window.location.hash);
// 	});
// 	return (
// 		<Router>
// 			{/*<AnimatedSwitch*/}
// 			{/*	atEnter={{ opacity: 0 }}*/}
// 			{/*	atLeave={{ opacity: 0 }}*/}
// 			{/*	atActive={{ opacity: 1 }}*/}
// 			{/*	className="switch-wrapper"*/}
// 			{/*>*/}
// 				<Route exact path="/">
//
// 					<Portada/>
// 					{/*<AnchorSpan />*/}
// 					{/*<PasosASeguir />*/}
// 					{/*<AnchorSpan />*/}
// 					{/*<NuestraHistoria/>*/}
// 					{/*<PiePagina/>*/}
// 				</Route>
// 				{/*<Route path="/rsvp" >*/}
// 				{/*	<Portada/>*/}
// 				{/*</Route>*/}
// 			{/*</AnimatedSwitch>*/}
// 		</Router>
// 	);
// }
//
// export default withRoot(Index);
