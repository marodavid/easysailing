import React from 'react'
import { useTranslation } from "react-i18next";

import CookieConsent from "react-cookie-consent";


const CookiesConsent = () => {
	const { t } = useTranslation()

	return (
		<CookieConsent
			enableDeclineButton
			cookieName={'easySailing'}
			buttonText={t('cookies.buttonAccept')}
			declineButtonText={t('cookies.buttonDecline')}
			style={{ background: "#02006c", fontSize: '20px' }}
			buttonStyle={{ color: "#4e503b", fontSize: "20px" }}
			declineButtonStyle={{ fontSize: "20px" }}
			expires={150}
		>
			{ t('cookies.text')}
		</CookieConsent>
	);
}

export default CookiesConsent
