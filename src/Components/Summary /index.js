import React from "react";
import SummaryComponent from "../SummaryComponent";
import SummaryCSS from "./Summary.module.css";
import csslogo from "./logos/css3 logo.png";
import expresslogo from "./logos/express logo.png";
import ghlogo from "./logos/git hub logo.png";
import htmllogo from "./logos/html 5 logo.png";
import jslogo from "./logos/js logo.png";
import nextlogo from "./logos/next logo.png";
import nodelogo from "./logos/node logo.png";
import postgreslogo from "./logos/postgres logo.png";
import reactlogo from "./logos/react logo .png";
import stacklogo from "./logos/stack logo .svg";
import tslogo from "./logos/ts logo.svg";
import netlifylogo from "./logos/netlifylogo.png";
import herokulogo from "./logos/heroku logo .png";
import jestlogo from "./logos/jest logo .png";
import { useInView } from "react-intersection-observer";
function Summary() {
	const { ref: title, inView: isTitleVisible } = useInView({
		threshold: 0.9,
	});
	return (
		<div>
			<div className={SummaryCSS.titlesec} ref={title}>
				<h1
					className={`${SummaryCSS.title} ${
						isTitleVisible ? SummaryCSS.appear : ""
					}`}
				>
					Professional Summary
				</h1>
			</div>

			<div className={SummaryCSS.sectionContainer} id="summary">
				<SummaryComponent
					header={"Professional Summary"}
					subHeader={
						"I am an inquisitive software developer who recently participated in the School of Code software development bootcamp. The bootcamp has given me a comprehensive grounding in full-stack software engineering - In addition to technical skills, the bootcamp has helped foster a wide range of invaluable soft skills, which are vital in the real world and I believe will allow me to be an asset to any team. Working with like-minded problem solvers in a collaborative environment is where I feel most engaged and inspired. I am eager to learn more, and would cherish the opportunity to further my growth in a professional environment. I am particularly drawn to software development as it is a place where creativity and logic intersects - I am constantly striving to break down problems algorithmically, however it's awesome to use my creative side. I believe the bootcamp has allowed me to grow into a truly well-rounded full stack software developer."
					}
					csslogo={csslogo}
					expresslogo={expresslogo}
					ghlogo={ghlogo}
					htmllogo={htmllogo}
					jslogo={jslogo}
					nextlogo={nextlogo}
					tslogo={tslogo}
					nodelogo={nodelogo}
					postgreslogo={postgreslogo}
					reactlogo={reactlogo}
					stacklogo={stacklogo}
					netlifylogo={netlifylogo}
					herokulogo={herokulogo}
					jestlogo={jestlogo}
				/>
			</div>
		</div>
	);
}

export default Summary;
