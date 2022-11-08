// const Header = (props) => {
// 	return (
// 		<div className="header text-center p-3">
// 			<h1>{props.title}</h1>
// 			<h2>{props.subtitle}</h2>
// 		</div>
// 	);
// };

// export default Header;

import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

import "../../styles.css";
export const Banner = () => {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column
					mobile={16}
					tablet={12}
					computer={12}
					className="banner-item"
				>
					<Header as="h1">Weather Dashboard</Header>
				</Grid.Column>

				<Grid.Column
					mobile={16}
					tablet={4}
					computer={4}
					className="banner-item"
				>
					<Header
						as="h4"
						color="grey"
					>
						<Icon
							disabled
							name="clock"
						/>
						12:30:05
					</Header>
					<Header
						as="h5"
						color="grey"
					>
						<Icon
							disabled
							name="calendar"
						/>
						Tuesday 8th November 2022
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Banner;
