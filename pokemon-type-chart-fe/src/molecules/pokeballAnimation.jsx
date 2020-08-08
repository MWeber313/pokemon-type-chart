import React from "react";
import styled from "styled-components";
import FluidImg from "../atoms/fluidImg";
import Container from "../atoms/container";
// images
import * as pokeball from "../img/pokeball.png";

const PokeballAnimation = () => {
	return (
		<>
			<Container margin={"8rem 0"}>
				<FluidImg src={pokeball} transform={"scale(3)"} />
			</Container>
		</>
	);
};

export default PokeballAnimation;
