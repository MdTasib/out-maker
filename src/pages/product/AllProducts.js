import React from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import productImg from "../../assets/images/product-image.png";

const products = [
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
	{
		id: Math.random(10000),
	},
];

const AllProducts = () => {
	return (
		<div className='container mx-auto px-10'>
			<nav className='py-8'>
				<ul className='flex text-sm text-[#000000] font-normal'>
					<li className='me-6 pb-1 border-b-2 border-b-black'>Home</li>
					<li className='me-6 pb-1 border-b-2 border-b-black'>Collections</li>
					<li className='font-semibold'>KAMA</li>
				</ul>
			</nav>

			<div className='text-center w-10/12 mx-auto'>
				<h2 className='text-primary font-normal text-5xl'>
					Meet Arper’s New 2023 Collections That Inspire Beauty, Energy &
					Vitality
				</h2>
				<p className='text-2xl font-light text-primary py-16'>
					Ludlow mixes materials and textures, creating a design that feels both
					modern and organic. Enjoy a low-profile frame wrapped in a light
					wicker with weathered teak feet and textured Sunbrella fabrics.
				</p>
			</div>

			<div className='flex justify-between pt-14'>
				<p className='border-1 border text-lg font-medium rounded-full py-2 px-4 w-max border-primary'>
					12 Products
				</p>
				<p className='flex w-max border items-center px-4 justify-between border-1 text-lg font-medium rounded-full py-2 border-primary cursor-pointer'>
					Filter
					<span className='pl-4'>
						<BsFillFilterCircleFill />
					</span>
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
				{products.map(product => (
					<div className='rounded-lg shadow-lg'>
						<div className=''>
							<img src={productImg} alt='' />
						</div>
						<div
							className='px-4 pb-4'
							style={{ boxShadow: "0px 0px 50px 1px #f5f5f5" }}>
							<h5 className='text-lg font-semibold text-black'>Scandinivian</h5>
							<p className='text-xs font-normal text-[#B8B8B8] leading-none'>
								Table
							</p>
							<div className='flex justify-between items-center pt-4'>
								<div className='flex w-max gap-4'>
									<input
										type='radio'
										name={product.id}
										className='radio radio-warning'
										checked
										style={{ width: "25px", height: "25px" }}
									/>
									<input
										type='radio'
										name={product.id + 1}
										className='radio'
										checked
										disabled
										style={{ width: "25px", height: "25px" }}
									/>
									<input
										type='radio'
										name={product.id + 2}
										className='radio'
										checked
										style={{ width: "25px", height: "25px" }}
									/>
								</div>
								<p>$600</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllProducts;
