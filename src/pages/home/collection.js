import React from "react";
import { BsArrowRight } from "react-icons/bs";
import lounge from "../../assets/images/lounge.png";
import loungeVactor from "../../assets/images/loungeVactor.png";
import ottomanVactor from "../../assets/images/ottoman-vactor.png";
import ottoman from "../../assets/images/ottoman.png";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";

const Collection = () => {
	return (
		<section className='container mx-auto px-10 py-20'>
			<div class='flex justify-between items-center '>
				<div>
					<h1 class='text-4xl font-semibold text-primary'>
						Our Popular Collection
					</h1>
				</div>
				<Link
					to='/all'
					className='flex items-center text-primary text-sm font-normal cursor-pointer'>
					View All
					<BsArrowRight className='ms-2' />
				</Link>
			</div>

			<div class='block md:flex justify-center items-center mt-4 gap-4'>
				<div class='flex items-center bg-[#e2fafd] p-5 rounded-xl my-2'>
					<div class='relative'>
						<img
							className='absolute h-14 w-48 bottom-36 right-12'
							src={loungeVactor}
							alt=''
						/>
						<h6 class='text-primary text-2xl font-semibold'>Chaise Lounge</h6>
						<p class='text-sm font-normal leading-6 py-3'>
							We are small family business in Europe who love to make
							exceptional printed products!
						</p>
						<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white'>
							Show Now <BsArrowRight className='ms-2' />
						</Button>
					</div>
					<div class='flex justify-center items-center'>
						<div className='bg-[#A5E4EC] w-52 h-52 rounded-full flex justify-center items-center p-4'>
							<img class='img' src={lounge} alt='' />
						</div>
					</div>
				</div>
				<div class='flex items-center bg-[#FFF5E4] p-5 rounded-xl my-2'>
					<div class=''>
						<h6 class='text-primary text-2xl font-semibold'>Harriet Ottoman</h6>
						<p class='text-sm font-normal leading-6 py-3'>
							We are small family business in Europe who love to make
							exceptional printed products!
						</p>
						<Button className='btn btn-primary rounded-full text-white hover:text-primary hover:bg-white'>
							Show Now <BsArrowRight className='ms-2' />
						</Button>
					</div>
					<div class='flex justify-center items-center relative'>
						<img
							className='absolute h-14 w-48 top-40 right-32'
							src={ottomanVactor}
							alt=''
						/>
						<div className='bg-[#FFE7BF] w-52 h-52 rounded-full flex justify-center items-center p-4'>
							<img class='img' src={ottoman} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collection;
