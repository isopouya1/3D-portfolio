import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} font-vazir`}>چرا وب ؟</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <h3 className="text-white font-medium">1. تقاضای بالا و درآمد خوب: </h3>
        بازار کار گسترده با فرصت‌های شغلی فراوان و حقوق رقابتی.
 <br /> <br />
       <h3  className="text-white font-medium"> 2. ورود آسان و امکان رشد: </h3>
        نیاز به مدرک دانشگاهی ندارد و با تمرین مستمر می‌توان به سطح حرفه‌ای رسید.
 <br /> <br />
       <h3 className="text-white font-medium"> 3. مهارت حل مسئله را تقویت می‌کند:</h3> 
        ذهن را برای تحلیل منطقی و تفکر خلاقانه تربیت می‌کند.
 <br /> <br />
        <h3 className="text-white font-medium">4. استقلال و آزادی عمل:</h3> 
        می‌توانید ایده‌های خود را بدون وابستگی به دیگران اجرا کنید یا به صورت فریلنسر کار کنید.
 <br /> <br />
        <h3  className="text-white font-medium">5. دنیای دیجیتال در حال گسترش است:</h3>
        تمامی کسب‌وکارها به وب‌سایت و نیروی متخصص برای توسعه آن نیاز دارند
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
