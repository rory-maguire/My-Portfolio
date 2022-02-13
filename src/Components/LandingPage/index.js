import React from "react";
import LandingPageCSS from "./LandingPage.module.css";

function LandingPage({
	headerText,
	subHeaderText,
	subHeaderText2,
	linkedInLink,
	githubLink,
	portfolioLink,
}) {
	return (
		<div className={LandingPageCSS.homeSection}>
			<div className={LandingPageCSS.mainHeader}>
				<h1>{headerText}</h1>
				<div className={LandingPageCSS.animateDiv}>
					<h3 className={LandingPageCSS.textAnimation}>{subHeaderText}</h3>
				</div>
				<a href="http://facebook.com">
					<ul className={LandingPageCSS.buttonList}>
						<li className={LandingPageCSS.btn}>
							<a href={linkedInLink} target="_blank">
								<i
									className={`${LandingPageCSS.linkedInIcon} fa fa-linkedin fa-sm`}
								></i>
							</a>
						</li>
						<li className={LandingPageCSS.btn}>
							<a href={githubLink} target="_blank">
								<i
									className={`${LandingPageCSS.githubIcon} fa fa-github fa-sm`}
								></i>
							</a>
						</li>
					</ul>
					<a href={portfolioLink}>
						<button className={LandingPageCSS.portfolioBtn}>Projects</button>
					</a>
				</a>
			</div>
		</div>
	);
}

export default LandingPage;
