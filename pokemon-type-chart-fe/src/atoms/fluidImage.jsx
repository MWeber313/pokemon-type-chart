import React from "react";
import styled from "styled-components";

const FluidImg = ({ ...props }) => {
	const { height, src, alt } = props;

	return (
		<>
			<StyledImg height={height} src={src} alt={alt} />
		</>
	);
};

const StyledImg = styled.img.attrs((props) => ({
	height: props.height,
	src: props.src,
	alt: props.alt,
}))`
	height: ${(props) => (props.height ? props.height : "100%")};
	width: auto;
`;
