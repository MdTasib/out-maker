import React from "react";
import feateImageLg from "../../assets/images/article-lg.png";
import articleUser1 from "../../assets/images/article-user-1.png";

const FeatureArticle = () => {
	return (
		<section className='block md:flex justify-between items-center pb-10'>
			<div className='basis-1/2 bg-gray-100'>
				<figure>
					<img src={feateImageLg} alt='Shoes' />
				</figure>
				<div className='p-4'>
					<h2 className='text-xl md:text-3xl font-semibold text-black'>
						How to Furnish Your Small Outdoor Space{" "}
					</h2>
					<p className='text-sm md:text-base font-light text-black py-4'>
						En an unknown printer took a galley of type and scrambled it to make
						a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting
					</p>
					<div className='flex items-center gap-10 text-base text-[#213343] font-normal'>
						<div className='flex items-center gap-2'>
							<img src={articleUser1} alt='' className='w-10' />
							<span>Ben Holland</span>
						</div>
						<span>8/25/2022</span>
					</div>
				</div>
			</div>
			<div className='basis-1/2'></div>
		</section>
	);
};

export default FeatureArticle;
