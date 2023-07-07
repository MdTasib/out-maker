import React from "react";
import Header from "./header";
import Collection from "./collection";
import Stylish from "./stylish";
import Envoirment from "./envoirment";

const Home = () => {
	return (
		<main>
			<Header />
			<Collection />
			<Stylish />
			<Envoirment />
		</main>
	);
};

export default Home;
