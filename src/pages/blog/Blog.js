import React from "react";
import BlogHeader from "./BlogHeader";
import Posts from "./Posts";
import Articels from "./Articels";
import Network from "../../shared/Network/Network";

const Blog = () => {
	return (
		<main className='container mx-auto px-10'>
			<BlogHeader />
			<Posts />
			<Articels />
			<Network />
		</main>
	);
};

export default Blog;
