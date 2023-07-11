import React, { useState } from "react";
import { BsArrowRight, BsFillFilterCircleFill } from "react-icons/bs";
import productImg from "../../assets/images/product-image.png";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";

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
	const [showModal, setShowModal] = useState(false);

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
				<h2 className='text-primary font-normal text-2xl md:text-5xl'>
					Meet Arper’s New 2023 Collections That Inspire Beauty, Energy &
					Vitality
				</h2>
				<p className='text-xl md:text-2xl font-light text-primary py-16'>
					Ludlow mixes materials and textures, creating a design that feels both
					modern and organic. Enjoy a low-profile frame wrapped in a light
					wicker with weathered teak feet and textured Sunbrella fabrics.
				</p>
			</div>

			<div className='flex justify-between pt-14'>
				<p className='border-1 border text-lg font-medium rounded-full py-2 px-4 w-max border-primary'>
					12 Products
				</p>
				<p
					className='flex w-max border items-center px-4 justify-between border-1 text-lg font-medium rounded-full py-2 border-primary cursor-pointer hover:bg-primary hover:text-white'
					onClick={() => setShowModal(true)}>
					Filter
					<span className='pl-4'>
						<BsFillFilterCircleFill />
					</span>
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
				{products.map(product => (
					<div className='rounded-lg shadow-lg relative'>
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

						<div class='absolute inset-0 bg-cover bg-center z-0'></div>
						{/* <p class='opacity-0 hover:opacity-[1] duration-300 absolute inset-0 z-10 flex justify-start items-start top-4 left-4 text-xs text-black font-normal p-1'>
							<AiFillStar color='' size={20} />
							<AiFillStar color='' size={20} />
							<AiFillStar color='' size={20} />
							<AiFillStar color='' size={20} />
							<FaStarHalf color='' size={20} />
						</p>
						<p class='opacity-0 hover:opacity-[1] duration-300 absolute inset-0 z-10 flex justify-end items-center top-1/4 right-7 text-xs text-black font-normal p-1'>
							<p className='border-b-2 border-black flex'>
								Shop <BsArrowRight />
							</p>
						</p> */}

						<div className='opacity-0 hover:opacity-[1] duration-300 '>
							<p class='absolute inset-0 z-10 flex justify-start items-start top-4 left-4 text-xs text-black font-normal p-1'>
								<AiFillStar color='' size={20} />
								<AiFillStar color='' size={20} />
								<AiFillStar color='' size={20} />
								<AiFillStar color='' size={20} />
								<FaStarHalf color='' size={20} />
							</p>
							<p class='absolute inset-0 z-10 flex justify-end items-center top-1/4 right-7 text-xs text-black font-normal p-1'>
								<p className='border-b-2 border-black flex'>
									Shop <BsArrowRight />
								</p>
							</p>
						</div>
					</div>
				))}
			</div>

			{showModal ? (
				<>
					<div className='justify-start items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-2/3 md:w-5/12 my-6 mr-auto max-w-3xl'>
							{/*content*/}
							<div className='border-0 rounded-r-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10'>
								<div className='flex justify-between border-b-2 border-primary mb-4'>
									<p className='text-xl font-bold text-primary'>FILTER</p>
									<p
										className='font-medium text-2xl cursor-pointer'
										onClick={() => setShowModal(false)}>
										&#215;
									</p>
								</div>
								<div className='border-b-2 border-primary mb-3'>
									<p className='text-xl font-normal text-primary pb-2'>
										Availability
									</p>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='in stock'
											className='radio radio-xs'
											checked
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>In Stock</p>
									</div>
								</div>
								<div className='border-b-2 border-primary mb-3'>
									<p className='text-xl font-normal text-primary pb-2'>
										Fabric Color
									</p>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='Pacific Fog Gray'
											className='radio radio-xs radio-warning'
											checked
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>Pacific Fog Gray</p>
									</div>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='Dark Pebble Gray'
											className='radio radio-xs'
											checked
											disabled
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>Dark Pebble Gray</p>
									</div>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='Black Hash Gray'
											className='radio radio-xs'
											checked
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>Black Hash Gray</p>
									</div>
								</div>
								<div className='border-b-2 border-primary mb-3'>
									<p className='text-xl font-normal text-primary pb-2'>
										Product Type
									</p>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='Sofa'
											className='radio radio-xs'
											checked
											disabled
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>Sofa</p>
									</div>
									<div className='flex items-center pb-3'>
										<input
											type='radio'
											name='Sectional'
											className='radio radio-xs'
											checked
											style={{ width: "25px", height: "25px" }}
										/>
										<p className='ps-2 text-xs font-normal'>Sectional</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</div>
	);
};

export default AllProducts;
