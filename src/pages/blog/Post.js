import React from "react";

const Post = ({ id, title, description }) => {
	return (
		<div className='py-10'>
			<h2 className='text-4xl font-medium text-black pb-6'>
				#{id}: {title}
			</h2>
			<p className='text-2xl font-normal text-black'>{description}</p>
		</div>
	);
};

export default Post;
