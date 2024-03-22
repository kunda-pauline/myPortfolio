import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graphic designer"
            subTitle="Graphic designer- (2019 - 2020)"
            result="Rwanda"
            des=" as worker in La chance de dieu ltd ,i have done different activities like graphic design,networking etc... "
          />
          <ResumeCard
            title="IT"
            subTitle="Technician - (2022)"
            result="Rwanda"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Rwanda isn't easy."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-yellow-400 tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainer"
            subTitle="DTS (2023-2024)"
            result="Rwanda"
            des="The training provided in  university of Rwanda  in order to prepare people to work in various sectors of ICT."
          />
          <ResumeCard
            title="Frontend developer"
            subTitle="KLAB (2022 - 2023)"
            result="Rwanda"
            des="KLAB has grown strongly over recent years, having transformed itself from a producer and innovation-based."
          />
       
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
