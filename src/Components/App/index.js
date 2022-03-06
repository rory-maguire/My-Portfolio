import AboutMe from "../About";
import image from "../About/headshot.jpg";
import LandingPage from "../LandingPage";
import Navbar from "../Navbar";
import Projects from "../Projects";
import Summary from "../Summary ";
import Contact from "../Contact";
import Informal from "../Informal";
import AppCSS from "./App.module.css";

function App() {
	return (
		<>
			<div className={AppCSS.app}>
				<LandingPage
					headerText={"Rory Maguire"}
					subHeaderText={""}
					portfolioLink={"#projects"}
					githubLink={"https://github.com/rory-maguire"}
					linkedInLink={"https://www.linkedin.com/in/rory-maguire-4522aa157/"}
				/>
				<Navbar />

				<AboutMe
					img={image}
					aboutMeText={
						"Hey there I'm Rory, a 21 year old software developer from Birmimgham, UK. I was once a university student at the University of Nottingham studying German, French and Spanish before withdrawing after my first year. I decided I'd love to be able to communicate with computers too so I explored computer languages out of curiosity. I have found that my brain enjoys this kind of language acquisistion in the same way. I was very fortunate to have been selected for the School of Code bootcamp which has allowed me to become a truly well rounded software developer. I haven't looked back once, and I'm extremely grateful to be able to learn more. I am particularly eager to further my skills in a professional environment."
					}
					portfolioLink={"#projects"}
				/>
				<Projects />
				<Summary />
				<Contact
					githubLink={"https://github.com/rory-maguire"}
					linkedInLink={"https://www.linkedin.com/in/rory-maguire-4522aa157/"}
				/>
				<Informal />
			</div>
		</>
	);
}

export default App;
