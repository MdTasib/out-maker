import React from "react";
import DetailsSlider from "./DetailsSlider";
import Info from "./Info";
import Details from "./Details";
import Dimensions from "./Dimensions";

const ProductDetails = () => {
	return (
		<main>
			<DetailsSlider />
			<Info />
			{/* <Details /> */}
			<Dimensions />
		</main>
	);
};

export default ProductDetails;
