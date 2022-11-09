import React, { useState } from "react";
import { Divider, Grid } from "semantic-ui-react";
import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherInfo } from "./components/WeatherInfo";

import "./styles.css";
import "semantic-ui-css/semantic.min.css";

export const AppContext = React.createContext();

export const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [cities, setCities] = useState(
		JSON.parse(localStorage.getItem("cities")) || []
	);
	const [weatherData, setWeatherData] = useState();
	return (
		<AppContext.Provider
			value={{
				cities,
				setCities,
				searchTerm,
				setSearchTerm,
			}}
		>
			<Grid
			// columns={2}
			// className="border"
			>
				{/*  row */}
				<Grid.Row className="border">
					{/* column */}
					<Grid.Column
						mobile={16}
						tablet={4}
						computer={4}
						className="border"
					>
						<SearchForm />
						<SearchHistory />
					</Grid.Column>

					<Grid.Column
						mobile={16}
						tablet={12}
						computer={12}
						// className="border"
					>
						<Banner />
						<Divider />
						<WeatherInfo />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</AppContext.Provider>
	);
};

// class App extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			cityName: "Birmingham",
// 			data: null,
// 			error: null,
// 			isLoading: true,
// 		};
// 	}

// 	async componentDidMount() {
// 		await this.getWeatherData();
// 	}

// 	async getWeatherData() {
// 		const params = {
// 			q: this.state.cityName,
// 			units: "metric",
// 			appid: "5ecb90e18bea9914051a8dd07617a181",
// 		};

// 		const { data, error } = await fetchData(
// 			"http://api.openweathermap.org/data/2.5/weather",
// 			params
// 		);

// 		if (data) {
// 			this.setState({
// 				data,
// 				error: null,
// 				isLoading: false,
// 			});
// 		}

// 		if (error) {
// 			this.setState({
// 				error,
// 				data: null,
// 				isLoading: false,
// 			});
// 		}
// 	}

// 	onSubmit = async (event) => {
// 		event.preventDefault();

// 		await this.getWeatherData();
// 	};

// 	onChange = (event) => {
// 		this.setState({
// 			cityName: event.target.value,
// 		});
// 	};

// 	renderCurrentCard() {
// 		const { data, error, isLoading } = this.state;

// 		if (data && !isLoading && !error) {
// 			return <CurrentWeather data={data} />;
// 		} else if (!data && !isLoading && error) {
// 			return <ErrorCard message={error} />;
// 		} else {
// 			return <LoadingSpinner />;
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className="">
// 				<Header
// 					title="Weather Dashboard"
// 					subtitle="Weather or not here it comes..."
// 				/>
// 				<div className="row main g-0">
// 					<div className=" col-sm-12 col-md-3">
// 						<RecentSearches />
// 					</div>
// 					<div className="col-sm-12 col-md-9">
// 						<SearchForm
// 							placeholder="Enter city name"
// 							onSubmit={this.onSubmit}
// 							onChange={this.onChange}
// 							value={this.state.cityName}
// 						/>
// 						{this.renderCurrentCard()}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
