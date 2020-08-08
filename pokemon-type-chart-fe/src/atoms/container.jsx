import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Container = ({ ...props }) => {
	const {
		height,
		width,
		display,
		flexDirection,
		textAlign,
		backgroundColor,
		padding,
		margin,
		position,
		top,
		left,
	} = props;
	return (
		<>
			<StyledContainer
				className="container"
				height={height}
				width={width}
				display={display}
				flexDirection={flexDirection}
				textAlign={textAlign}
				backgroundColor={backgroundColor}
				padding={padding}
				margin={margin}
				position={position}
				top={top}
				left={left}
			>
				{props.children}
			</StyledContainer>
		</>
	);
};

const StyledContainer = styled.div.attrs((props) => ({
	height: props.height,
	width: props.width,
	textAlign: props.textAlign,
	display: props.display,
	flexDirection: props.flexDirection,
	backgroundColor: props.backgroundColor,
	padding: props.padding,
	margin: props.margin,
	top: props.top,
	left: props.left,
}))`
	height: ${(props) => (props.height ? `${props.height}rem` : "10rem")};
	width: ${(props) => (props.width ? `${props.width}vw` : "100vw")};
	text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
	display: flex;
	flex-direction: ${(props) =>
		props.flexDirection ? props.flexDirection : "row"};
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : colors.white};
	padding: ${(props) => (props.padding ? props.padding : null)};
	margin: ${(props) => (props.margin ? props.margin : null)};
	position: ${(props) => (props.position ? props.position : "relative")};
	top: ${(props) => (props.top ? props.top : 0)};
	left: ${(props) => (props.left ? props.left : 0)};
`;

export default Container;
