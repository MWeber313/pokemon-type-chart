import React from "react";
import { ThemeProvider } from "styled-components";

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
	// TODO: fonts, fontSizes
};

const Theme = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
