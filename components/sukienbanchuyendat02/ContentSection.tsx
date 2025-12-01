import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
      },
    },
  };

  const sections = [
    {
      title: "Phần 1: Chu kỳ ngành Bất động sản tại Việt Nam",
      items: [
        "Nhìn lại 40 năm lịch sử thị trường BĐS Việt Nam",
        "Khung phân tích dựa trên chu kỳ trước để xác định bối cảnh hiện tại",
        "Dự phóng năm 2026: Nhận định một số kịch bản diễn biến BĐS trong thời gian tới",
      ],
    },
    {
      title: "Phần 2: Xu hướng thị trường và người mua Bất động sản",
      items: [
        "Chung cư: Luân chuyển dòng tiền giữa các thị trường, khu vực và phân khúc",
        "Đất nền: Phân hóa tỉnh thành và những kỳ vọng về sự hồi phục của thị trường",
        "Dịch chuyển căn bản về xu hướng mua BĐS trong bối cảnh nền giá cao",
      ],
    },
    {
      title: "Phần 3: Vay mua BĐS an toàn, tối ưu và thông minh",
      items: [
        "Đánh giá sức khoẻ tài chính cá nhân trước khi quyết định vay mua BĐS",
        "Những điều cần lưu ý khi vay mua BĐS để ở và vay mua để đầu tư",
        "Tối ưu lợi nhuận và giảm thiểu rủi ro khi lãi suất tăng và giá đất biến động",
      ],
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-brand-teal to-brand-teal-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute -left-48 top-32"
          width="509"
          height="408"
          viewBox="0 0 509 408"
          fill="none"
        >
          <circle
            cx="108"
            cy="401"
            r="366"
            stroke="url(#gradient1)"
            strokeWidth="70"
          />
          <defs>
            <linearGradient
              id="gradient1"
              x1="-19.7112"
              y1="24.4835"
              x2="509"
              y2="445.335"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0.3" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-white text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nội dung chia sẻ
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="p-6 lg:p-8 rounded-[20px] border border-white/70 bg-gradient-to-b from-white/35 to-white/0 backdrop-blur-md shadow-lg"
              variants={cardVariants}
            >
              <h3 className="text-lg sm:text-xl lg:text-[21px] font-semibold text-white mb-8 leading-tight">
                {section.title}
              </h3>

              <div className="space-y-5">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-sm sm:text-[15px] text-white leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
