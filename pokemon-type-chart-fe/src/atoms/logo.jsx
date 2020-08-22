import React from "react";
import styled from "styled-components";
import * as pokemonLogo from "../img/pokemon-logo.png";

const Logo = ({ ...props }) => {
	const { height, padding } = props;
	return (
		<>
			<LogoContainer className="logoWrapper" height={height} padding={padding}>
				<a href="/">
					<img
						src={pokemonLogo}
						alt="Pokemon Logo Png from freepnglogos.com"
						url="https://www.freepnglogos.com/images/pokemon-logo-png-1421.html"
						height="100%"
						width="auto"
					/>
				</a>
			</LogoContainer>
		</>
	);
};

const LogoContainer = styled.div`
	height: ${(props) => props.height || "100%"};
	padding: ${(props) => props.padding || "1rem"};
`;

export default Logo;
