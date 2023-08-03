import React from 'react'
import * as ReactDOM from "react-dom/client";

import { BrowserRouter} from "react-router-dom";

import ReactGA from 'react-ga'
import reportWebVitals from './reportWebVitals'

import './i18n';
import './index.css'

// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'



import App from "./App"


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
            <App/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
