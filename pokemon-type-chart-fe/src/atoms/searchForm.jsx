import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import { SearchContext } from "../SearchContext";

const SearchForm = (props) => {
	const methods = useForm(); //{ defaultValues }
	const userInput = useContext(SearchContext);

	const onSubmit = (data) => {
		userInput.setSearchInput(data);
		props.history.push("./results");
	};

	useEffect(() => {
		console.log(!userInput.searchInput ? `Waiting for input` : userInput.searchInput);
	}, [userInput.searchInput]);

	return (
		<>
			<FormProvider {...methods}>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						zIndex: "inherit",
					}}
					onSubmit={methods.handleSubmit(onSubmit)}
				>
					<label value="Search Pokedex">Search Pokedex</label>
					<input autoFocus type="text" name="search" ref={methods.register} />
					{/* add onClick reset(defaultValues)? */}
					<input type="submit" value="submit" />
				</form>
			</FormProvider>
		</>
	);
};

export default withRouter(SearchForm);
