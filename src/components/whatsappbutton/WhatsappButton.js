import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

import './WhatsappButton.css'


const WhatsappButton = () => {

	const [isScrolling, setIsScrolling] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0) {
				setIsScrolling(true);
			} else {
				setIsScrolling(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`floating-button ${isScrolling ? 'scrolling' : ''}`}
			style={{ right: '30px', bottom: '20px' }}
		>
			<a
				href={`https://api.whatsapp.com/send?phone=34624158428&amp;text=${t('whatsappButton')}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaWhatsapp className="whatsapp-icon"  />
			</a>
		</div>

	);
};

export default WhatsappButton
