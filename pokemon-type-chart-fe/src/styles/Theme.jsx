import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "#CC0000",
		dark: "#222224",
		light: "#f0f0f0",
		yellow: "#B3A125",
		blue: "#3B4CCA",
		green: "#007700",
		gray: "#747474",
		cta: "#CC0000",
	},

	font: {
		sm: "0.8rem",
		med: "1.2rem",
		lg: "1.6rem",
	},

	small: "0.5rem",
	medium: "1rem",
	large: "1.5rem",

	// TODO: fonts, fontSizes
};

const Theme = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
