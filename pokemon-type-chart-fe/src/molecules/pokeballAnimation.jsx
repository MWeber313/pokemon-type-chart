import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import FluidImg from "../atoms/fluidImg";
import Container from "../atoms/container";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";
import SearchForm from "../atoms/searchForm";

const PokeballAnimation = () => {
	const [isBallOpen, setIsBallOpen] = useState(false);

	useEffect(() => {
		// change ball
		console.log(`isBallOpen: ${isBallOpen}`);
		// TODO: need to stop refresh unless ball clicked
	});

	const ShowForm = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? "-20rem" : "-15.5rem",
			from: { marginTop: "-20rem" },
			display: "flex",
			justifyContent: "space-around",
			overflowY: "hidden",
		});
		return (
			<animated.div style={props}>
				<SearchForm />
			</animated.div>
		);
	};

	const OpenBall = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? "-4rem" : "4rem",
			from: { marginTop: "-4rem" },
			// zIndex: 999,
		});
		return (
			<Container id="pokeballBottom">
				<animated.div style={props}>
					<FluidImg src={pokeBottom} height={"11.5rem"} />
				</animated.div>
			</Container>
		);
	};

	return (
		<>
			<AnimationWrapper
				className={"animationWrapper"}
				isBallOpen={isBallOpen}
				onClick={() => setIsBallOpen(!isBallOpen)}
			>
				<Container>
					<FluidImg src={pokeTop} height={"14rem"} />
				</Container>
			</AnimationWrapper>
			<OpenBall isBallOpen={isBallOpen} />
			<ShowForm isBallOpen={isBallOpen} />
		</>
	);
};

const AnimationWrapper = styled.div``;
export default PokeballAnimation;
