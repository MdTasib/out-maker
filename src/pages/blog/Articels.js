import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/artical1.png";
import img2 from "../../assets/images/artical2.png";
import "../../assets/css/article.css";

const articles = [
	{
		id: 1,
		title: "OUTDOOR",
		details: "Inside the Catalogue | Marigold Color Story Inside the Catalogue",
		image: img1,
	},
	{
		id: 2,
		title: "LIVING",
		details: "Earthy Interior Moments from Studio McGee",
		image: img2,
	},
	{
		id: 1,
		title: "OUTDOOR",
		details: "Inside the Catalogue | Marigold Color Story Inside the Catalogue",
		image: img1,
	},
];

const Articels = () => {
	return (
		<div className='articles'>
			<div className='text-left border-b-4 border-primary'>
				<h2 className='text-primary text-3xl font-bold pb-3'>
					Related Articles
				</h2>
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
						breakpoint: { max: 5000, min: 1024 },
						items: 2,
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
				{articles.map(articel => (
					<div className='px-2 relative'>
						<div className='border-b-4 border-[#B8B8B8] my-10'>
							<img src={articel.image} alt='' />
							<div className='h-36'>
								<h4 className='text-3xl font-semibold text-black pt-2'>
									{articel.title}
								</h4>
								<p className='text-xl font-normal text-black py-4'>
									{articel.details}
									&rarr;
								</p>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Articels;
