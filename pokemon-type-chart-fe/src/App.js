import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Theme from "./styles/Theme";
import { Container } from "./atoms";
import { Header, Footer, PokeBallAnimation } from "./molecules";
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
				<Footer year={year}/>
			</Container>
		</Theme>
	);
};

export default App;
