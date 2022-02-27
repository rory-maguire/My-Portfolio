import React from "react";
import MiscCss from "./Misc.module.css";
import talkingme from "./talking me demo .mp4";

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
						height="90%"
						onMouseEnter={(e) => e.currentTarget.play()}
						onMouseOut={(e) => e.currentTarget.pause()}
						src={talkingme}
						type="video/mp4"
						muted
						loop
					></video>
				</div>
				<div className={`${MiscCss.text} ${isVisible ? MiscCss.slideIn : ""}`}>
					<img></img>
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
						sem odio. Curabitur libero tortor, tincidunt et nunc a, luctus
						auctor lacus. Mauris auctor nisi a nulla sodales ornare. Quisque in
						molestie nunc. Aliquam fermentum tempor sem, sed consequat neque
						congue sit amet. Vivamus congue blandit pellentesque. Pellentesque
						vitae ullamcorper dolor. Integer tempor nunc id nulla viverra
						blandit. Phasellus sed efficitur nisl, viverra condimentum turpis.
						Nam a maximus orci. Vestibulum tincidunt congue rhoncus. Morbi at
						nunc non purus facilisis molestie. Ut euismod arcu eu massa aliquam
						consequat.
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
