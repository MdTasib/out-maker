import React from "react";
import sofa from "../../assets/images/cutter-sufa.png";

const Weather = () => {
	return (
		<section className='container px-10 mx-auto'>
			<div className='header'>
				<img src={sofa} alt='' />
				<p className='text-primary text-xl font-normal py-6 leading-relaxed'>
					Enjoy indoor comfort outside. Stylish and durably designed from
					All-Weather Wicker, Outer’s modular patio furniture invites you to
					relax on luxuriously comfortable memory foam cushions.
				</p>
			</div>
		</section>
	);
};

export default Weather;
