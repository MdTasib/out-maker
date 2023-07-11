import React from "react";
import { FaRegCopy } from "react-icons/fa";
import img1 from "../../assets/images/network1.png";
import img2 from "../../assets/images/network2.png";
import img3 from "../../assets/images/network3.png";
import img4 from "../../assets/images/network4.png";
import img5 from "../../assets/images/network5.png";

const Network = () => {
	return (
		<section className='container mx-auto py-10'>
			<div className='text-left border-b-4 border-primary'>
				<h2 className='text-primary text-3xl font-bold pb-3'>
					Outmaker Instagram Network
				</h2>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-4'>
				<div
					class='w-100 md:w-48 h-52 relative mb-4 lg:mb-0'
					style={{
						"background-image": `url(${img1})`,
						backgroundSize: "cover",
					}}>
					<div class='absolute inset-0 bg-cover bg-center z-0'></div>
					<div class='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-6xl text-white font-semibold bg-black p-4'>
						<FaRegCopy size={50} />
					</div>
				</div>
				<div
					class='w-100 md:w-48 h-52 relative mb-4 lg:mb-0'
					style={{
						"background-image": `url(${img2})`,
						backgroundSize: "cover",
					}}>
					<div class='absolute inset-0 bg-cover bg-center z-0'></div>
					<div class='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-6xl text-white font-semibold bg-black p-4'>
						<FaRegCopy size={50} />
					</div>
				</div>
				<div
					class='w-100 md:w-48 h-52 relative mb-4 lg:mb-0'
					style={{
						"background-image": `url(${img3})`,
						backgroundSize: "cover",
					}}>
					<div class='absolute inset-0 bg-cover bg-center z-0'></div>
					<div class='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-6xl text-white font-semibold bg-black p-4'>
						<FaRegCopy size={50} />
					</div>
				</div>
				<div
					class='w-100 md:w-48 h-52 relative mb-4 lg:mb-0'
					style={{
						"background-image": `url(${img4})`,
						backgroundSize: "cover",
					}}>
					<div class='absolute inset-0 bg-cover bg-center z-0'></div>
					<div class='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-6xl text-white font-semibold bg-black p-4'>
						<FaRegCopy size={50} />
					</div>
				</div>
				<div
					class='w-100 md:w-48 h-52 relative mb-4 lg:mb-0'
					style={{
						"background-image": `url(${img5})`,
						backgroundSize: "cover",
					}}>
					<div class='absolute inset-0 bg-cover bg-center z-0'></div>
					<div class='opacity-0 hover:opacity-[0.5] duration-300 absolute inset-0 z-10 flex justify-end items-start text-6xl text-white font-semibold bg-black p-4'>
						<FaRegCopy size={50} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Network;
