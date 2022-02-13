import React from "react";
import CSS from "./contact.module.css";
import { useInView } from "react-intersection-observer";

function Contact({ linkedInLink, githubLink }) {
	const { ref: title, inView: isTitleVisible } = useInView({
		threshold: 0.9,
	});
	return (
		<>
			<div className={CSS.titlesec} ref={title}>
				<h1 className={`${CSS.title} ${isTitleVisible ? CSS.appear : ""}`}>
					Get in touch...
				</h1>
			</div>
			<div id="contact" className={CSS.container}>
				<ul className={CSS.buttonList}>
					<li className={CSS.btn}>
						<a href={linkedInLink} target="_blank">
							<i className={`${CSS.linkedInIcon} fa fa-linkedin fa-sm`}></i>
						</a>
					</li>
					<li className={CSS.btn}>
						<a href={githubLink} target="_blank">
							<i className={`${CSS.githubIcon} fa fa-github fa-sm`}></i>
						</a>
					</li>
				</ul>
				<div className={CSS.text}>
					<h3>Contact Me</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
						ullamcorper ipsum. Maecenas pellentesque vehicula massa id
						condimentum. Donec cursus ultricies tempor. Nulla laoreet tortor sed
						dolor suscipit, blandit dignissim mauris auctor. Nunc sapien felis,
						fermentum nec nulla tempor, luctus sagittis est.
					</p>
				</div>
			</div>
		</>
	);
}

export default Contact;
