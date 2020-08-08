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

	console.log(`Watching form input:` + watch);
	return (
		<>
			<AnimationWrapper>
				<Container height={20}>
					<FluidImg src={pokeTop} />
				</Container>
				{/* last-child top=150px ? show form (z-index) : don't show form */}
				<Container margin={"-10rem 0"}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							name="searchName"
							defaultValue="Search for Pokemon"
							ref={register}
						/>
						<input type="submit" />
					</form>
				</Container>
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
