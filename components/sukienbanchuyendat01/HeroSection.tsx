"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
      },
    },
  };

  const handleScrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[680px] bg-gradient-to-b from-[#E2F6FC] via-[#E2F6FC] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="pt-20 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text Content */}
            <div className="text-center order-1 col-span-3 flex flex-col items-center">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full border-[1.5px] border-[#004449]"
                variants={itemVariants}
              >
                <span className="text-[#004449] text-[14px] font-normal">
                  ✦ Bàn chuyện Đất 01
                </span>
              </motion.div>

              <motion.h1
                className="text-2xl lg:text-[42px] font-semibold italic mb-1 bg-gradient-to-r from-[#004449] to-[#009AA5] bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                Vay mua Bất động sản an toàn
              </motion.h1>

              <motion.div
                className="w-full max-w-lg flex items-center gap-2 mb-4"
                variants={itemVariants}
              >
                <span className="bg-white border border-[#006D77] text-[#006D77] px-3 py-1 text-xs sm:text-sm font-bold rounded shadow-sm whitespace-nowrap z-10">
                  trong bối cảnh
                </span>
                <div className="h-px border-t-[2px] border-dashed border-[#006D77] flex-grow relative top-[1px]">
                  <div className="absolute right-0 -top-[5px] h-[10px] border-r-[2px] border-[#006D77]"></div>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-5xl lg:text-[50px] font-black italic leading-tight mb-3 sm:mb-6 text-[#006D77]"
                style={{ textShadow: '0px 0px 30px rgba(130, 240, 252, 0.6)' }}
                variants={itemVariants}
              >
                <span className="block">LÃI SUẤT ĐI LÊN &</span>
                <span className="block">GIÁ BĐS TĂNG PHI MÃ</span>
              </motion.h2>

              <motion.div
                className="text-[12px] sm:text-lg font-semibold text-black mb-3 sm:mb-6"
                variants={itemVariants}
              >
                🕓 19H30 - 21H30 <span className="text-[#BCBCBC]">|</span> THỨ 5 -
                11.12.2025 <span className="text-[#BCBCBC]">|</span> ZOOM MEETING
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6 lg:mt-4">
                <button
                  onClick={handleScrollToRegister}
                  className="inline-flex items-center justify-center px-8 py-4 text-xl sm:text-[22px] font-semibold text-white bg-gradient-to-r from-[#004D52] to-brand-teal rounded-lg hover:shadow-xl transition-all"
                >
                  Đăng ký ngay &gt;&gt;
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="flex items-center justify-center order-2 col-span-2 mt-8 lg:mt-0"
              variants={imageVariants}
            >
              <img
                src="/House.png"
                alt="Bàn chuyện đất 01"
                className="w-full max-w-sm sm:max-w-md lg:max-w-full"
              />
            </motion.div>

            {/* CTA Button - Centered below everything */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
