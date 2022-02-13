import React from "react";
import SummaryComponentCSS from "./SummaryComponent.module.css";
import { useInView } from "react-intersection-observer";

function SummaryComponent({
	header,
	subHeader,
	li1,
	li2,
	li3,
	csslogo,
	expresslogo,
	ghlogo,
	htmllogo,
	jslogo,
	nextlogo,
	nodelogo,
	postgreslogo,
	reactlogo,
	stacklogo,
}) {
	const { ref: summaryComponent, inView: isVisible } = useInView({
		threshold: 0.9,
	});

	return (
		<div className={SummaryComponentCSS.container}>
			<div
				className={`${SummaryComponentCSS.summaryText} ${
					isVisible ? SummaryComponentCSS.appear : ""
				}`}
				ref={summaryComponent}
			>
				<h2>{header}</h2>
				<h3>{subHeader}</h3>
				<ul className={SummaryComponentCSS.list}>
					<li>{li1}</li>
					<li>{li2}</li>
					<li>{li3}</li>
				</ul>
			</div>
			<div
				className={`${SummaryComponentCSS.logos} ${
					isVisible ? SummaryComponentCSS.appear : ""
				}`}
			>
				<div>
					<img src={csslogo} height="70em"></img>
				</div>
				<div>
					<img src={htmllogo} height="70em"></img>
				</div>

				<div>
					<img src={jslogo} height="70em"></img>
				</div>

				<div>
					<img src={reactlogo} height="70em"></img>
				</div>

				<div>
					<img src={nextlogo} height="70em"></img>
				</div>

				<div>
					<img src={ghlogo} height="70em"></img>
				</div>

				<div>
					<img src={nodelogo} height="50em"></img>
				</div>

				<div>
					<img src={postgreslogo} height="70em"></img>
				</div>

				<div>
					<img src={expresslogo} height="70em"></img>
				</div>

				<div>
					<img src={stacklogo} height="70em"></img>
				</div>
			</div>
		</div>
	);
}

export default SummaryComponent;
