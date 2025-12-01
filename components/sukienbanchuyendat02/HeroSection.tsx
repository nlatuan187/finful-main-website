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

  return (
    <section className="relative min-h-[680px] bg-gradient-to-b from-[#E2F6FC] via-[#E2F6FC] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full border-[1.5px] border-[#004449]"
                variants={itemVariants}
              >
                <span className="text-[#004449] text-lg sm:text-xl lg:text-[22px] font-normal">
                  ✦ Bàn chuyện Đất 01
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[50px] font-semibold italic mb-4 bg-gradient-to-r from-[#004449] to-[#009AA5] bg-clip-text text-transparent leading-tight"
                variants={itemVariants}
              >
                Vay mua Bất động sản
              </motion.h1>

              <motion.h2
                className="text-6xl sm:text-7xl lg:text-[110px] font-black italic leading-none mb-6 bg-gradient-to-b from-brand-teal to-brand-teal-dark bg-clip-text text-transparent"
                variants={itemVariants}
              >
                AN TOÀN
              </motion.h2>

              <motion.p
                className="text-xl sm:text-2xl lg:text-[32px] text-[#004449] mb-8"
                variants={itemVariants}
              >
                <span className="font-normal">trước khi</span>{" "}
                <span className="font-semibold italic">Lãi suất vay tăng cao</span>
                <br />
                <span className="font-normal">&</span>{" "}
                <span className="font-semibold italic">Giá đất lập đỉnh mới</span>
              </motion.p>

              <motion.div
                className="text-base sm:text-lg font-semibold text-black mb-8"
                variants={itemVariants}
              >
                🕓 9H30 - 11H30 <span className="text-[#BCBCBC]">|</span> THỨ 7 -
                6.12.2025 <span className="text-[#BCBCBC]">|</span> VIN UNIVERSITY
              </motion.div>
            </div>

            {/* Right Column - Images */}
            <div className="flex flex-col items-center lg:items-end">
              <motion.div
                className="flex gap-4 lg:gap-6 mb-6"
                variants={imageVariants}
              >
                <div className="relative">
                  {/* Background SVG */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 286 391"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="143"
                          y1="0"
                          x2="143"
                          y2="391"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="#00ACB8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <img
                    src="AnhLong.png"
                    alt="Lê Bảo Long"
                    className="h-64 sm:h-80 lg:h-[343px] w-auto object-cover rounded-lg relative z-10"
                  />
                </div>
                <div className="relative">
                  {/* Background SVG */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <svg
                      width="110%"
                      height="110%"
                      viewBox="0 0 286 391"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
                        fill="url(#paint0_linear2)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear2"
                          x1="143"
                          y1="0"
                          x2="143"
                          y2="391"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0" />
                          <stop offset="1" stopColor="#00ACB8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <img
                    src="/AnhTuan.png"
                    alt="Nguyễn Lưu Anh Tuấn"
                    className="h-64 sm:h-80 lg:h-[339px] w-auto object-cover rounded-lg relative z-10"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-row items-center gap-4 sm:gap-8 text-center"
                variants={itemVariants}
              >
                <div>
                  <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
                    LÊ BẢO LONG
                  </h3>
                  <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                    Giám đốc Chiến lược & Marketing
                  </p>
                  <p className="font-semibold text-base sm:text-lg text-black">
                    Batdongsan.com.vn
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
                <div>
                  <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
