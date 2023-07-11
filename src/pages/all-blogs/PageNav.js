import React from "react";

const PageNav = () => {
	return (
		<>
			<nav className='py-4'>
				<ul className='flex text-sm text-[#000000] font-normal'>
					<li className='me-6 pb-1 border-b-2 border-b-black'>Home</li>
					<li className='font-semibold'>Blogs</li>
				</ul>
			</nav>
			<nav className='bg-gray-100 py-4'>
				<ul className='flex justify-around text-xl text-primary font-bold'>
					<li className='cursor-pointer'>All</li>
					<li className='cursor-pointer'>Design Tips</li>
					<li className='cursor-pointer'>How to</li>
					<li className='cursor-pointer'>Room Inspiration</li>
					<li className='cursor-pointer'>Outmaker</li>
				</ul>
			</nav>
		</>
	);
};

export default PageNav;
