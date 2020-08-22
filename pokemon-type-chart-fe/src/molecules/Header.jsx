import React from "react";
import { Container, CustomNavLink, Logo } from "../atoms";

const Header = () => {
	return (
		<Container dark absolute top height={"5rem"}>
			<CustomNavLink to={"/"} activeClassName="selected">
				Search
			</CustomNavLink>
			<Logo height={"8rem"} />
			<CustomNavLink to={"/link2"} activeClassName="selected">
				About
			</CustomNavLink>
		</Container>
	);
};

export default Header;
