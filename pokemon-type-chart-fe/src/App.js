import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Theme from "./styles/Theme";
import { Container, Text } from "./atoms";
import { Header, PokeBallAnimation } from "./molecules";

// TODO:
// onSubmit, hide form and init loading

const App = () => {
	const today = new Date();
	const year = today.getFullYear();

	
	return (
		<Theme>
			<Container className="App" minHeight={"100vh"} width={"100vw"}>
				<Header />
				{/* view */}

				<PokeBallAnimation />

				{/* end view */}
				<Container dark absolute column bottom small>
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
