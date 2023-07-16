import React, { useState } from "react";
import { PiNotePencilBold } from "react-icons/pi";
import Review from "./Review";
import Question from "./Question";

const Buyer = () => {
	const [value, setValue] = useState("review");

	return (
		<div className='container mx-auto px-10 pb-10'>
			<h2 className='text-3xl text-primary font-semibold uppercase'>
				Buyers review and question
			</h2>
			<div className='py-8 block md:flex items-center gap-4'>
				<button
					className={`${
						value === "review"
							? "bg-primary text-white"
							: "bg-white text-primary"
					} hover:bg-primary rounded-full btn btn-outline justify-start text-sm font-normal capitalize`}
					onClick={() => setValue("review")}>
					Buyers Review
				</button>
				<button
					className={`${
						value === "question"
							? "bg-primary text-white"
							: "bg-white text-primary"
					} hover:bg-primary rounded-full btn btn-outline justify-start text-sm font-normal capitalize`}
					onClick={() => setValue("question")}>
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

			{value === "review" && <Review />}
			{value === "question" && <Question />}
		</div>
	);
};

export default Buyer;
