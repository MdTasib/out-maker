import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";
import FeatureArticle from "./FeatureArticle";
import LatestArticle from "./LatestArticle";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='container px-10 mx-auto'>
				<PageNav />
				<FeatureArticle />
				<LatestArticle />
			</div>
		</main>
	);
};

export default AllBlogs;
