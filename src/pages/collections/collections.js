import React from "react";
import PageNav from "./PageNav";
import Blogs from "./blogs";
import Network from "../../shared/Network/Network";
import mic from "../../assets/images/mic.png";

const Collections = () => {
	return (
		<main className='container mx-auto px-10 relative'>
			<PageNav />
			<Blogs />
			<Network />

			<div className='absolute right-0 bottom-[0px]'>
				<img src={mic} alt='' />
			</div>
		</main>
	);
};

export default Collections;
