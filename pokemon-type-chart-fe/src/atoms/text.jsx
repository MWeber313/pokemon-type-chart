import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Text = ({ ...props }) => {
	const { textColor, fontSize, margin, padding } = props;
	return (
		<>
			<StyledText textColor={textColor} fontSize={fontSize}>
				{props.children}
			</StyledText>
		</>
	);
};

const StyledText = styled.p.attrs((props) => ({
	textColor: props.textColor,
	fontSize: props.fontSize,
	margin: props.margin,
	padding: props.padding,
}))`
	color: ${(props) => (props.textColor ? props.textColor : colors.black)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
	margin: ${(props) => (props.margin ? props.margin : "auto")};
	padding: ${(props) => (props.padding ? props.padding : "auto")};
`;

export default Text;
