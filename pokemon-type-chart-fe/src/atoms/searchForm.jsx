import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
import { useForm } from "react-hook-form";


const defaultValues = {
	Search: "",
};

const SearchForm = (props) => {
	const { handleSubmit, register } = useForm({ defaultValues });
	const [searchInput, setSearchInput] = useState(null);


	console.log(searchInput === null ? `Waiting for input` : searchInput);

	return (
		<>
			<form
				style={{ display: "flex", flexDirection: "column", zIndex: "inherit" }}
				onSubmit={handleSubmit((data) => {
					setSearchInput(searchInput);
					console.log(JSON.stringify(data));
					props.history.push("./results");
				})}
			>
				<label value="Search Pokedex">Search Pokedex</label>
				<input autoFocus type="text" name="Search" ref={register} />
				{/* add onClick reset(defaultValues)? */}
				<input type="submit" value="submit" />
			</form>
		</>
	);
};

export default withRouter(SearchForm);
