import React from "react";
import Header from "./header";
import Collection from "./collection";
import Stylish from "./stylish";
import Envoirment from "./envoirment";
import Meterials from "./meterials";
import Footer from "../../shared/Footer/Footer";
import Review from "./review";
import Services from "./services";

const Home = () => {
	return (
		<main>
			<Header />
			<Collection />
			<Stylish />
			<Envoirment />
			<Meterials />
			{/* <Review /> */}
			<Services />
			<Footer />
		</main>
	);
};

export default Home;
