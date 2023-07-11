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
			<nav className=''>
				<ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between text-xl text-primary font-bold text-center'>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary'>
						All
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary'>
						Design Tips
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary'>
						How to
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary'>
						Room Inspiration
					</li>
					<li className='cursor-pointer bg-gray-100 hover:text-white py-4 hover:bg-primary'>
						Outmaker
					</li>
				</ul>
			</nav>
		</>
	);
};

export default PageNav;
