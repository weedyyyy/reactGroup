import React from "react";

const NavigationBar = () => {
	return (
		<nav>
			<div className='logo'>
				{/* Logo image */}
				<img
					src='logo.png'
					alt='Logo'
				/>
				{/* Company name */}
				<span>Company Name</span>
			</div>
			<div className='menu'>
				{/* Grouped titles */}
				<span>Our Services</span>
				<span>Who We Are</span>
			</div>
			<div className='contact-button'>
				{/* Get in touch button */}
				<button>Get in Touch</button>
			</div>
		</nav>
	);
};

export default NavigationBar;
