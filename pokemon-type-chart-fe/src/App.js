import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import colors from "./styles/colors";
import Logo from "./atoms/logo";
import Container from "./atoms/container";
import StyledNavLink from "./atoms/navLink";
import PokeballAnimation from "./molecules/pokeballAnimation";


const App = () => {
	console.log(colors);
	return (
		<div className="App">
			<Container height={5} backgroundColor={colors.black}>
				<StyledNavLink to={"/"} activeClassName="selected">
					Boop
				</StyledNavLink>
				<Logo height={10} />
				<StyledNavLink to={"/link2"} activeClassName="selected">
					Boop2
				</StyledNavLink>
			</Container>
			<Container height={5}>
				<p>Description: TBD</p>
			</Container>
      <PokeballAnimation />

			{/* Routing */}
			<Switch>
				<Route path="/link2" />
				<Route path="/" />
			</Switch>
		</div>
	);
};

export default App;
