import React from "react";
import img1 from "../../assets/images/table1.png";
import img2 from "../../assets/images/table2.png";
import img3 from "../../assets/images/table3.png";

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
	// {
	// 	id: 4,
	// 	title: "Harriet Side Table",
	// 	description:
	// 		"HipVan Is Proud To Be Founded In Singapore. Like You, We're Young Adults Who Care About Creating An Inspiring Home We Call Our Own.",
	// 	image: img1,
	// },
];

const Stylish = () => {
	return (
		<section className='container mx-auto px-10 py-20'>
			<div className='text-center'>
				<h2 className='text-primary font-semibold text-4xl'>
					Pick Something Stylish
				</h2>
				<p className='text-[#666666] text-sm font-normal leading-10'>
					A whole range of matching sets to fit any style or outdoor space.
				</p>
			</div>

			<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
				{services.map(service => (
					<div className=''>
						<div class='relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
							<img src={service.image} class='max-w-xs' alt='Louvre' />
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
			</div>
		</section>
	);
};

export default Stylish;
