import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../../shared/Button/Button";
import dimensions from "../../assets/images/dimensions-info.png";

const Dimensions = () => {
	return (
		<section className='container mx-auto p-10'>
			<h4 className='text-primary text-2xl font-semibold uppercase'>
				Dimensions
			</h4>

			<div className='py-6'>
				<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal mr-4 px-6'>
					90° Corner
				</Button>
				<Button className='btn border-1 border-primary rounded-full text-primary hover:text-white hover:bg-primary bg-white font-normal px-6'>
					45° Corner
				</Button>
			</div>

			<div className='block md:flex gap-4 pb-6'>
				<div className='border-2 border-gray-200 rounded-lg text-primary font-normal text-base md:w-1/3 p-4 mb-4 md:mb-0'>
					<p>LARGE SECTIONAL WITH 90° CORNER 97.75" x 97.75' x 30"</p>
				</div>
				<div className='border-2 border-gray-200 rounded-lg text-primary font-normal text-base md:w-1/3 p-4'>
					<p>LARGE SECTIONAL WITH 45° CORNER 97.75" x 97.75' x 30"</p>
				</div>
			</div>

			<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal px-6'>
				View Full Spec PDF <BsArrowRight className='ms-2' />
			</Button>

			<div className='pt-10'>
				<img src={dimensions} alt='' className='md:w-2/3' />
			</div>
		</section>
	);
};

export default Dimensions;
