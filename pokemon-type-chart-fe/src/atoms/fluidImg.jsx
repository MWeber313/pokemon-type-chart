import React from "react";
import styled from "styled-components";

const FluidImg = ({ ...props }) => {
	const { height, src, alt, transform } = props;

	return (
		<>
			<StyledImg height={height} src={src} alt={alt} transform={transform} />
		</>
	);
};

const StyledImg = styled.img`
	height: ${(props) => props.height || "100%"};
	width: auto;
	src: ${(props) => props.src || null};
	alt: ${(props) => props.alt || null};
	transform: ${(props) => props.transform || null};

`;

export default FluidImg;
