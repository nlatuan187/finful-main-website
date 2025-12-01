import { motion } from "framer-motion";

export default function ProblemsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const problems = [
    {
      title: "Nỗi lo kép: Mua đỉnh - Ngộp lãi",
      description:
        "Bạn sợ mua nhà khi giá đã quá cao, rồi phải đối mặt với áp lực lãi suất tăng liên tục khi thị trường có dấu hiệu đi xuống.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c68db63f76c313184483a0f26ddcacf6a6a817e1?width=108",
    },
    {
      title: "Lãi suất vay: Bài toán khó giải",
      description:
        "Bạn không biết lãi suất sẽ biến động thế nào, lo lắng không thể tính toán chính xác dòng tiền trả nợ hàng tháng và bị 'ngộp' tài chính.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ef393a36f81129f52cc5ed860260d238a639d569?width=108",
    },
    {
      title: 'Mắc kẹt giữa "Chờ" và "Vội"',
      description:
        "Bạn không biết nên xuống tiền ngay để đón đầu chu kỳ mới, hay nên chờ đợi để tránh rủi ro kinh tế bất ổn.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/028ccd1fcbe6786e9a0787ff7732418fa5e6a85e?width=108",
    },
    {
      title: "Thiếu nguồn thông tin đáng tin cậy",
      description:
        "Bạn dành hàng giờ để tìm hiểu, nhưng càng đọc thì càng thấy mông lung, vẫn không đủ thông tin đáng tin để đưa ra quyết định.",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/eac7027b4a688ff29444c103feb52729a7fd10cc?width=108",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-white via-[#008993] to-white"></div>
            <h2 className="relative text-3xl sm:text-4xl lg:text-[45px] font-semibold text-[#0D0F2C] px-8 bg-white inline-block">
              Tham gia nếu bạn đang trăn trở
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-4 p-6 lg:p-8 rounded-lg border border-[#E6E7E9] bg-[#F4FBFB] hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="absolute -right-4 top-6 w-24 h-24 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-brand-teal to-brand-teal-dark flex items-center justify-center shadow-lg">
                  <img
                    src={problem.icon}
                    alt=""
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 pr-20">
                <h3 className="text-lg sm:text-xl lg:text-[21px] font-semibold text-[#333] mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#616265] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
