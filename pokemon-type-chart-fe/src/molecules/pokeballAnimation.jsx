import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { FluidImage, Container, SearchForm } from "../atoms";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";

const PokeballAnimation = () => {
	const [isBallOpen, setIsBallOpen] = useState(false);

	useEffect(() => {
		// change ball
		// console.log(`isBallOpen: ${isBallOpen}`);
		// TODO: need to stop refresh unless ball clicked
	});

	const ShowForm = ({ isBallOpen }) => {
		const props = useSpring({
			marginTop: !isBallOpen ? "-200rem" : "1rem",
			from: { marginTop: "-100rem" },

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
			marginBottom: !isBallOpen ? "14rem" : "4rem",
			from: { marginBottom: "14rem" },
		});
		return (
			<Container id="pokeballBottom" transparent absolute bottom>
				<animated.div style={props}>
					<FluidImage src={pokeBottom} height={"8.25rem"} />
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
				transparent
				absolute
				top

			>
				<FluidImage src={pokeTop} height={"10rem"} />
			</AnimationWrapper>
			<OpenBall isBallOpen={isBallOpen} />
			<ShowForm isBallOpen={isBallOpen} />
		</>
	);
};

const AnimationWrapper = styled(Container)`
	max-height: 8rem;
	overflow: visible;
	margin: 7rem 0 0 0;
	width: auto;
`;
export default PokeballAnimation;

