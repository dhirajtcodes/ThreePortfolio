/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

export interface ServiceProps {
    title: string;
    index: number;
    Icon: string;
}

export const ServiceCard: React.FC<ServiceProps> = ({ title, index, Icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={Icon} alt={title} className="w-16" />
                </div>
            </motion.div>
        </Tilt>
    );
};

const About: React.FC = () => {
    return (
        <div>
            <motion.div variants={textVariant(2)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a skilled software developer with experience in MERN,
                Stack including in TypeScript and javaScript, and expertise in
                frameworks like ReactJS, NodeJS, MongoDB and Three.js. I&apos; a
                quick learner and collaborate closely with clients to create
                efficient, scalable and user-friendly solutions that solve
                real-world problems. Let&apos;s work together to bring your
                ideas to life!
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => {
                    return (
                        <ServiceCard
                            Icon={service.icon}
                            title={service.title}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default About;
