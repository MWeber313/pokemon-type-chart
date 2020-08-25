import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
// import * as easings from "d3-ease";
import { FluidImage, Container, SearchForm } from "../atoms";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";

const PokeballAnimation = () => {
	const [isBallOpen, setIsBallOpen] = useState(false);
	useEffect(() => {
		console.log(`Ball open: ${isBallOpen}`);
	});

	const AnimatedImage = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? 0 : 150,
			from: { marginTop: 0 },
		});
		return (
			<animated.div style={props}>
				<FluidImage src={pokeBottom} height={"150px"} />
			</animated.div>
		);
	};

	const AnimatedSearchInput = ({ isBallOpen }) => {
		const props = useSpring({
			zIndex: !isBallOpen ? 0 : 9999,
			from: { zIndex: 0 },
		});
		return (
			<animated.div style={props}>
				<SearchForm />
			</animated.div>
		);
	};

	return (
		<Container column transparent height={"100vh"}>
			<Container
				onClick={() => setIsBallOpen((isBallOpen) => !isBallOpen)}
				transparent
				absolute
				column
				customTop={"6rem"}
			>
				<FluidImage src={pokeTop} height={"180px"} />
				<AnimatedSearchInput isBallOpen={isBallOpen} />
			</Container>

			<Container absolute customTop={"225px"} transparent column>
				<AnimatedImage isBallOpen={isBallOpen} />
			</Container>
		</Container>
	);
};
export default PokeballAnimation;
