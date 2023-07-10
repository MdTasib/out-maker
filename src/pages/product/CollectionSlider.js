import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/product-collection.png";
import img2 from "../../assets/images/product-collection2.png";
import Network from "../../shared/Network/Network";

const collections = [
	{
		id: 1,
		name: "LAPE",
		image: img1,
	},
	{
		id: 2,
		name: "RXTRADOS",
		image: img2,
	},
	{
		id: 3,
		name: "Lape",
		image: img1,
	},
];

const CollectionSlider = () => {
	return (
		<section className='container px-10 mx-auto pb-10'>
			<div className='text-left border-b-4 border-primary'>
				<h2 className='text-primary text-3xl font-bold pb-3'>
					Other Collections
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
				{collections.map(collection => (
					<div className='p-10'>
						<div
							className='flex justify-center items-center flex-col h-96'
							style={{ backgroundImage: `url(${collection.image})` }}>
							<p className='text-xl font-light text-white'>COLLECTION</p>
							<h4 className='text-6xl text-white font-medium'>
								{collection.name}
							</h4>
						</div>
					</div>
				))}
			</Carousel>

			<Network />
		</section>
	);
};

export default CollectionSlider;