import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import langIcon from "../../assets/icons/english.svg";

const NavbarTop = () => {
	return (
		<div className='bg-primary text-white'>
			<div className='container mx-auto'>
				<div className='navbar'>
					<div className='navbar-start'>
						<span className='flex items-center text-xs'>
							<BsFillTelephoneFill className='me-2' />
							(704) 555-0127
						</span>
					</div>
					<p className='navbar-center hidden lg:flex text-xs'>
						Black Friday Deals Here! 30-40%{" "}
						<AiOutlineArrowRight className='ms-2' />
					</p>
					<div className='navbar-end text-xs'>
						<p className='pe-3'>Order tracking</p>
						<p className='pe-3'>Help</p>
						<img className='pe-1' src={langIcon} alt='' />
						<select className='select select-primary bg-primary text-xs w-24 p-0'>
							<option selected>English</option>
							<option>Bangla</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarTop;
