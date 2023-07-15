import React from "react";
import DetailsSlider from "./DetailsSlider";
import Info from "./Info";
import Details from "./Details";
import Dimensions from "./Dimensions";
import Warranty from "./Warranty";

const ProductDetails = () => {
	return (
		<main>
			<DetailsSlider />
			<Info />
			{/* <Details /> */}
			{/* <Dimensions /> */}
			<Warranty />
		</main>
	);
};

export default ProductDetails;
