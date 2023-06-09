/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/style";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component: any, idName: any) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer(0, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default StarWrapper;
