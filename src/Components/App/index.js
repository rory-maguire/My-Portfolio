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
						"Mauris sed magna nunc. Aenean nibh dui, ullamcorper eget eleifend nec, tempor nec quam. Etiam facilisis arcu vel leo vehicula aliquam. Maecenas feugiat eleifend interdum. Nunc in sapien at quam malesuada sagittis sodales et libero. Aenean fermentum urna non tincidunt congue. In luctus condimentum iaculis. Sed neque risus, vehicula nec massa eget, vulputate convallis erat. In at tempor elit. Proin tempus ac dolor sit amet lacinia. Aliquam iaculis nunc id sagittis condimentum. Phasellus dictum ex vitae sapien eleifend convallis. Nullam hendrerit elit ipsum, vitae sollicitudin lacus pharetra in. Curabitur dictum scelerisque augue, vel gravida lorem maximus non. Curabitur ut felis vel odio imperdiet malesuada ut ac nisl. Cras a lectus vel ex ultrices tincidunt.Pellentesque sed lacus ut diam ultrices tristique nec non nisi. Cras velit ipsum, vulputate id neque a, ornare porta felis. Aenean magna lectus, rutrum eu sollicitudin nec, dictum a felis. Vestibulum tincidunt quam neque, sit amet sollicitudin dui dictum eu. Nulla gravida velit erat, id lobortis eros placerat sed. Duis id sollicitudin augue. Vestibulum venenatis ac sapien ut consectetur. "
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
