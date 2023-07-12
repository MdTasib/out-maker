import React from "react";
import Header from "./header";
import Collection from "./collection";
import Stylish from "./stylish";
import Envoirment from "./envoirment";
import Meterials from "./meterials";
import Review from "./review";
import mic from "../../assets/images/mic.png";

const Home = () => {
	return (
		<main className='relative'>
			<Header />
			<Collection />
			<Stylish />
			<Envoirment />
			<Meterials />
			<Review />

			<div className='absolute right-0 bottom-[40px]'>
				<img src={mic} alt='' />
			</div>
		</main>
	);
};

export default Home;
