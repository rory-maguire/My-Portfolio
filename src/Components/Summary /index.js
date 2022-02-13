import React from "react";
import SummaryComponent from "../SummaryComponent";
import SummaryCSS from "./Summary.module.css";
import csslogo from "./logos/css3 logo.png";
import expresslogo from "./logos/express logo.png";
import ghlogo from "./logos/git hub logo.png";
import htmllogo from "./logos/html 5 logo.png";
import jslogo from "./logos/js logo.png";
import nextlogo from "./logos/next logo.png";
import nodelogo from "./logos/node logo.png";
import postgreslogo from "./logos/postgres logo.png";
import reactlogo from "./logos/react logo .png";
import stacklogo from "./logos/stack logo .svg";

import { useInView } from "react-intersection-observer";
function Summary() {
	const { ref: title, inView: isTitleVisible } = useInView({
		threshold: 0.9,
	});
	return (
		<div>
			<div className={SummaryCSS.titlesec} ref={title}>
				<h1
					className={`${SummaryCSS.title} ${
						isTitleVisible ? SummaryCSS.appear : ""
					}`}
				>
					Professional Summary TYPESCRIPT
				</h1>
			</div>

			<div className={SummaryCSS.sectionContainer} id="summary">
				<SummaryComponent
					header={"Professional Summary"}
					subHeader={
						"Aliquam ut magna et massa iaculis faucibus vel ut nibh. Aliquam eget varius metus, quis ornare erat. Quisque vitae metus tincidunt,"
					}
					li1={
						"in, egestas id ante. Donec interdum lorem id nunc hendrerit, ut laoreet odio ultrices."
					}
					li2={"Sed maximus sit amet dui id facilisis. Vestibulum vel miest."}
					li3={
						"Donec semper diam vitae accumsan consectetur. Proin aliquet mauri eget neque gravida, vitae"
					}
					csslogo={csslogo}
					expresslogo={expresslogo}
					ghlogo={ghlogo}
					htmllogo={htmllogo}
					jslogo={jslogo}
					nextlogo={nextlogo}
					nodelogo={nodelogo}
					postgreslogo={postgreslogo}
					reactlogo={reactlogo}
					stacklogo={stacklogo}
				/>
			</div>
		</div>
	);
}

export default Summary;
