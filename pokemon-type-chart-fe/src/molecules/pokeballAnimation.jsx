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
		// console.log(`isBallOpen: ${isBallOpen}`);
		// TODO: need to stop refresh unless ball clicked
	});

	const ShowForm = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? "-200rem" : "-16rem",
			from: { marginTop: "-200rem" },
			display: "flex",
			justifyContent: "space-around",
			overflow: "hidden",
			zIndex: isBallOpen ? 999 : 0,
		});
		return (
			<animated.div style={props}>
				<SearchForm />
			</animated.div>
		);
	};

	const OpenBall = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? "-0.75rem" : "10rem",
			from: { marginTop: "-0.75rem" },
			zIndex: isBallOpen ? 99 : 0,
		});
		return (
			<Container id="pokeballBottom">
				<animated.div style={props}>
					<FluidImg src={pokeBottom} height={"8.25rem"} />
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
					<FluidImg src={pokeTop} height={"10rem"} />
				</Container>
			</AnimationWrapper>
			<OpenBall isBallOpen={isBallOpen} />
			<ShowForm isBallOpen={isBallOpen} />
		</>
	);
};

const AnimationWrapper = styled.div`
	max-height: 8rem;
	overflow: visible;
	margin-top: 1rem;
`;
export default PokeballAnimation;
