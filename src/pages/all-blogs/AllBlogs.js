import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";
import FeatureArticle from "./FeatureArticle";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='container px-10 mx-auto'>
				<PageNav />
				<FeatureArticle />
			</div>
		</main>
	);
};

export default AllBlogs;
