import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
    <div className="font-vazir">
       <motion.h2   className="text-white font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]">مهارت هایی که یاد میگیرید</motion.h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default SectionWrapper(Tech, "tech");
