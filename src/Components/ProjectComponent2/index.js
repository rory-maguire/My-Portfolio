import React from "react";
import ComponentCSS from "./ProjectComponent2.module.css";
import { useInView } from "react-intersection-observer";

function ProjectComponent2({ src, header, subHeader, text, ghLink, siteLink }) {
	const { ref: projectComponent, inView: isVisibile } = useInView({
		threshold: 0.7,
	});
	return (
		<div className={ComponentCSS.projectComponent} ref={projectComponent}>
			<div
				className={`${ComponentCSS.text} ${
					isVisibile ? ComponentCSS.appear : ""
				}`}
			>
				<div>
					<h2>{header}</h2>
				</div>
				<div>
					<h4>{subHeader}</h4>
				</div>
				<div className={ComponentCSS.links}>
					<div>
						<a href={ghLink} className={ComponentCSS.site}>
							Site
						</a>
					</div>
					<div>
						<a href={siteLink} className={ComponentCSS.gh}>
							GitHub
						</a>
					</div>
				</div>
				<div>
					<ul className={ComponentCSS.list}>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<p>{text}</p>
				</div>
			</div>
			<div
				className={`${ComponentCSS.vid} ${
					isVisibile ? ComponentCSS.appear : ""
				}`}
			>
				<h6>Hover over me!</h6>
				<video
					className="clip"
					width="90%"
					height="90%"
					onMouseEnter={(e) => e.currentTarget.play()}
					onMouseOut={(e) => e.currentTarget.pause()}
					src={src}
					type="video/mp4"
					muted
					loop
				></video>
			</div>
		</div>
	);
}

export default ProjectComponent2;
