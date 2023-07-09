import React from "react";
import PageNav from "./PageNav";
import Blogs from "./blogs";
import Network from "../../shared/Network/Network";

const Collections = () => {
	return (
		<main className='container mx-auto px-10'>
			<PageNav />
			<Blogs />
			<Network />
		</main>
	);
};

export default Collections;
