import React from "react";
import headerImage from "../../assets/images/productHeader.png";

const ProductHeader = () => {
	return (
		<header
			className='hero min-h-screen'
			style={{ backgroundImage: `url(${headerImage})` }}>
			<div className='hero-content text-center'>
				<div className='max-w-full'>
					<p className='pb-4 text-white'>COLLECTION</p>
					<h1 className='text-6xl text-white font-semibold uppercase'>KAMA</h1>
				</div>
			</div>
		</header>
	);
};

export default ProductHeader;
