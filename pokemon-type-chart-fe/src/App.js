import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Theme from "./styles/Theme";
import { Container, Logo, StyledNavLink, Text } from "./atoms";

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
		<Theme>
			<Container className="App" minHeight={"100vh"}>
				<Container dark>
					<StyledNavLink to={"/"} activeClassName="selected">
						Search
					</StyledNavLink>
					<Logo height={8} />
					<StyledNavLink to={"/link2"} activeClassName="selected">
						About
					</StyledNavLink>
				</Container>

				{/* <PokeballAnimation />
				<Results /> */}
				<Container dark absolute column bottom small >
					<Text>Pokemon Type Chart, Mack Weber</Text>
					<Text sm>All Rights Reserved, {year}</Text>
				</Container>
				{/* Routing */}
				<Switch>
					<Route path="/about" />
					<Route path="/" />
				</Switch>
			</Container>
		</Theme>
	);
};

export default App;
