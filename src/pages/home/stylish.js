import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/table1.png";
import img2 from "../../assets/images/table2.png";
import img3 from "../../assets/images/table3.png";
import "../../assets/css/stylish.css";

const services = [
	{
		id: 1,
		title: "Harriet Side Table",
		description:
			"HipVan Is Proud To Be Founded In Singapore. Like You, We're Young Adults Who Care About Creating An Inspiring Home We Call Our Own.",
		image: img1,
	},
	{
		id: 2,
		title: "Harriet Side Table",
		description:
			"HipVan Is Proud To Be Founded In Singapore. Like You, We're Young Adults Who Care About Creating An Inspiring Home We Call Our Own.",
		image: img2,
	},
	{
		id: 3,
		title: "Harriet Side Table",
		description:
			"HipVan Is Proud To Be Founded In Singapore. Like You, We're Young Adults Who Care About Creating An Inspiring Home We Call Our Own.",
		image: img3,
	},
	{
		id: 4,
		title: "Harriet Side Table",
		description:
			"HipVan Is Proud To Be Founded In Singapore. Like You, We're Young Adults Who Care About Creating An Inspiring Home We Call Our Own.",
		image: img1,
	},
];

const Stylish = () => {
	return (
		<section className='container mx-auto px-10 py-20 relative stylish'>
			<div className='text-center pb-4'>
				<h2 className='text-primary font-semibold text-4xl'>
					Pick Something Stylish
				</h2>
				<p className='text-[#513f3f] text-sm font-normal leading-10'>
					A whole range of matching sets to fit any style or outdoor space.
				</p>
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
				showDots={true}
				sliderClass=''
				slidesToSlide={1}
				swipeable>
				{services.map(service => (
					<div className='px-4'>
						<div class='relative max-w-full  hover:overflow-hidden overflow-hidden bg-cover bg-no-repeat'>
							<img src={service.image} class='max-w-full' alt='Louvre' />
							<div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-primary via-primary-400 to-accent opacity-0 transition duration-300 ease-in-out hover:opacity-70'></div>
						</div>
						<h4 class='text-primary font-semibold text-xl py-2'>
							Harriet Side table
						</h4>
						<p class='text-primary font-normal text-xs'>
							HipVan is proud to be founded in Singapore. Like you, we're young
							adults who care about creating an inspiring home we call our own.
						</p>
					</div>
				))}
			</Carousel>

			<div className='absolute bottom-[5%] left-[7%] bg-[#d5dfff] p-[1px] ml-20 w-[60%] stylish-devider'></div>
		</section>
	);
};

export default Stylish;
