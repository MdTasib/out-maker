import React from "react";
import headerImage from "../../assets/images/details-header.png";
import roundedImage from "../../assets/images/slider-rounded.png";
import slider1 from "../../assets/images/details-slider1.png";
import slider2 from "../../assets/images/details-slider2.png";
import slider3 from "../../assets/images/details-slider3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../assets/css/details.css";

const sliders = [
	{
		id: 1,
		image: slider1,
	},
	{
		id: 2,
		image: slider2,
	},
	{
		id: 3,
		image: slider3,
	},
];

const DetailsSlider = () => {
	return (
		<header className='bg-[#F3F7FF]'>
			<div className='text-center pt-10 md:pt-24'>
				<img src={headerImage} alt='' className='w-7/12 mx-auto' />
				<img src={roundedImage} alt='' className='w-8/12 mx-auto' />
			</div>

			<div className='w-1/2 mx-auto details-slider relative'>
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
					{sliders.map(slider => (
						<div className=''>
							<div className='bg-white mx-auto flex justify-center items-center w-[200px] h-[150px] rounded'>
								<img src={slider.image} alt='' className='p-8' />
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</header>
	);
};

export default DetailsSlider;
