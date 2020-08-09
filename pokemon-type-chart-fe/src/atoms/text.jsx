import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Text = ({ ...props }) => {
	const { textColor, fontSize } = props;
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
}))`
	color: ${(props) => (props.textColor ? props.textColor : colors.black)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
`;

export default Text;
