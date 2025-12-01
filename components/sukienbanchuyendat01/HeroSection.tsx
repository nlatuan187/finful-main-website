"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PaymentModal from "./PaymentModal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-12-11T00:00:00+07:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Vé thường",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdVDJn-ViLZ7QhFV9856_c0lJqHogW2sWRk6PmKvDroV6SnVA/formResponse";
    const formDataUrl = new URLSearchParams();

    formDataUrl.append("entry.1531178908", formData.name);
    formDataUrl.append("entry.1887976924", formData.phone);
    formDataUrl.append("entry.2138638337", formData.service);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrl.toString(),
      });
      setIsModalOpen(true);
      setFormData({
        name: "",
        phone: "",
        service: "Vé thường",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };
  
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

  const giftBoxVariants = {
    bounce: {
      y: ["-4px", "4px"],
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const handleScrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[680px] bg-gradient-to-b from-[#E2F6FC] via-[#E2F6FC] to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="pt-20 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-7 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text Content */}
            <div className="text-center order-1 col-span-4 flex flex-col items-center">
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
                  className="inline-flex items-center justify-center px-8 py-4 text-xl sm:text-[22px] font-semibold text-white bg-gradient-to-r from-[#004D52] to-teal rounded-lg hover:shadow-xl transition-all"
                >
                  Đăng ký ngay &gt;&gt;
                </button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="rounded-lg overflow-hidden col-span-3 max-w-lg mx-auto order-2 mt-8 lg:mt-0 bg-dark text-white"
              variants={imageVariants}
            >
              <div className="p-4 text-center">
                <h3 className="text-white text-lg lg:text-xl font-bold mb-2">
                  NHANH TAY ĐĂNG KÝ
                </h3>
                <p className="text-white/80 text-base lg:text-lg">
                  Số lượng ưu đãi và thời gian có hạn
                </p>
              </div>

              <div className="p-4 bg-dark-light">
                <div className="grid grid-cols-4 gap-2 lg:gap-3 mb-2 text-center">
                  <div className="bg-white p-3 rounded">
                    <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                      {String(timeLeft.days).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 lg:gap-4 mb-8 text-white/70 text-sm font-medium text-center">
                  <span>Ngày</span>
                  <span>Giờ</span>
                  <span>Phút</span>
                  <span>Giây</span>
                </div>

                <div className="text-white/90 text-sm font-bold text-center mb-4">
                  <motion.span
                    className="inline-block mr-2"
                    variants={giftBoxVariants}
                    animate="bounce"
                  >
                    🎁
                  </motion.span>
                  Nhận ngay bộ tài liệu BĐS dòng tiền sau khi hoàn tất form đăng ký
                </div>

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] placeholder-[#B0B0B0] font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] placeholder-[#B0B0B0] font-medium"
                    pattern="0[0-9]{9}"
                    title="Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0."
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] font-medium appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      {/* Đã sửa giá trị các option */}
                      <option>Vé thường</option>
                      <option>Vé VIP</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 fill-[#333]"
                      viewBox="0 0 10 9"
                    >
                      <path d="M4.94318 8.25L-0.00110563 -1.06691e-07L9.88746 8.77543e-07L4.94318 8.25Z" />
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-dark transition-colors text-white font-medium text-base py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    Đặt lịch cho tôi
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1 7.72656H15"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.27344 2L15.0007 7.72727L9.27344 13.4545"
                        stroke="white"
                        strokeWidth="1.27273"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* CTA Button - Centered below everything */}
          </motion.div>
        </div>
      </div>

      {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
