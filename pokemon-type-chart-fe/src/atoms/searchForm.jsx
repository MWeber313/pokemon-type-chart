import React, { useState } from "react";
import { useForm } from "react-hook-form";


const defaultValues = {
	Search: "",
};

const SearchForm = () => {
	const { handleSubmit, register } = useForm({ defaultValues });
	const [searchInput, setSearchInput] = useState(null);

	// let renderCount = 0;
	// renderCount++;
	// console.log(`Render Count: ${renderCount} Data: ${JSON.stringify(data)}`);
	console.log(searchInput === null ? `Waiting for input` : searchInput);

	return (
		<>
			<form
				style={{ display: "flex", flexDirection: "column", zIndex: "inherit" }}
				onSubmit={handleSubmit((data) => {
					setSearchInput(searchInput);
					alert(JSON.stringify(data));
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

export default SearchForm;
