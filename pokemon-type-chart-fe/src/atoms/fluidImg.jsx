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

const StyledImg = styled.img.attrs((props) => ({
	height: props.height,
	src: props.src,
	alt: props.alt,
	transform: props.transform,
}))`
	height: ${(props) => (props.height ? props.height : "100%")};
	width: auto;
	transform: ${(props) => (props.transform ? props.transform : null)};
`;

export default FluidImg;
