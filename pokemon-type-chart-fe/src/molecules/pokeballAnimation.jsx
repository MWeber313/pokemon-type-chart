import React from "react";
import styled from "styled-components";
import FluidImg from "../atoms/fluidImg";
import Container from "../atoms/container";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";

const PokeballAnimation = () => {
	return (
		<>
			<AnimationWrapper>
				<Container height={20}>
					<FluidImg src={pokeTop} />
				</Container>
                {/* last-child top=150px ? show form : don't show form */}
				<Container height={20} position={"absolute"}>
					<FluidImg src={pokeBottom} />
				</Container>
			</AnimationWrapper>
		</>
	);
};

const AnimationWrapper = styled.div`
	position: relative;
	div:last-child {
		transition: all 1s;
		&:hover {
			top: 150px;
			transition: all 1s;
		}
	}
`;

export default PokeballAnimation;
