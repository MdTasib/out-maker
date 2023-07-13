import React from "react";
import AllBlogsHeader from "./AllBlogsHeader";
import PageNav from "./PageNav";
import FeatureArticle from "./FeatureArticle";
import LatestArticle from "./LatestArticle";
import Ideas from "./Ideas";
import Network from "../../shared/Network/Network";
import Video from "./Video";

const AllBlogs = () => {
	return (
		<main>
			<AllBlogsHeader />
			<div className='container px-10 mx-auto'>
				<PageNav />
				<FeatureArticle />
				<LatestArticle />
				<Ideas />
				<Video />
				<Network />
			</div>
		</main>
	);
};

export default AllBlogs;
