import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const handleScrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tiers = [
    {
      name: "Vé thường",
      price: "399.000 VNĐ",
      features: [
        "Vé tham gia và slide webinar",
        "Quyền truy cập công cụ AI đánh giá tính khả thi của mục tiêu mua nhà",
      ],
      buttonText: "Đăng ký",
      buttonClass: "bg-[#00acb8] text-white hover:bg-[#007880]",
      borderClass: "border-[#00acb8]",
    },
    {
      name: "Vé nâng cao",
      price: "999.000 VNĐ",
      originalPrice: "Giá gốc: 3.000.000",
      priceColor: "text-brand-teal",
      features: [
        "Vé tham gia và slide webinar",
        "Folder báo cáo thị trường, cập nhật từ 4+ đơn vị nghiên cứu thị trường BĐS",
        "Bộ tài liệu phân tích thị trường tài chính và nhận định triển vọng của các kênh đầu tư",
        "Quyền truy cập công cụ AI đánh giá tính khả thi của mục tiêu mua nhà",
        {
          text: "1 buổi tư vấn tổng quan",
          bold: true,
          append:
            " với Finful giúp xác định hiện trạng tài chính và lập kế hoạch tích luỹ mua nhà",
        },
      ],
      buttonText: "Đăng ký",
      buttonClass: "bg-[#00acb8] text-white hover:bg-[#007880]",
      borderClass: "border-[#00acb8]",
    },
    {
      name: "Vé VVIP",
      price: "6.000.000 VNĐ",
      originalPrice: "Giá gốc: 15.000.000",
      priceColor: "text-white",
      badge: "ĐỒNG HÀNH LÂU DÀI",
      features: [
        "Vé tham gia và slide webinar",
        "Folder báo cáo thị trường, cập nhật từ 4+ đơn vị nghiên cứu thị trường BĐS",
        "Bộ tài liệu phân tích thị trường tài chính và nhận định triển vọng của các kênh đầu tư",
        "Quyền truy cập công cụ AI đánh giá tính khả thi của mục tiêu mua nhà",
        {
          text: "1 buổi tư vấn chuyên sâu",
          bold: true,
          append:
            " với chuyên gia và cam kết đồng hành tới khi đạt mục tiêu mua BĐS, hỗ trợ lên kế hoạch tích luỹ tài chính, tư vấn lựa chọn mua/thuê nhà và tư vấn một số lựa chọn BĐS phù hợp",
        },
      ],
      buttonText: "Đăng ký",
      buttonClass: "bg-[#FFC344] text-black hover:bg-[#FFD670]",
      bgClass: "bg-gradient-to-b from-brand-teal to-[#007880]",
      textColor: "text-white",
      isPopular: true,
    },
  ];

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
    hidden: {
      opacity: 0,
      y: 50
    },
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
    <section className="py-16 lg:py-24 bg-white rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-[26px] p-6 lg:p-8 flex flex-col ${tier.bgClass || "bg-white"
                } ${tier.borderClass ? `border-2 ${tier.borderClass}` : ""} ${tier.isPopular ? "shadow-2xl lg:scale-105 lg:z-10" : ""
                } transition-transform`}
            >
              {tier.badge && (
                <div className="flex justify-end mb-4">
                  <div className="px-4 py-1 rounded-full bg-[#4CC4CD]">
                    <span className="text-[10px] font-extrabold text-[#00565C] uppercase">
                      {tier.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="mb-2">
                  <span
                    className={`text-2xl sm:text-3xl font-bold ${tier.priceColor || "text-[#333]"
                      }`}
                  >
                    {tier.price}
                  </span>
                </div>
                {tier.originalPrice && (
                  <p
                    className={`text-sm italic ${tier.textColor
                      ? `${tier.textColor} opacity-70`
                      : "text-[#333]/70"
                      }`}
                  >
                    {tier.originalPrice}
                  </p>
                )}
                <h3
                  className={`text-2xl sm:text-[28px] font-medium mt-3 ${tier.textColor || "text-[#333]"
                    }`}
                >
                  {tier.name}
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {tier.features.map((feature, featureIndex) => {
                  const isObject = typeof feature === "object";
                  const text = isObject ? feature.text : feature;
                  const append = isObject ? feature.append : "";
                  const isBold = isObject ? feature.bold : false;

                  return (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className={`w-4 h-4 rounded-full ${tier.textColor
                            ? "border-white/30"
                            : "border-brand-teal/30"
                            } border flex items-center justify-center`}
                        >
                          <Check
                            className={`w-2.5 h-2.5 ${tier.textColor ? "text-white" : "text-brand-teal"
                              }`}
                            strokeWidth={3}
                          />
                        </div>
                      </div>
                      <p
                        className={`text-sm flex-1 ${tier.textColor || "text-[#333]"
                          }`}
                      >
                        {isBold && <strong>{text}</strong>}
                        {!isBold && text}
                        {append}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleScrollToRegister}
                className={`w-full py-3 rounded-[24px] font-medium text-[15px] transition-all mt-8 ${tier.buttonClass}`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
