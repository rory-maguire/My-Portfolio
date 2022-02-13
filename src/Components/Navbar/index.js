import React from "react";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
	return (
		<div className={NavbarCSS.navbar}>
			<div>
				<a href="#home">Home</a>
			</div>
			<div>
				<a href="#about">About</a>
			</div>
			<div>
				<a href="#projects">Projects</a>
			</div>
			<div>
				<a href="#summary">Summary</a>
			</div>
			<div>
				<a href="#contact">Contact</a>
			</div>
			<div>
				<a href="#misc">Misc</a>
			</div>
		</div>
	);
}

export default Navbar;
