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
						"https://dl.dropboxusercontent.com/s/o05o98mpe43audn/Screen%20Recording%202022-03-06%20at%2014.35.29.mov?dl=0"
					}
					header={"Bootcamp Final Project - iGive"}
					subHeader={
						"An app currently in progress, which aims to reduce wastage by allowing people to donate items to others in their local area."
					}
					text={
						"Items are listed by users which are stored in our Postgres database.These items are then displayed on a dashboard for others to see and express interest in. We used Next JS as our front-end framework to make use of special data fetching methods (SSR). This was paired with Auth0 to allow us to conditionally render which users can see and do certain things such as edit and delete, or for example show their manually uploaded profile picture rather than the default user.picture returned from Auth0. We made use of dynamic routing (SSG) for reusability of html templates for user profile pages. In our Express server-side code, we used Cloudinary API to handle image uploading capabilities. We are very excited to finish this application and the team and I have had a really fun time so far! If we have time we'd love to migrate to firebase to allow for realtime messaging. We'd also love to implement some kind of mapping or geolocation capabilities."
					}
					ghLink={
						"https://github.com/SchoolOfCode/final-project-front-end-it-crowd-room-27"
					}
					siteLink={"#"}
				/>
				<ProjectComponent2
					src={
						"https://dl.dropboxusercontent.com/s/ozm8caru4ah48a4/app-demo.mp4?dl=0"
					}
					header={"Mid-Bootcamp Project Week "}
					subHeader={
						"An app created with the PERN stack which aims to connect fellow bootcampers in an informal way"
					}
					text={
						"Halfway through the bootcamp we had project week. At the start of this week I met my teammates (who I'd never seen before), and at the end of the week our project would culminate in presenting to a panel of judges from industry. On monday we brainstormed intensly as a group, using 'dreamer, realist and critic' ideation methods to refine our ideas. Our application would allow uses to create a profile and be added to a network of other bootcampers. This app takes user input, posts it to our API request handlers in Express where it is then sent off to our PostgreSQL database. On the client side, we then map through this data and generate a card 'profile' component for each user. It also uses React bootstrap modals and React router. This was a thoroughly enjoyable week - We are working on image uploading features and authentication! "
					}
					ghLink={
						"https://github.com/SchoolOfCode/national-project-week-farc-incorporated"
					}
					siteLink={"https://priceless-poitras-7226c6.netlify.app/"}
				/>
				<ProjectComponent2
					src={
						"https://dl.dropboxusercontent.com/s/4hmxk9nxm7wxk13/todo%20demo.mov?dl=0"
					}
					header={"React To-Do list"}
					subHeader={
						"A very simple to-do list application practicing the basics of React"
					}
					text={
						"One of the very first projects we built using react which practices using the fundamentals of React. We had learned the importance of immutability in React and best practices to maintain this, such as using the spread [...] operator, using arr.slice() and so on - styled using bootstrap."
					}
					ghLink={"https://github.com/SchoolOfCode/w7d4_react-hackathon-c-a-r"}
				/>
				<ProjectComponent
					src={
						"https://dl.dropboxusercontent.com/s/biqyttrihzf469g/xMAS%20app%20normal.mov?dl=0"
					}
					header={"Rory's Records Catalogue"}
					subHeader={
						"PERN stack application to help me stay on top of my record collection"
					}
					text={
						"This was my first ever full-stack application. Knowing we'd be covering react on the course, I'd dipped my toes in the water by building this PERN stack app. As a keen record collector I need to have a better sense visually of which records I own and whether I've recorded them into digital format or not. It's also cool to see my favourites!"
					}
					ghLink={"https://github.com/rory-maguire/xmas-break-project"}
				/>
				<ProjectComponent2
					src={
						"https://dl.dropboxusercontent.com/s/5q5wqjfisiw2mk4/calculator%20demo%20.mov?dl=0"
					}
					header={"Vanilla Javascript Calculator"}
					subHeader={"A simple calculator using vanilla javascript"}
					text={
						"A simple calculator which takes the html buttons and makes them iterable by using Array.from(), maps through the buttons adding an event listener to each of them, uses a switch statement depending on what the calculator display reads and uses eval() to read the innertext value of this display for calculations"
					}
					ghLink={
						"https://github.com/rory-maguire/Vanilla-Javascript-Calculator"
					}
				/>
			</div>
		</>
	);
}

export default Projects;
