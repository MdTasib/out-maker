import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillStar } from "react-icons/ai";
import img1 from "../../assets/images/review1.png";
import img2 from "../../assets/images/review2.png";
import img3 from "../../assets/images/review3.png";
import "../../assets/css/review.css";

const reviews = [
	{
		id: 1,
		name: "Hosen rahman",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img1,
		date: "10 July 2023",
		post: "CEO XYZ",
	},
	{
		id: 2,
		name: "Floyd Miles",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img2,
		date: "20 Jun 2023",
		post: "CEO XYZ",
	},
	{
		id: 3,
		name: "SHA AZIZ",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img3,
		date: "23 July 2023",
		post: "MANAGER",
	},

	{
		id: 4,
		name: "RAKIB",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img1,
		date: "22 July 2023",
		post: "CEO XYZ",
	},
	{
		id: 5,
		name: "SAMIHA",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img2,
		date: "11 Jun 2023",
		post: "CEO XYZ",
	},
	{
		id: 6,
		name: "TAWRAT",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content ",
		image: img3,
		date: "21 July 2023",
		post: "MANAGER",
	},
];

const Review = () => {
	return (
		<section className='container mx-auto px-10 py-20 review'>
			<div class='flex justify-between items-center absolute'>
				<div>
					<h1 class='text-2xl md:text-4xl font-semibold text-primary'>
						Our Customers Reviews
					</h1>
				</div>
			</div>

			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=''
				containerClass='container-with-dots'
				dotListClass=''
				draggable
				focusOnSelect={false}
				infinite
				itemClass=''
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: { min: 1024 },
						items: 3,
					},
					tablet: {
						breakpoint: { max: 1024, min: 780 },
						items: 2,
					},
					mobile: {
						breakpoint: { max: 780, min: 0 },
						items: 1,
					},
				}}
				rewind={false}
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				sliderClass=''
				slidesToSlide={1}
				swipeable>
				{reviews.map(review => (
					<div className='px-4'>
						<div class='flex flex-col justify-between rounded-lg border border-[#F2F2F2] p-8 shadow max-w-sm mt-24 hover:border-white'>
							<div className='flex justify-between items-center'>
								<div className='flex text-white'>
									<AiFillStar className='bg-[#F1AB3E] p-1 me-1' size={24} />
									<AiFillStar className='bg-[#F1AB3E] p-1 me-1' size={24} />
									<AiFillStar className='bg-[#F1AB3E] p-1 me-1' size={24} />
									<AiFillStar className='bg-[#F1AB3E] p-1 me-1' size={24} />
									<AiFillStar className='bg-[#F1AB3E] p-1 me-1' size={24} />
								</div>
								<p className='text-base font-normal text-[#666666]'>
									{review.date}
								</p>
							</div>

							<p class='my-4 mb-0 text-xs font-normal leading-relaxed tracking-wide text-[#666666]'>
								{review.description}
							</p>

							<div class='mt-6 flex items-center gap-6 '>
								<div class='h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800'>
									<div class='relative inline-block overflow-hidden rounded-lg border-neutral-800'>
										<img
											alt=''
											src={review.image}
											width='50'
											height='50'
											decoding='async'
											data-nimg='1'
											class='inline-block '
											loading='lazy'
										/>
									</div>
								</div>
								<div>
									<p class='leading-relaxed tracking-wide text-[#151414] text-sm font-medium'>
										{review.name}
									</p>
									<p class='text-sm font-normal leading-relaxed tracking-wide text-[#666666]'>
										{review.post}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default Review;
