// import { Suspense } from 'react';
import CookieConsent from "react-cookie-consent";
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  es: { nativeName: 'Español' },
  fr: { nativeName: 'Français'},
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>
          <Trans i18nKey="startPage.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('startPage.part2')}
        </a>
      </header>
      <CookieConsent
        location="bottom"
        buttonText={t('cookies.buttonAccept')}
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        {t('cookies.text')}
      </CookieConsent>
    </div>
  );
}
export default function WrappedApp() {
  return (
    // <Suspense fallback="...is loading">
      <App />
    // </Suspense>
  );
}
// export default App;
