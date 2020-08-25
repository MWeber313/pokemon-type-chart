import React, { useState } from "react";
import { withRouter } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form"; // useFormContext

const defaultValues = {
	Search: "",
};

const SearchForm = (props) => {
	const methods = useForm({ defaultValues });
	const { register, handleSubmit } = methods;
	const [searchInput, setSearchInput] = useState(null);

	// console.log(searchInput === null ? `Waiting for input` : searchInput);

	return (
		<>
			<FormProvider {...methods}>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						zIndex: "inherit",
					}}
					onSubmit={handleSubmit((data) => {
						setSearchInput(searchInput);
						console.log(JSON.stringify(data));
						props.history.push("./results");
						// Need to add ease to loading results
					})}
				>
					<label value="Search Pokedex">Search Pokedex</label>
					<input autoFocus type="text" name="Search" ref={register} />
					{/* add onClick reset(defaultValues)? */}
					<input type="submit" value="submit" />
				</form>
			</FormProvider>
		</>
	);
};

export default withRouter(SearchForm);


