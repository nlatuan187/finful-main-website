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
            className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text Content */}
            <div className="text-center order-1 flex flex-col items-center">
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
                🕓 9H30 - 11H30 <span className="text-[#BCBCBC]">|</span> THỨ 7 -
                6.12.2025 <span className="text-[#BCBCBC]">|</span> VINUNIVERSITY
              </motion.div>
            </div>

            {/* Right Column - Images */}
            <div className="flex flex-col items-center lg:items-end order-3 lg:order-2">
              <motion.div
                className="flex gap-4 lg:gap-6 mb-6"
                variants={imageVariants}
              >
                <div className="relative">
                  <img
                    src="AnhLong.png"
                    alt="Lê Bảo Long"
                    className="h-64 sm:h-80 lg:h-[343px] w-auto object-cover rounded-lg relative z-10"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/AnhTuan.png"
                    alt="Nguyễn Lưu Anh Tuấn"
                    className="h-64 sm:h-80 lg:h-[339px] w-auto object-cover rounded-lg relative z-10"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-row items-center gap-4 sm:gap-8 text-center mb-8"
                variants={itemVariants}
              >
                <div>
                  <h3 className="font-bold text-[14px] sm:text-[19px] text-[#004449] mb-1">
                    LÊ BẢO LONG
                  </h3>
                  <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                    CMO
                  </p>
                  <p className="font-semibold text-base sm:text-lg text-black">
                    Batdongsan.com.vn
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
                <div>
                  <h3 className="font-bold text-[14px] sm:text-[19px] text-[#004449] mb-1">
                    NGUYỄN LƯU ANH TUẤN
                  </h3>
                  <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                    Nhà sáng lập
                  </p>
                  <p className="font-semibold text-base sm:text-lg text-black uppercase">
                    FINFUL
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button - Centered below everything */}
            <div className="col-span-1 lg:col-span-2 flex justify-center mt-0 lg:mt-12 order-2 lg:order-3">
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleScrollToRegister}
                  className="inline-flex items-center justify-center px-8 py-4 text-xl sm:text-[22px] font-semibold text-white bg-gradient-to-r from-[#004D52] to-brand-teal rounded-lg hover:shadow-xl transition-all"
                >
                  Đăng ký ngay &gt;&gt;
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
