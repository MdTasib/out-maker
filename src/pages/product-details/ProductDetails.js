import React, { useState } from "react";
import DetailsSlider from "./DetailsSlider";
import Info from "./Info";
import Details from "./Details";
import Dimensions from "./Dimensions";
import Warranty from "./Warranty";
import Weather from "./Weather";
import Furniture from "./Furniture";
import Buyer from "./Buyer";

const ProductDetails = () => {
	const [category, setCategory] = useState("details");
	const changeCategory = payload => setCategory(payload);

	return (
		<main>
			<DetailsSlider />
			<Info category={category} changeCategory={changeCategory} />
			{category === "details" && <Details />}
			{category === "dimension" && <Dimensions />}
			{category === "warranty" && <Warranty />}
			<Weather />
			<Furniture />
			<Buyer />
		</main>
	);
};

export default ProductDetails;
