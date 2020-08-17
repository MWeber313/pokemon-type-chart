import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import colors from "./styles/colors";
import Logo from "./atoms/logo";
import Container from "./atoms/container";
import StyledNavLink from "./atoms/navLink";
import PokeballAnimation from "./molecules/pokeballAnimation";
import Text from "./atoms/text";

const App = () => {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<div className="App" >
			<Container height={10} backgroundColor={colors.black}>
				<StyledNavLink to={"/"} activeClassName="selected">
					Boop
				</StyledNavLink>
				<Logo height={10} />
				<StyledNavLink to={"/link2"} activeClassName="selected">
					Boop2
				</StyledNavLink>
			</Container>
			<Container height={10}>
				<p>Description: TBD</p>
			</Container>
			<PokeballAnimation />
			<Container
				id="footer"
				backgroundColor={colors.black}
				position={"absolute"}
				bottom={"0"}
				flexDirection={"column"}
			>
				<Text textColor={colors.greyWhite}>Pokemon Type Chart, Mack Weber</Text>
				<Text textColor={colors.greyWhite} fontSize={"0.8rem"}>
					All Rights Reserved, {year}
				</Text>
			</Container>
			{/* Routing */}
			<Switch>
				<Route path="/link2" />
				<Route path="/" />
			</Switch>
		</div>
	);
};

export default App;
