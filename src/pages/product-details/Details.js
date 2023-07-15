import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../shared/Button/Button";

const Details = () => {
	return (
		<section className='container mx-auto p-10'>
			<h4 className='text-primary text-2xl font-semibold uppercase'>
				Product details
			</h4>
			<p className='text-base font-normal text-[#666666] py-4 leading-loose'>
				Ludlow mixes materials and textures, creating a design that feels both
				modern and organic. <br />
				A low-profile frame wrapped in a light wicker with weathered teak feet
				and textured Sunbrella fabric creates visual complexity without
				sacrificing practicality. <br />
				The Ludlow collection is completely modular, so you can create a
				loveseat, sofa or custom sectional based on which configuration fits
				your space best.
			</p>

			<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal'>
				Cleaning Instructions <BsArrowRight className='ms-2' />
			</Button>

			<h5 className='text-xl font-semibold text-primary pt-8'>
				THIS SET INCLUDES
			</h5>
			<ul className='list-disc block md:flex gap-10 text-primary pl-4 pt-1'>
				<li>Right Arm</li>
				<li>Left Arm</li>
				<li>Armless Inserts</li>
				<li>90° or 45° Corner</li>
			</ul>
		</section>
	);
};

export default Details;
