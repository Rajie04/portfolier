import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa";

const DISC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1 }}
			className="w-full"
		>
			<h3 className="flex gap-1 font-semibold text-[22px] lg:text-jobTitle font-titleFont tracking-wide">
				Software Engineer Intern{" "}
				<span className="text-textGreen tracking-wide">@DISC</span>
			</h3>
			<p className="text-jobDuration mt-1 font-medium text-textDark">
				August 2024 - December 2024
			</p>
			<ul className="mt-6 flex flex-col gap-3">
				<li className="text-jobDuration flex gap-2 text-textDark">
					<span className="text-textGreen mt-1">
						<FaAngleRight />
					</span>
					Led analysis for a $4M U.S. Gov. project, finding risks in supply
					chain and implementing solutions that reduce risk by 18%
				</li>
				<li className="text-jobDuration flex gap-2 text-textDark">
					<span className="text-textGreen mt-1">
						<FaAngleRight />
					</span>
					Designed an algorithm using NLP to perform sentiment analysis on news
					articles, reducing manual review time by 40%.
				</li>
				<li className="text-jobDuration flex gap-2 text-textDark">
					<span className="text-textGreen mt-1">
						<FaAngleRight />
					</span>
					Developed data visualization dashboards to show key risk metrics,
					enabling stakeholders to identify critical issues 20% faster.
				</li>
			</ul>
		</motion.div>
	);
};

export default DISC;
