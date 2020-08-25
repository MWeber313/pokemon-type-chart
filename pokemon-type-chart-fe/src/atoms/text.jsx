import styled from "styled-components";

const Text = styled.p`
	color: ${(props) =>
		props.dark
			? props.theme.colors.dark
			: props.cta
			? props.theme.colors.cta
			: props.theme.colors.light};
	font-size: ${(props) =>
		props.sm
			? props.theme.font.sm
			: props.med
			? props.theme.font.med
			: props.lg
			? props.theme.font.lg
			: "inherit"};
	margin: ${(props) => (props.margin ? props.margin : "auto")};
	padding: ${(props) => (props.padding ? props.padding : "auto")};
`;

export default Text;
