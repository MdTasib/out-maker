import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";
import FeatureArticle from "./FeatureArticle";
import LatestArticle from "./LatestArticle";
import Ideas from "./Ideas";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='container px-10 mx-auto'>
				<PageNav />
				<FeatureArticle />
				<LatestArticle />
				<Ideas />
			</div>
		</main>
	);
};

export default AllBlogs;
