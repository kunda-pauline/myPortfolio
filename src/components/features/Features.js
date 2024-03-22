import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Intelligent"
          des="I use the available data in your business and analyse the performance
           of your business"
         
        />
        <Card
          title="UX Design"
          des="providing the best user experience of your software is what I prefer the most  "
          icon={<AiFillAppstore />}
        />
        <Card
          title="UI Design"
          des="giving you the professional user interface is my hobbies"
          icon={<SiProgress />}
        />
        <Card
          title="Fullstack Development"
          des="implementing your UI into professional website is my priorities so don't 
          hesitate to reach out on me "
          icon={<FaMobile />}
        />
        <Card
          title="Data Visualization"
          des="I visualize your data very well that can be presentable to your customers"
          icon={<SiAntdesign />}
        />
        <Card
          title="Graphic design "
          des="making professional logos , flyers, etc.. is one of my hobbies "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features