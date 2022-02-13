import React from "react";
import AboutCSS from "./About.module.css";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About({ aboutMeText, img, portfolioLink }) {
	const { ref: aboutSection, inView: isVisible } = useInView({
		threshold: 0.6,
	});

	return (
		<div className={AboutCSS.aboutSection} id="about" ref={aboutSection}>
			<div className={`${AboutCSS.img} ${isVisible ? AboutCSS.appear : ""}`}>
				<img src={img} alt="Headshot of Rory" height="100%" width="100%"></img>
			</div>
			<div className={`${AboutCSS.text} ${isVisible ? AboutCSS.appear : ""}`}>
				<h2>About Me</h2>
				<p>{aboutMeText}</p>
				<div className={AboutCSS.links}>
					<div>
						<a className={AboutCSS.projects} href="#projects">
							<button className={AboutCSS.btn}>Projects</button>
						</a>
					</div>
					<div>
						<a className={AboutCSS.contact} href="#contact">
							<button className={AboutCSS.btn}>Contact</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
