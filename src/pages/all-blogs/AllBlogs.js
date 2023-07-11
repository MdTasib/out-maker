import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='container px-10 mx-auto'>
				<PageNav />
			</div>
		</main>
	);
};

export default AllBlogs;
