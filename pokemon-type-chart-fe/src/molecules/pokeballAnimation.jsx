import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

	const AnimatedSearchInput = ({ isBallOpen }) => {
		const props = useSpring({
			display: "flex",
			height: !isBallOpen ? 0 : 120,
			zIndex: !isBallOpen ? -99 : 9999,
			from: { height: 0 },
		});
		return (
			<animated.div style={props}>
				<SearchForm />
			</animated.div>
		);
	};

	return (
		<Container transparent column>
			<div onClick={() => setIsBallOpen((isBallOpen) => !isBallOpen)}>
				<FluidImage src={pokeTop} height={"180px"} />
			</div>
			<AnimatedSearchInput isBallOpen={isBallOpen} />
			<AnimatedImage>
				<FluidImage src={pokeBottom} height={"150px"} />
			</AnimatedImage>
		</Container>
	);
};
export default PokeballAnimation;

const AnimatedImage = styled.div`
	margin-top: -50px;
`;
