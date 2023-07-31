import React from "react";
import Button from "../../shared/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import headerImage from "../../assets/images/home-banner.png";

const Header = () => {
	return (
		<header
			className='hero min-h-screen'
			style={{ backgroundImage: `url(${headerImage})` }}>
			<div className='hero-content text-center'>
				<div className='max-w-full pb-32'>
					<h1 className='text-4xl md:text-5xl text-white font-semibold uppercase'>
						Better Life outdoor
					</h1>
					<p className='py-6 text-white'>
						Hot staff, fun staff, new staff soon to be your staff
					</p>
					<Button className='btn btn-primary bg-white text-primary hover:text-white border-0 rounded-full capitalize font-medium'>
						Shop Now <BsArrowRight className='ms-2' />
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
