import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import colors from "./styles/colors";
import Logo from "./atoms/logo";
import Container from "./atoms/container";
import StyledNavLink from "./atoms/navLink";
import PokeballAnimation from "./molecules/pokeballAnimation";
import Text from "./atoms/text";
import Results from "./Results";

// TODO:
// onSubmit, hide form and init loading
// on query return:
// four panels:
// top with pokemon info
// bottom three with strong/neutral/weak
const App = () => {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<div className="App" style={{ position: "relative", minHeight: "100vh" }}>
			<Container height={4} backgroundColor={colors.black}>
				<StyledNavLink to={"/"} activeClassName="selected">
					Search
				</StyledNavLink>
				<Logo height={8} />
				<StyledNavLink to={"/link2"} activeClassName="selected">
					About
				</StyledNavLink>
			</Container>
			{/* <Container height={2}>
				<p>Description: TBD</p>
			</Container> */}
			{/* <PokeballAnimation /> */}
			<Results />
			<Container
				id="footer"
				backgroundColor={colors.black}
				position={"sticky"}
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
				<Route path="/about" />
				<Route path="/" />
			</Switch>
		</div>
	);
};

export default App;
