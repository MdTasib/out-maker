import React from "react";

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
		</div>
	);
};

export default AllProducts;
