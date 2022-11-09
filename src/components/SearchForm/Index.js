// const SearchForm = (props) => {
// 	return (
// 		<div className="search">
// 			<form onSubmit={props.onSubmit}>
// 				<div className="row h-100 search-form">
// 					<div className="col-sm-12 col-md-10 p-2">
// 						<input
// 							type="text"
// 							className="form-control"
// 							id="search-city"
// 							placeholder={props.placeholder}
// 							onChange={props.onChange}
// 							value={props.value}
// 						/>
// 					</div>
// 					<div className="col-sm-12 col-md-2 p-2">
// 						<button
// 							type="submit"
// 							className="btn btn-primary"
// 						>
// 							Search
// 						</button>
// 					</div>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default SearchForm;

import { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import axios from "axios";
import { AppContext } from "../../App";
import "../../styles.css";

const API_KEY = "393609ac7b2e5f25ccdd00e626ee13dd";

export const SearchForm = () => {
	const { searchTerm, setSearchTerm, cities, setCities } =
		useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);
	// const [searchTerm, setSearchTerm] = useState("");
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (searchTerm) {
			setIsLoading(true);
			(async () => {
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}`;
				// console.log("make API request for ", url);

				const { data } = await axios.get(url);
				console.log(data);
				setCities([...cities, searchTerm]);
				setIsLoading(false);
			})();
		}
	}, [searchTerm]);

	return (
		<form
			className="aside-item"
			onSubmit={(event) => {
				event.preventDefault();

				setSearchTerm(inputValue);
			}}
		>
			<div
				className={classNames("ui icon input", {
					disabled: isLoading,
					loading: isLoading,
				})}
			>
				<input
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.currentTarget.value);
					}}
					type="text"
					placeholder="Enter City Name"
				/>
				<i className="search icon"></i>
			</div>
		</form>
	);
};

export default SearchForm;
