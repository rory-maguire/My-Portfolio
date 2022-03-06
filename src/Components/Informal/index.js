import React from "react";
import MiscCss from "./Misc.module.css";

import { useInView } from "react-intersection-observer";

function Informal() {
	const { ref: container, inView: isVisible } = useInView({
		threshold: 0.6,
	});
	const { ref: title, inView: isTitleVisible } = useInView({
		threshold: 0.9,
	});
	return (
		<>
			<div className={MiscCss.titlesec} ref={title}>
				<h1
					className={`${MiscCss.title} ${isTitleVisible ? MiscCss.appear : ""}`}
				>
					The more informal stuff...
				</h1>
			</div>
			<div className={MiscCss.container} id="misc" ref={container}>
				<div className={`${MiscCss.vid} ${isVisible ? MiscCss.slideIn : ""}`}>
					<video
						className="clip"
						width="90%"
						src={
							"https://dl.dropboxusercontent.com/s/clp9e1yrvvx1an0/My%20Movie%203.mov?dl=0"
						}
						height="90%"
						onMouseEnter={(e) => e.currentTarget.play()}
						onMouseOut={(e) => e.currentTarget.pause()}
						type="video/mp4"
						loop
					></video>
				</div>
				<div className={`${MiscCss.text} ${isVisible ? MiscCss.slideIn : ""}`}>
					<img></img>
					<h3>Some of my passions and interests</h3>
					<p>
						First of all thanks for visiting my page - here is a more fun video
						I made if you were interested in any of my passions and interests or
						my more informal side. Thanks for watching.
					</p>
				</div>
			</div>

			<div className={MiscCss.text}>
				<p></p>
			</div>
			<div className={MiscCss.text}>
				<p></p>
			</div>
		</>
	);
}

export default Informal;
