import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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


const LinkRight = styled(Link)(({ theme }) => ({
	color: theme.palette.white,
	marginLeft: theme.spacing(1),
	underline: false,
}));

const PaperOptions = styled(Paper)(({ theme }) => ({
	backgroundColor: 'white',
}));

function MenuOpciones() {
	const navigate = useNavigate()

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

	return (
		<div>
			{/*<Tooltip title={'Menu'}>*/}
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
			{/*</Tooltip>*/}
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<PaperOptions>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									<MenuItem onClick={() => navigate('/')}>Inicio</MenuItem>
									{/*<MenuItem onClick={() => navigate('/cursos')}>Cursos</MenuItem>*/}
									<MenuItem onClick={() => alert('Esta sección estará lista en pocos días')}>Cursos</MenuItem>
									<MenuItem onClick={() => alert('Esta sección estará lista en pocos días')}>Contacto</MenuItem>
									{/*<MenuItem onClick={() => navigate('/contacto')}>Contacto</MenuItem>*/}
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
