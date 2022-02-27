import React from "react";
import ProjectComponent from "../ProjectComponent/index.js";
import ProjectsCSS from "./Projects.module.css";
import ProjectComponent2 from "../ProjectComponent2/index";
import { useInView } from "react-intersection-observer";
import dummyvid from "./loading.mp4";

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
				{/* <ProjectComponent
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={`Halfway through the bootcamp, we were put into groups of people we had never met before and set the task of creating an application that solves a problem that a School of Code Bootcamper may face. My team and I, after a fair amount of research decided to try and solve this: "the cohort is large and we are all remote, so it is difficult to get to know fellow bootcampers in an informal way". After a day of ideation on the problem, we came up with our first wireframe mock-ups. The application allows bootcampers to fill out informal things about themselves (music taste, favourite films etc.) and add themselves to the network. `}
					ghLink={"#"}
					siteLink={"#"}
				/> */}

				<ProjectComponent
					src={
						"https://dl.dropboxusercontent.com/s/ylcnj50yodko6r6/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created using React Mauris quis quam lorem. Donec euismod nisi ac est aliquam ultrices."
					}
					text={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida dolor at justo maximus, ac vehicula massa mattis. Etiam non ullamcorper tellus. Nunc scelerisque, massa ac lobortis scelerisque, nisi justo efficitur ante, eget consectetur velit mauris sed mauris. Fusce pellentesque eu velit nec commodo. Nam tincidunt odio et elit rutrum, imperdiet malesuada enim lobortis. Praesent nunc erat, ultricies a lectus laoreet, faucibus tempor eros. Fusce nec dictum nisl, ut facilisis neque. Vivamus eget efficitur leo. Morbi quis tortor a urna gravida suscipit. Etiam vitae lorem eu neque semper facilisis ac ut ante. Cras a placerat leo. Nunc commodo augue et enim cursus iaculis. Morbi tincidunt lacus a diam blandit, ut scelerisque ipsum tristique. Pellentesque enim lacus, elementum nec semper quis, tempor eget enim."
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				{/* <ProjectComponent2
					src=""
					header={"My Portfolio Page"}
					subHeader={
						"A page which showcases myself both as an aspiring software developer but also "
					}
					text={
						"This application, the one you are using right now, was built in React. I wanted to keep the design clean and simple, so as not to overwhelm the user/reader with information. I used the Intersection Observer API which helps me to handle scroll events and make the page more interactive. This was tricky, because the API wasn't built for react usage, I ended up using a really handy npm package called react-intersection-observer to help achieve the same functionality. I wanted the page to showcase myself both as an aspiring junior developer, but also myself in an informal way, so that the user can understand what I'm about as best as possible. I had a lot of fun making this application and I hope you enjoy interacting with it."
					}
					ghLink={"#"}
					siteLink={"#"}
				/> */}

				<ProjectComponent2
					src={dummyvid}
					header={"New Project Goes New project text goes here"}
					subHeader={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					text={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent
					src={dummyvid}
					header={"New Project Goes New project text goes here"}
					subHeader={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					text={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent2
					src={dummyvid}
					header={"New Project Goes New project text goes here"}
					subHeader={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					text={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent
					src={dummyvid}
					header={"New Project Goes New project text goes here"}
					subHeader={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					text={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
				<ProjectComponent2
					src={dummyvid}
					header={"New Project Goes New project text goes here"}
					subHeader={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					text={
						"New project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes hereNew project text goes here"
					}
					ghLink={"#"}
					siteLink={"#"}
				/>
			</div>
		</>
	);
}

export default Projects;
