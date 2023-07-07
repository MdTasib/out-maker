import React from "react";
import Header from "./header";
import Collection from "./collection";
import Stylish from "./stylish";
import Envoirment from "./envoirment";
import Meterials from "./meterials";

const Home = () => {
	return (
		<main>
			<Header />
			<Collection />
			<Stylish />
			<Envoirment />
			<Meterials />
		</main>
	);
};

export default Home;
