import React from "react";
import { ThemeProvider } from "styled-components";
import colors from "./colors";

const theme = {
	colors: {
		red: "#CC0000",
		black: "#222224",
		greyWhite: "#f0f0f0",
		darkYellow: "#B3A125",
		blue: "#3B4CCA",
		green: "#007700",
		gray: "#747474",
	},

	font: {
		sm: "0.8rem",
		med: "1.2rem",
		lg: "1.6rem"
	},

	small: "0.5rem",
	medium: "1rem",
	large: "1.5rem",
	dark: colors.black,
	light: colors.greyWhite,
	cta: colors.red
	// TODO: fonts, fontSizes
};

const Theme = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
