import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-yellow-400 tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Personal  project</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart city "
            subTitle="Software Project"
            result="Success"
            des="smart city is software that help tourists to navigate locations!"
          />
          <ResumeCard
            title="Portfolio "
            subTitle=" personal Website"
            result="Success"
            des="the portfolio is website that helps our customers to know more   about me!"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-yellow-400 tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">other projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="E-commerce"
            subTitle="website"
            result="Success"
            des="this is online market that link seller with their customers , the products 
           on this site must be  made in rwanda like hand craft pots,arts  etc.. !"
          />
          <ResumeCard
            title="Knowledge base "
            subTitle="Website"
            result="Success"
            des="the knowledge base is website that helps our customers to know more on  how
          to use the software and also provide support!"
          />
          {/* <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
