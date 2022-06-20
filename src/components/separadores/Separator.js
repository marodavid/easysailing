import React from 'react'
import styled from "styled-components";
import {IoIosArrowDropdownCircle} from 'react-icons/io'

// import { HashLink} from "react-router-hash-link";


const SeparatorIcon = styled(IoIosArrowDropdownCircle)`
	display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 48px; 
`;

export default class Separator extends React.Component {

	render() {
		return(
			// <HashLink smooth to="/#flyers" >
				<SeparatorIcon/>
			// </HashLink>

		)
	}


}
