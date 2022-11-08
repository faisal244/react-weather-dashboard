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

import { useState } from "react";
import "../../styles.css";
import classNames from "classnames";

export const SearchForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [inputValue, setInputValue] = useState("");
	console.log(inputValue, searchTerm);
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
