import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Theme from "./styles/Theme";
import { Container, Logo, CustomNavLink, Text } from "./atoms";

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
			<Container className="App" minHeight={"100vh"} width={"100vw"}>
				<Container dark>
					<CustomNavLink to={"/"} activeClassName="selected">
						Search
					</CustomNavLink>
					<Logo height={8} />
					<CustomNavLink to={"/link2"} activeClassName="selected">
						About
					</CustomNavLink>
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
