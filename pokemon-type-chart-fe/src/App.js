import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Theme from "./styles/Theme";
import { Container, Text } from "./atoms";
import { Header, PokeBallAnimation } from "./molecules";
import Results from "./Results";

// TODO:
// onSubmit, hide form and init loading

const App = () => {
	const today = new Date();
	const year = today.getFullYear();

	return (
		<Theme>
			<Container className="App" minHeight={"100vh"} width={"100vw"} hidden>
				<Header />

				{/* View && Routing */}

				<Switch>
					<Route path="/about" />
					<Route exact path="/" component={PokeBallAnimation} />
					<Route path="/results" component={Results} />
				</Switch>

				<Container dark absolute column bottom small>
					<Text>Pokemon Type Chart, Mack Weber</Text>
					<Text sm>All Rights Reserved, {year}</Text>
				</Container>
			</Container>
		</Theme>
	);
};

export default App;
