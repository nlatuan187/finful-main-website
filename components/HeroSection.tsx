import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="box-border overflow-hidden relative p-0 m-0 w-full h-[585px] max-sm:h-[500px]">
      <motion.img
        src="/Hero_background.png"
        alt="Hero background"
        className="box-border object-cover absolute top-0 left-0 p-0 m-0 size-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
      <div className="box-border flex absolute left-1/2 flex-col gap-1.5 justify-center items-center p-0 m-0 -translate-x-1/2 h-[141px] top-[180px] w-[832px] max-md:max-w-[700px] max-md:w-[90%] max-sm:top-[150px] max-sm:w-[95%]">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="box-border self-stretch p-0 m-0 text-6xl font-semibold tracking-tighter text-center text-zinc-800 max-md:text-5xl max-md:tracking-tighter max-sm:text-3xl max-sm:tracking-tight"
        >
          Kiến thức &amp; Công cụ tài chính hướng tới{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent">
            lợi ích của người dùng
          </span>
        </motion.h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[350px] w-[540px] max-md:max-w-[480px] max-md:w-[90%] max-sm:top-[300px] max-sm:w-[95%]">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="box-border p-0 text-lg font-medium leading-7 text-center text-gray-500 max-md:px-4 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5"
        >
          Finful đặt lợi ích và mong muốn tài chính của bạn lên hàng đầu, giúp bạn
          đạt được các mục tiêu tài chính quan trọng
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
