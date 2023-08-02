import React from "react";
import BlogHeader from "./BlogHeader";
import Posts from "./Posts";
import Articels from "./Articels";
import Network from "../../shared/Network/Network";
import mic from "../../assets/images/mic.png";

const Blog = () => {
	return (
		<main className='container mx-auto px-2 md:px-10 relative'>
			<BlogHeader />
			<Posts />
			<Articels />
			<Network />

			<div className='absolute right-0 bottom-[0px]'>
				<img src={mic} alt='' className='w-3/4 md:w-full' />
			</div>
		</main>
	);
};

export default Blog;
