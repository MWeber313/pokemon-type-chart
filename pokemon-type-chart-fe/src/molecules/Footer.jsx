import React from "react";
import { Container, Text } from "../atoms";

export const Footer = (props) => {
	return (
		<Container dark absolute column bottom small>
			<Text>Pokemon Type Chart, Mack Weber</Text>
			<Text sm>All Rights Reserved, {props.year}</Text>
		</Container>
	);
};
