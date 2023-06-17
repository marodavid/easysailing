import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

import {
	ClickAwayListener,
	Grow,
	Link,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	// Tooltip, Typography
} from "@mui/material";
import ListIcon from '@mui/icons-material/List'
import { styled } from '@mui/system'
import { GB, ES, FR } from "country-flag-icons/react/3x2";
import "country-flag-icons/3x2/flags.css";


const LinkRight = styled(Link)(({ theme }) => ({
	color: theme.palette.white,
	marginLeft: theme.spacing(1),
	underline: false,
}));

const PaperOptions = styled(Paper)(({ theme }) => ({
	backgroundColor: 'white',
}));

const FlagIconsGB = styled(GB)(( { theme }) => ({
	userSelect: 'none',
	width: '1em',
	height: '1em',
	display: 'inline-block',
	fill: 'currentColor',
	flexShrink: 0,
	transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	fontSize: '2.1875rem',
}))

// const FlagIconsDE = styled(DE)(( { theme }) => ({
// 	userSelect: 'none',
// 	width: '1em',
// 	height: '1em',
// 	display: 'inline-block',
// 	fill: 'currentColor',
// 	flexShrink: 0,
// 	transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
// 	fontSize: '2.1875rem',
// 	color: 'black',
// }))

const FlagIconsFR = styled(FR)(( { theme }) => ({
	userSelect: 'none',
	width: '1em',
	height: '1em',
	display: 'inline-block',
	fill: 'currentColor',
	flexShrink: 0,
	transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	fontSize: '2.1875rem',
}))

const FlagIconsES = styled(ES)(( { theme }) => ({
	userSelect: 'none',
	width: '1em',
	height: '1em',
	display: 'inline-block',
	fill: 'currentColor',
	flexShrink: 0,
	transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	fontSize: '2.1875rem',
}))
//
// const lngs = {
// 	en: { nativeName: 'English' },
// 	de: { nativeName: 'Deutsch' },
// 	es: { nativeName: 'Español' },
// 	fr: { nativeName: 'Français'},
// };


function MenuBanderas() {
	const navigate = useNavigate()
	const { t, i18n } = useTranslation();

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}
		prevOpen.current = open;
	}, [open]);

	const displayFlag = (language) => {
		switch (i18n.language.substring(0,2)) {
			case 'es':
				return (<FlagIconsES title="Español" />);
				break;
			case 'en':
				return (<FlagIconsGB title="English" />);
				break;
			case 'fr':
				return (<FlagIconsFR title="Français" />);
				break;
			default :
				return (<FlagIconsGB title="English" />);
				break;
		}
	}

	return (
		<div>
			<LinkRight
				variant="h6"
				underline="none"
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				>
				{ displayFlag(i18n.language) }
				{ console.log('DEBUG') }
				{ console.log(i18n.language)}
				{/*<FlagIconsES title="Español" />*/}
			</LinkRight>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<PaperOptions>
							<ClickAwayListener onClickAway={handleClose} >
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} onClick={handleClose}>
									<MenuItem onClick={() => i18n.changeLanguage('es')}>
										<FlagIconsES title="Español" />
									</MenuItem>
									<MenuItem onClick={() => i18n.changeLanguage('en-GB')}>
										<FlagIconsGB title="English" />
									</MenuItem>
									<MenuItem onClick={() => i18n.changeLanguage('fr')}>
										<FlagIconsFR title="Français" />
									</MenuItem>
									{/*<MenuItem onClick={() => i18n.changeLanguage('de')}>*/}
									{/*	<FlagIconsDE title="Deutsch" />*/}
									{/*</MenuItem>*/}
								</MenuList>
							</ClickAwayListener>
						</PaperOptions>
					</Grow>
				)}
			</Popper>
		</div>

	);
}

MenuBanderas.propTypes = {
	// classes: PropTypes.object.isRequired,
};

export default MenuBanderas;
