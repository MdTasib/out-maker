import React from "react";
import { PiNotePencilBold } from "react-icons/pi";
import Review from "./Review";
import Question from "./Question";

const Buyer = () => {
	return (
		<div className='container mx-auto px-10 pb-10'>
			<h2 className='text-3xl text-primary font-semibold uppercase'>
				Buyers review and question
			</h2>
			<div className='py-8 block md:flex items-center gap-4'>
				<button className='bg-primary hover:bg-white text-white hover:text-primary rounded-full btn btn-outline justify-start text-sm font-normal capitalize'>
					Buyers Review
				</button>
				<button className='bg-primary hover:bg-white text-white hover:text-primary rounded-full btn btn-outline justify-start text-sm font-normal capitalize'>
					Question
				</button>
				<div className='w-0 md:w-[2px] h-0 md:h-[40px] bg-primary'></div>
				<button className='bg-primary hover:bg-white text-white hover:text-primary rounded-full btn btn-outline justify-start text-sm font-normal capitalize'>
					<p className='flex gap-2 items-center'>
						<PiNotePencilBold />
						Write a Review
					</p>
				</button>
			</div>

			<Review />
			{/* <Question /> */}
		</div>
	);
};

export default Buyer;
