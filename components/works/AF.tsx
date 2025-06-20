import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";

const AF = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1 }}
			className="w-full"
		>
			<h3 className="flex gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide">
				Software Developer Intern{" "}
				<span className="text-textGreen tracking-wide">@AF</span>
			</h3>
			<p className="text-jobDuration mt-1 font-medium text-textDark">
				January 2025 - May 2025
			</p>
			<ul className="mt-6 flex flex-col gap-3">
				<li className="text-jobDuration flex gap-2 text-textDark">
					<span className="text-textGreen mt-1">
						<FaAngleRight />
					</span>
					Built a compliance tracking app in Angular and .NET for 20+ managers
					and 100+ systems, increasing timely reports by 25%.
				</li>
				<li className="text-jobDuration flex gap-2 text-textDark">
					<span className="text-textGreen mt-1">
						<FaAngleRight />
					</span>
					Modernized a critical application by converting 10,000+ lines of VB to
					.NET, reducing maintenance issues by 40%
				</li>
			</ul>
		</motion.div>
	);
};

export default AF;
