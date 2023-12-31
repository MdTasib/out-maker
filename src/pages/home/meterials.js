import React from "react";
import img1 from "../../assets/images/fabrics.png";
import img2 from "../../assets/images/leather.png";
import img3 from "../../assets/images/metal.png";
import img4 from "../../assets/images/wood.png";

const meterials = [
	{
		id: 1,
		title: "Wood",
		description:
			"HipVan is proud to be founded in  Like you, we're young adults who.",
		image: img1,
	},
	{
		id: 2,
		title: "Fabrics",
		description:
			"HipVan is proud to be founded in  Like you, we're young adults who.",
		image: img2,
	},
	{
		id: 3,
		title: "Metal",
		description:
			"HipVan is proud to be founded in  Like you, we're young adults who.",
		image: img3,
	},
	{
		id: 4,
		title: "Leather",
		description:
			"HipVan is proud to be founded in  Like you, we're young adults who.",
		image: img4,
	},
];

const Meterials = () => {
	return (
		<section
			className='py-10 md:py-20'
			style={{
				background: `linear-gradient( 180deg, rgba(64, 123, 255, 0.06) 0%, rgba(244, 247, 255, 0) 100% )`,
			}}>
			<div className='container mx-auto  px-2 md:px-10 '>
				<div className='text-center w-4/5 md:w-2/3 mx-auto'>
					<h2 className='text-primary font-semibold text-2xl md:text-4xl'>
						Materials We Use
					</h2>
					<p className='text-[#666666] text-sm font-normal leading-7 pt-4'>
						Our mission is to provide high quality, durable, comfortable and
						designed outdoor furniture to add happiness and joy to your outdoor
						life.
					</p>
				</div>

				<div className='mt-10'>
					<iframe
						style={{ height: "600px" }}
						className='w-full rounded-2xl iframe'
						src='https://www.youtube.com/embed/cHBqwj0Ed_I'
						frameBorder={0}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10'>
					{meterials.map(meterial => (
						<div class='container mx-auto p-2 border bg-white max-w-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:scale-105'>
							<img class='rounded-lg' src={meterial.image} alt='' />
							<div class='flex justify-between items-center'>
								<div>
									<h2 class='text-xl py-1 text-primary font-semibold'>
										{meterial.title}
									</h2>
									<p class='text-xs font-normal'>{meterial.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Meterials;
