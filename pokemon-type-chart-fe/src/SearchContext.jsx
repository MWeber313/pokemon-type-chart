import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<SearchContext.Provider value={{ searchInput, setSearchInput }}>
			{children}
		</SearchContext.Provider>
	);
};
