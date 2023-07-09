import React from "react";
import Button from "../../shared/Button/Button";

const SingleBlog = ({ name, description, image, className }) => {
	return (
		<div className='block md:flex items-center my-10 md:my-0'>
			<div className={`basis-1/2 ${className}`}>
				<img src={image} alt='' />
			</div>
			<div className='basis-1/2 text-center py-10 px-10 flex flex-col items-center'>
				<h4 className='text-2xl font-medium text-black tracking-wider'>
					COLLECTION
				</h4>
				<h2 className='text-5xl font-semibold text-black'>{name}</h2>
				<p className='py-6 text-sm font-light text-black leading-6'>
					{description}
				</p>
				<Button className='btn btn-primary btn-outline rounded-full border-2'>
					DISCOVER
				</Button>
			</div>
		</div>
	);
};

export default SingleBlog;
