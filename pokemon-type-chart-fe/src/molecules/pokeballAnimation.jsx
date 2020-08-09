import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import FluidImg from "../atoms/fluidImg";
import Container from "../atoms/container";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";

const PokeballAnimation = () => {
	const { register, handleSubmit, watch, errors, getValues } = useForm();
	const data = getValues();
	const onSubmit = (data) => console.log(data);
	const pokeForm = document.getElementById("pokeForm");

	// console.log(`Watching form input:` + watch);
	console.log(pokeForm);

	return (
		<>
			<AnimationWrapper>
				<Container height={40}>
					<FluidImg src={pokeTop} />
				</Container>
				{/* last-child top=150px ? show form (z-index) : don't show form */}
				{/*  */}
				<Container margin={"-12vh 0"}>
					<form id="pokeForm" onSubmit={handleSubmit(onSubmit)}>
						<input
							name="searchName"
							defaultValue="Search for Pokemon"
							ref={register}
						/>
						<input type="submit" />
					</form>
				</Container>
				<Container
					id="pokeballBottom"
					height={40}
					position={"absolute"}
					top={"0"}
					left={"0"}
				>
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
