import styled from "styled-components";

const Container = styled.div`
	height: ${(props) => props.height || "auto"};
	min-height: ${(props) => props.minHeight};
	width: ${(props) => props.width || "auto"};
	background-color: ${(props) =>
		props.dark ? props.theme.dark : props.theme.light};
	display: ${(props) => props.display || "flex"};
	flex-direction: ${(props) => (props.column ? "column" : "auto")};
	justify-content: ${(props) => props.justifyContent || "center"};
	align-items: ${(props) => props.alignItems || "center"};
	padding: ${(props) =>
		props.large
			? props.theme.large
			: props.medium
			? props.theme.medium
			: props.small
			? props.theme.small
			: "auto"};
	margin: ${(props) => props.margin || "auto"};
	position: ${(props) => (props.absolute ? "absolute" : "relative")};
	bottom: ${(props) => (props.bottom ? 0 : "auto")};
`;

export default Container;
