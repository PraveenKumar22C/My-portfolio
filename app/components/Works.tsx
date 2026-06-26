"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
};

const getPlatformIcon = (platform: ProjectCardProps["platform"]) => {
  const icons: Record<string, string> = {
    Netlify: "/tech/netlify.webp",
    Vercel: "/tech/vercel.svg",
    Wordpress: "/tech/wordpress.webp",
    Web: "/web.webp",
    Figma: "/tech/figma.webp",
  };
  return icons[platform] ?? "/web.webp";
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deploy_link,
  platform,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full bg-tertiary p-4 rounded-2xl flex flex-col"
    >
      {/* Project image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: "200px" }}
      >
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          alt={name}
          className="object-cover"
        />

        {/* Action icons overlay */}
        <div className="absolute top-2 right-2 flex gap-2">
          {source_code_link && (
            <Link
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center"
            >
              <Image
                src="/tech/github.webp"
                width={20}
                height={20}
                alt="GitHub"
                className="object-contain"
              />
            </Link>
          )}
          <Link
            href={deploy_link}
            target="_blank"
            rel="noopener noreferrer"
            className="black-gradient w-9 h-9 rounded-full flex justify-center items-center"
          >
            <Image
              src={getPlatformIcon(platform)}
              width={20}
              height={20}
              alt={platform}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Card content */}
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-white font-bold text-[18px] xs:text-[20px] leading-snug">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[13px] xs:text-[14px] leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] xs:text-[13px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Projects.</h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] xs:text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-12 xs:mt-20 grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");