import React from "react";
import sofa from "../../assets/images/cutter-sufa.png";
import slider1 from "../../assets/images/furniture-slider1.png";
import slider2 from "../../assets/images/furniture-slider2.png";
import slider3 from "../../assets/images/furniture-slider3.png";
import weatherSlider from "../../assets/images/weather-slider.png";
import "../../assets/css/weather.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const sliders = [
	{
		id: 1,
		image: slider1,
	},
	{
		id: 2,
		image: slider2,
	},
	{
		id: 3,
		image: slider3,
	},
];

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

			<div className='weather-slider pb-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
					<div className='grid grid-cols-3 gap-2'>
						<div className=''>
							<img
								src={slider1}
								alt=''
								className='h-[70vh] object-cover rounded'
							/>
						</div>
						<div className=''>
							<img
								src={slider2}
								alt=''
								className='h-[70vh] object-cover rounded'
							/>
						</div>
						<div className=''>
							<img
								src={slider3}
								alt=''
								className='h-[70vh] object-cover rounded'
							/>
						</div>
					</div>
					<div className=''>
						<img
							src={weatherSlider}
							alt=''
							className='h-[70vh] object-cover rounded'
						/>
					</div>
				</div>

				<div class='flex justify-between items-center pt-10'>
					<div className='flex gap-2'>
						<div className='bg-[#D9D9D9] h-1 w-1 rounded-full'></div>
						<div className='bg-primary h-1 w-2 rounded-full'></div>
						<div className='bg-[#D9D9D9] h-1 w-1 rounded-full'></div>
					</div>
					<div className='bg-[#d5dfff] h-[2px] w-full mx-10'></div>
					<div className='flex gap-4'>
						<div className='bg-white border-[1px] rounded-full border-primary p-2 text-primary hover:text-white hover:bg-primary cursor-pointer'>
							<AiOutlineArrowLeft className='' />
						</div>
						<div className='bg-white border-[1px] rounded-full border-primary p-2 text-primary hover:text-white hover:bg-primary cursor-pointer'>
							<AiOutlineArrowRight className='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Weather;
