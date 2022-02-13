import React from "react";
import ProjectComponent from "../ProjectComponent/index.js";
import ProjectsCSS from "./Projects.module.css";
import ProjectComponent2 from "../ProjectComponent2/index";
import { useInView } from "react-intersection-observer";

function Projects() {
	const { ref: title, inView: isTitleVisible } = useInView({
		threshold: 0.9,
	});
	return (
		<>
			<div className={ProjectsCSS.titlesec} ref={title}>
				<h1
					className={`${ProjectsCSS.title} ${
						isTitleVisible ? ProjectsCSS.appear : ""
					}`}
				>
					Some of my work so far...
				</h1>
			</div>
			<div className={ProjectsCSS.projectsSection} id="projects">
				<ProjectComponent
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={
						"We were asked to create an application that solves a problem that a bootcamper at the School of Code may encounter.Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices. Aenean sollicitudin, tortor at congue vehicula, sapien nunc varius mi, vel sagittis ligula sem sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis erat nisi, cursus et sagittis."
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent2
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={
						"We were asked to create an application that solves a problem that a bootcamper at the School of Code may encounter.Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices. Aenean sollicitudin, tortor at congue vehicula, sapien nunc varius mi, vel sagittis ligula sem sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis erat nisi, cursus et sagittis."
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={
						"We were asked to create an application that solves a problem that a bootcamper at the School of Code may encounter.Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices. Aenean sollicitudin, tortor at congue vehicula, sapien nunc varius mi, vel sagittis ligula sem sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis erat nisi, cursus et sagittis."
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent2
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={
						"We were asked to create an application that solves a problem that a bootcamper at the School of Code may encounter.Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices. Aenean sollicitudin, tortor at congue vehicula, sapien nunc varius mi, vel sagittis ligula sem sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis erat nisi, cursus et sagittis."
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
			</div>
		</>
	);
}

export default Projects;
