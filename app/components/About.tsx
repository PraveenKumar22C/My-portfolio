"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full xs:w-[250px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[220px] xs:min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            width={64}
            height={64}
            alt={title}
            className="w-12 h-12 xs:w-16 xs:h-16 object-contain"
          />
          <h3 className="text-white text-[18px] xs:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] xs:text-[17px] max-w-3xl leading-[30px]"  // ← fixed max-w-3xl
      >
        Skilled Full-Stack Developer with expertise in the MERN stack,
        delivering responsive, SEO-optimized web applications using React.js,
        Next.js, Node.js, and Express.js. Proficient in building modern UIs
        with Tailwind CSS, Bootstrap, and ShadCN, and experienced in deploying
        scalable applications on platforms like Vercel, Render, GitHub Pages,
        and Google Cloud Platform (GCP). Implemented CI/CD pipelines using
        GitHub Actions, and built real-time features with Socket.IO, secure
        auth flows with JWT, and third-party API integrations. Developed
        production-ready projects including LMS platforms, banking dashboards,
        and real-time chat apps. Passionate about clean code, accessibility,
        and creating impactful digital solutions.
      </motion.p>

      {/* Responsive grid: 2 cols on mobile, 4 on larger screens */}
      <div className="mt-20 grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-5 xs:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");