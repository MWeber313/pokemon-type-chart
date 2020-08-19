import React, { useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
	Search: "",
};

const SearchForm = () => {
	const { handleSubmit, register } = useForm({ defaultValues });
	const [data, setData] = useState(null);

	// let renderCount = 0;
	// renderCount++;
	// console.log(`Render Count: ${renderCount} Data: ${JSON.stringify(data)}`);

	const dataAlert = () => alert(data);
	return (
		<>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit((data) => {
					setData(data);
					alert(JSON.stringify(data));
					// console.log(data);
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
