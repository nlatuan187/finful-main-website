"use client";

import { motion } from "framer-motion";

export default function ValuesSection() {
  const handleScrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#0D0F2C] mb-3 leading-tight">
            5 GIÁ TRỊ THỰC TẾ
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-[50px] font-semibold bg-gradient-to-r from-[#7FD5DB] via-brand-teal to-[#008993] bg-clip-text text-transparent">
            chỉ dành cho người tham gia
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-3 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="col-span-1 flex flex-col gap-4" variants={itemVariants}>
            <img
              src="/Nambat.png"
              alt="Value 1"
              className="w-full h-auto rounded-lg"
            />
            <div className="relative lg:px-4 pt-4 text-center rounded-lg border-2 border-brand-teal bg-gradient-to-b from-brand-teal to-[#007880] overflow-hidden flex-1 flex flex-col">
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EEEEEE] rounded-full blur-[125px]"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-[12px] p-2 sm:text-3xl lg:text-[26px] font-semibold text-white text-center lg:text-left leading-tight">
                    60 phút tham vấn 1:1 trực tiếp với chuyên gia tài chính và
                    bất động sản
                  </h3>
                </div>

                <div className="flex items-end justify-center">
                  <img
                    src="/AnhTuan.png"
                    alt="Expert 2"
                    className="w-[70%] h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1 flex flex-col gap-6" variants={itemVariants}>
            <img
              src="/Dondau.png"
              alt="Đón đầu cơ hội mua BĐS thông minh"
              className="w-full h-full object-cover rounded-lg border-2 sm:border-3 border-brand-teal"
            />
          </motion.div>

          <motion.div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 lg:gap-6" variants={itemVariants}>
            <div className="p-4 lg:p-8 rounded-lg border-2 sm:border-3 border-brand-teal bg-gradient-to-br from-brand-cyan via-brand-cyan-light to-brand-cyan flex-1 flex flex-col items-center justify-center text-center">
              {/* Badge with icon and text */}
              {/* Main title */}
              <h4 className="text-sm sm:text-2xl lg:text-[24px] font-semibold text-white mb-3 leading-tight">
                Tìm ra phương pháp vay mua BĐS tối ưu và an toàn
              </h4>

              {/* Subtitle */}
              <p className="text-sm sm:text-lg lg:text-[20px] font-light text-white">
                gồm vay mua để ở và để đầu tư
              </p>
              <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-3 mt-5 mb-6 rounded-full bg-white">
                <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-brand-teal flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-[10px] sm:text-3xl lg:text-[36px] font-bold text-brand-teal">
                  ĐÒN BẨY
                </h3>
              </div>
            </div>
            <div className="p-6 lg:p-8 rounded-lg border-2 sm:border-3 border-brand-teal bg-gradient-to-br from-white to-brand-cyan-pale flex-1">
              <h3 className="text-sm sm:text-2xl lg:text-[25px] font-semibold text-black text-center mb-2 leading-tight">
                Nhận bộ quà đặc biệt & tài liệu chuyên sâu từ
              </h3>
              <p className="text-sm sm:text-2xl lg:text-[25px] font-semibold text-brand-teal text-center">
                chuyên gia BĐS
              </p>

              <div className="mt-6">
                <img
                  src="/Nhanboqua.png"
                  alt="Quà tặng: GÓC NHÌN CHUYÊN GIA 2026 và X2 TÀI SẢN"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleScrollToRegister}
            className="inline-flex items-center justify-center px-8 py-4 text-xl sm:text-[22px] font-semibold text-white bg-gradient-to-r from-[#004D52] to-brand-teal rounded-lg hover:shadow-xl transition-all"
          >
            Đăng ký ngay &gt;&gt;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
