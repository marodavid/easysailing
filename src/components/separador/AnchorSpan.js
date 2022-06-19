import React from 'react'
// import styled from 'styled-components'
import { styled } from '@mui/material/styles';

const AnchorSpanStyled = styled('span')(({ theme }) => ({
	display: 'block',
	position: 'relative',
	height: '10px',
	width: '100%',
	visibility: 'hidden',
	color: 'black',
}));

function AnchorSpan(){
	return <AnchorSpanStyled/>
}

export default AnchorSpan
