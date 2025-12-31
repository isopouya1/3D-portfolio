import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto font-vazir`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            دویکس آکادمی
          </h1>
          <h2 className={`${styles.heroSubText} mt-5 text-white-100`}>
           مهارت واقعی تنها با ساختن بدست میاد !
          </h2>
          <p className={`text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-5 text-white-100`}>
            برنامه نویسی وبسایت رو تخصصی یادبگیر و باهاش کسب درآمد کن
          </p>
       
        </div>
               <a className="mt-10 z-30 absolute right-[110px] top-[220px] bg-transparent text-white px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-primary duration-100" href="https://wa.me/message/VYIXQLRNKURTI1">شروع یادگیری</a>      

      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
