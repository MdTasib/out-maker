import React, { useState } from "react";
import DetailsSlider from "./DetailsSlider";
import Info from "./Info";
import Details from "./Details";
import Dimensions from "./Dimensions";
import Warranty from "./Warranty";
import Weather from "./Weather";
import Furniture from "./Furniture";
import Buyer from "./Buyer";
import mic from "../../assets/images/mic.png";

const ProductDetails = () => {
	const [category, setCategory] = useState("details");
	const changeCategory = payload => setCategory(payload);

	return (
		<main className='relative'>
			<DetailsSlider />
			<Info category={category} changeCategory={changeCategory} />
			{category === "details" && <Details />}
			{category === "dimension" && <Dimensions />}
			{category === "warranty" && <Warranty />}
			<Weather />
			<Furniture />
			<Buyer />

			<div className='absolute right-0 bottom-[100px]'>
				<img src={mic} alt='' />
			</div>
		</main>
	);
};

export default ProductDetails;
