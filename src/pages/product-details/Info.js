import React from "react";
import color1 from "../../assets/images/brown.png";
import color2 from "../../assets/images/black.png";
import color3 from "../../assets/images/white.png";
import color4 from "../../assets/images/charcoal.png";
import { BsInfoCircle, BsHandbagFill } from "react-icons/bs";

const Info = () => {
	return (
		<section className='bg-[#F3F7FF] py-16'>
			<div className='container mx-auto px-10'>
				<div className='flex items-center'>
					<h4 className='text-primary uppercase text-base md:text-4xl font-semibold'>
						Ludlow Large Sectional
					</h4>
					<div className='bg-primary w-[2px] h-6 mx-2 md:mx-8'></div>
					<div className='rating'>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<input
							checked
							type='radio'
							name='rating-2'
							className='mask mask-star-2 bg-orange-400'
						/>
						<p className='text-sm md:text-xl text-primary font-light ml-4'>
							<span className='font-semibold'>5.00 </span>{" "}
							<span className='underline'>(34 Reviews)</span>
						</p>
					</div>
				</div>
				<div className='text-primary py-6'>
					<h4 className='text-xl font-medium leading-loose'>MEET LUDLOW</h4>
					<p className='text-lg font-light leading-loose'>
						Ludlow mixes materials and textures, creating a design that feels
						both modern and organic. A low-profile frame wrapped in a light
						wicker with weathered teak feet and textured Sunbrella fabric
						creates visual complexity without sacrificing practicality.
					</p>
				</div>

				<div className='block md:flex items-center'>
					<div className=''>
						<p className='text-xl font-normal'>Color: Black</p>
						<div className='flex gap-4 pt-2'>
							<div className='text-center'>
								<div className='bg-[#BD2D50] h-9 w-9 rounded-full mx-auto'></div>
								<p className='text-xs text-[#666666] font-normal'>Red</p>
							</div>
							<div className='text-center'>
								<div className='bg-[#D49854] h-9 w-9 rounded-full mx-auto'></div>
								<p className='text-xs text-[#666666] font-normal'>Brown</p>
							</div>
							<div className='text-center'>
								<div className='bg-[#DFD7C3] h-9 w-9 rounded-full mx-auto'></div>
								<p className='text-xs text-[#2F2E33] font-normal'>Off White</p>
							</div>
							<div className='text-center'>
								<div className='bg-[#2F2E33] h-9 w-9 rounded-full mx-auto'></div>
								<p className='text-xs text-[#2F2E33] font-normal'>Black</p>
							</div>
						</div>
					</div>
					<div className='w-0 md:w-[1px] h-11 bg-black mx-0 md:mx-8'></div>
					<div className=''>
						<p className='text-xl font-normal'>
							Select A Frame Material: Brown Wicker
						</p>
						<div className='flex gap-4 pt-2'>
							<div className='text-center'>
								<img src={color1} alt='' className='h-9 w-9 mx-auto' />
								<p className='text-xs text-[#666666] font-normal'>
									Brown <br /> Wicker
								</p>
							</div>
							<div className='text-center'>
								<img src={color2} alt='' className='h-9 w-9 mx-auto' />
								<p className='text-xs text-[#666666] font-normal'>
									Black <br /> Wicker
								</p>
							</div>
							<div className='text-center'>
								<img src={color3} alt='' className='h-9 w-9 mx-auto' />
								<p className='text-xs text-[#666666] font-normal'>
									White <br />
									Aluminum
								</p>
							</div>
							<div className='text-center'>
								<img src={color4} alt='' className='h-9 w-9 mx-auto' />
								<p className='text-xs text-[#666666] font-normal'>
									Charcoal <br />
									Aluminum
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='py-8'>
					<button className='btn btn-outline bg-white hover:bg-primary text-primary rounded-full hover:text-white w-[400px] text-sm font-normal'>
						<p className='flex gap-2 items-center'>
							<BsInfoCircle /> In stock - Ships within Two Weeks
						</p>
					</button>{" "}
					<br />
					<button className='bg-primary hover:bg-white text-white hover:text-primary rounded-full w-[400px] btn btn-outline justify-start text-sm font-normal mt-6'>
						<p className='flex gap-2 items-center'>
							<BsHandbagFill className='' /> Add to cart- $5,349
						</p>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Info;
