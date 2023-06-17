import React from 'react'
// import ReactDOM from 'react-dom/client'
import * as ReactDOM from "react-dom/client";

import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import ReactGA from 'react-ga'
import reportWebVitals from './reportWebVitals'

import './i18n';
import './index.css'


// import NewCarousel from "./components/googlereviews/NewCarousel";
import Reviews from "./components/googlereviews/Reviews";

// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { useTranslation, Trans } from 'react-i18next';
// import WrappedApp from "./App";
import Portada from './components/portada/Portada'
import Contacto from "./components/formularios/Contacto";
import GeneralMenu from "./components/generalmenu/GeneralMenu";
import MenuBar from "./components/generalmenu/MenuBar";
import ReviewsCarousel from "./components/googlereviews/ReviewsCarousel";
import {CarCrash} from "@mui/icons-material";

import App from "./App"
import Banner from "./components/banner/Banner2";
import Actividades from "./components/actividades/Actividades";
import AnchorSpan from "./components/separadores/AnchorSpan";
import LicenciaNavegacion from "./components/cursos/LicenciaNavegacion";
import MenuBanderas from "./components/generalmenu/MenuBanderas";


// const firebaseConfig = {
//   apiKey: "AIzaSyBlUMLoJB2zMskCgeFb1Ky0NSqH81k4VLc",
//   authDomain: "easysealingalicante.firebaseapp.com",
//   projectId: "easysealingalicante",
//   storageBucket: "easysealingalicante.appspot.com",
//   messagingSenderId: "872348962613",
//   appId: "1:872348962613:web:8a12df83f1c5b43a34c67c",
//   measurementId: "G-E0N5TTD7QD"
// };
ReactGA.initialize('G-E0N5TTD7QD')
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const host = window.location.hostname;
// if(host !== "localhost") {
//   ReactGA.initialize('G-E0N5TTD7QD')
// }
//
// useEffect(() => {
//   if(host !== "localhost") ReactGA.pageview(window.location.pathname + window.location.search  + window.location.hash);
// });





// const lngs = {
//   en: { nativeName: 'English' },
//   de: { nativeName: 'Deutsch' },
//   es: { nativeName: 'Español' },
//   fr: { nativeName: 'Français'},
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
            <App/>

      {/*<GeneralMenu2 />*/}
      {/*/!*<Banner />*!/*/}
      {/*<CardGrid />*/}

      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}
      {/*/!*<LicenciaNavegacion />*!/*/}
      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}


      {/*<Actividades />*/}
      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}
      {/*<AnchorSpan />*/}

      {/*<WhatsappButton />*/}


      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
