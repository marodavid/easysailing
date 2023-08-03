import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import {
	ClickAwayListener,
	Grow,
	Link,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from "@mui/material";
import ListIcon from '@mui/icons-material/List'
import { styled } from '@mui/system'


const HashLinkMenu = styled(HashLink)(({ theme }) => ({
	textDecoration: 'none',
	color: '#02006c',
}));

const LinkRight = styled(Link)(({ theme }) => ({
	color: theme.palette.white,
	marginLeft: theme.spacing(1),
	underline: false,
}));

const PaperOptions = styled(Paper)(({ theme }) => ({
	backgroundColor: 'white',
}));


function MenuOpciones() {
	const { t } = useTranslation();

	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

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
	const prevOpen = useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}
		prevOpen.current = open;
	}, [open]);

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
				<ListIcon fontSize={'large'}/>
			</LinkRight>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<PaperOptions>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									<MenuItem><HashLinkMenu to='/'>{t('menuOpciones.inicio')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#whoweare'>{t('menuOpciones.whoweare')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#cursos'>{t('menuOpciones.cursos')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#alquileres'>{t('menuOpciones.alquileres')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#actividades'>{t('menuOpciones.actividades')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#opiniones'>{t('menuOpciones.colaboraciones')}</HashLinkMenu></MenuItem>
									<MenuItem><HashLinkMenu to='/#contacto'>{t('menuOpciones.contacto')}</HashLinkMenu></MenuItem>
								</MenuList>
							</ClickAwayListener>
						</PaperOptions>
					</Grow>
				)}
			</Popper>
		</div>
	);
}

MenuOpciones.propTypes = {
	// classes: PropTypes.object.isRequired,
};

export default MenuOpciones;
