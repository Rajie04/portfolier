import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Research from "./works/Research";
import Icode from "./works/Icode";
import Hacklahoma from "./works/Hacklahoma";
import Uflip from "./works/Uflip";
import UIUX from "./works/UIUX";
import DISC from "./works/DISC";
import AF from "./works/AF";
import COP from "./works/COP";

const Experience = () => {
	const [workAF, setworkAF] = useState(false);
	const [workDISC, setworkDISC] = useState(false);
	const [workUOO, setWorkUOO] = useState(false);
	const [workIcode, setworkIcode] = useState(false);
	const [workHacklahoma, setworkHacklahoma] = useState(false);
	const [workUflip, setworkUflip] = useState(false);
	const [workUiUx, setworkUiUx] = useState(false);
	const [workCOP, setworkCOP] = useState(true);

	const handleCOP = () => {
		setworkCOP(true);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(false);
	};

	const handleAF = () => {
		setworkCOP(false);
		setworkAF(true);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(false);
	};
	const handleDISC = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(true);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(false);
	};

	const handleUOO = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(true);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(false);
	};

	const handleIcode = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(true);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(false);
	};

	const handleHacklahoma = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(true);
		setworkUflip(false);
		setworkUiUx(false);
	};

	const handleUflip = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(true);
		setworkUiUx(false);
	};

	const handleUiUx = () => {
		setworkCOP(false);
		setworkAF(false);
		setworkDISC(false);
		setWorkUOO(false);
		setworkIcode(false);
		setworkHacklahoma(false);
		setworkUflip(false);
		setworkUiUx(true);
	};

	return (
		<section
			id="experience"
			className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
		>
			<SectionTitle title="experience" />
			<div className="w-full mt-10 flex flex-col md:flex-row gap-16">
				<ul className="md:w-50 flex flex-col">
					<li
						onClick={handleCOP}
						className={`${
							workCOP
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						ConocoPhillips
					</li>
					<li
						onClick={handleAF}
						className={`${
							workAF
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						American Fidelity
					</li>
					<li
						onClick={handleDISC}
						className={`${
							workDISC
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						Data Institute for Societal Challenges
					</li>
					<li
						onClick={handleUOO}
						className={`${
							workUOO
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						UNIVERSITY OF OKLAHOMA
					</li>
					<li
						onClick={handleUiUx}
						className={`${
							workUiUx
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						OU UI/UX
					</li>
					<li
						onClick={handleIcode}
						className={`${
							workIcode
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						ICODE
					</li>
					{/* <li onClick={handleHacklahoma} className={`${workHacklahoma ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}>
                    HACKLAHOMA
                </li> */}
					<li
						onClick={handleUflip}
						className={`${
							workUflip
								? "border-l-textGreen text-textGreen"
								: "border-l-hoverColor text-textDark"
						} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-tab cursor-pointer duration-300 px-8 font-semibold`}
					>
						UFLIP
					</li>
				</ul>
				{workUOO && <Research />}
				{workIcode && <Icode />}
				{workHacklahoma && <Hacklahoma />}
				{workUflip && <Uflip />}
				{workUiUx && <UIUX />}
				{workDISC && <DISC />}
				{workAF && <AF />}
				{workCOP && <COP />}
			</div>
		</section>
	);
};

export default Experience;
