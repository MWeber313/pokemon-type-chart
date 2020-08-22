import { NavLink } from "react-router-dom";

import styled from "styled-components";

const CustomNavLink = styled(NavLink)`
	color: ${(props) => (props.color ? props.color : props.theme.light)};
	text-decoration: none;
	border-bottom: 0.2rem solid;
	padding-bottom: 0.25rem;
	transition: all 1s ease-in-out;

	&:hover {
		transition: all 1s ease-in-out;
		transform: scale(1.5);
	}
	&.selected {
		border-bottom: ${(props) => props.theme.cta} solid 0.3rem;
	}
`;

export default CustomNavLink;
