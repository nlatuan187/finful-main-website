import { useState } from "react";
import { motion } from "framer-motion";

export default function StatsAndPartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const partners = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/db501439efe10b1f9535ac29891c7fc3280df9cf?width=480",
      alt: "Techcombank",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/cf1883a663d98b6ba9bf6d35b39be4d9823b51ba?width=480",
      alt: "Shinhan Finance",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/09c2f9327b48936c013be8915b5bd887c581919f?width=120",
      alt: "Partner 3",
      width: "w-12 sm:w-14",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/afd8fa4f6305e0179e01572a59c6e3d28dce7bf8?width=280",
      alt: "Partner 4",
      width: "w-28 sm:w-36",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/097ee7948d2b02e9c5cf480e71d5a6b8fe4666bf?width=92",
      alt: "Square",
      width: "w-12 sm:w-14",
    },
  ];

  const partnersRow2 = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b51ce3b1ce8722560fd77d0e582ae3393d0bcaf0?width=480",
      alt: "VinUni",
      width: "w-48 sm:w-60",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4182ba5868e1f5da580b9f2cecd31d2a94855d3b?width=96",
      alt: "Partner 6",
      width: "w-12 sm:w-14",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/1843426f40e6c8889f00e2ef2b8eb04e2b7f1b29?width=216",
      alt: "Partner 7",
      width: "w-24 sm:w-28",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c89e3afb3d8544872160299371c64ee9089661b7?width=280",
      alt: "Partner 8",
      width: "w-28 sm:w-36",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ecab3152ad990c1baaea72c62e338970bc706c20?width=280",
      alt: "Partner 9",
      width: "w-28 sm:w-36",
    },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-brand-teal to-brand-teal-dark relative overflow-hidden">
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
              stroke="url(#gradient-stats)"
              strokeWidth="70"
            />
            <defs>
              <linearGradient
                id="gradient-stats"
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
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden">
                {/* Testimonial 1 */}
                <div className={`testimonial-slide ${currentSlide === 0 ? "" : "hidden"} bg-white rounded-lg border border-[#CFCFD1] p-4 mb-5 sm:p-6 shadow-lg transition-all duration-500`}>
                  <div className="flex items-start gap-4">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f1a25cd44a519cb3c163c0cd06d26069c41feea4?width=358"
                      alt="Gia đình Việt Trần & Mai Anh"
                      className="w-24 h-24 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-[#333] mb-1">
                        Gia đình Việt Trần & Mai Anh
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#525252] mb-3">
                        Tự tin mua nhà sau khi nghe tư vấn về tài chính cá nhân
                      </p>
                      <div className="relative">
                        <svg
                          className="w-5 h-5 mb-2"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M7.01278 10.5168C6.56072 10.5183 6.11666 10.6362 5.72333 10.859C6.27709 9.42567 7.19554 8.16176 8.38778 7.19236C8.45599 7.13618 8.51247 7.06712 8.554 6.98912C8.59552 6.91111 8.62127 6.82569 8.62979 6.73773C8.6383 6.64978 8.6294 6.561 8.60361 6.47648C8.57781 6.39196 8.53562 6.31335 8.47944 6.24514C8.42327 6.17692 8.35421 6.12044 8.2762 6.07892C8.1982 6.03739 8.11278 6.01164 8.02482 6.00313C7.93686 5.99462 7.84809 6.00351 7.76357 6.02931C7.67905 6.0551 7.60044 6.0973 7.53222 6.15347C5.08778 8.13958 4 10.8896 4 12.5946C4.00421 13.1974 4.18387 13.786 4.51702 14.2885C4.85018 14.7909 5.32243 15.1855 5.87611 15.424C6.23444 15.5976 6.62685 15.6895 7.025 15.6929C7.37545 15.71 7.7257 15.6556 8.05453 15.5333C8.38336 15.4109 8.68391 15.223 8.93796 14.981C9.19201 14.739 9.39426 14.4479 9.53246 14.1254C9.67065 13.8029 9.74191 13.4557 9.74191 13.1049C9.74191 12.754 9.67065 12.4068 9.53246 12.0843C9.39426 11.7618 9.19201 11.4707 8.93796 11.2287C8.68391 10.9867 8.38336 10.7988 8.05453 10.6765C7.7257 10.5541 7.37545 10.4998 7.025 10.5168H7.01278Z"
                            fill="#00ACB8"
                          />
                          <path
                            d="M14.0128 10.542C13.5606 10.543 13.1164 10.6609 12.7233 10.8842C13.2769 9.45235 14.1929 8.18886 15.3817 7.21754C15.4561 7.16391 15.5187 7.09562 15.5657 7.01687C15.6128 6.93812 15.6432 6.85058 15.6551 6.75964C15.667 6.6687 15.6602 6.57628 15.6351 6.48807C15.61 6.39986 15.5671 6.31772 15.509 6.24671C15.4509 6.17571 15.379 6.11733 15.2975 6.07518C15.216 6.03303 15.1268 6.008 15.0353 6.00163C14.9438 5.99525 14.852 6.00767 14.7655 6.03811C14.6789 6.06856 14.5996 6.11639 14.5322 6.17865C12.0878 8.16477 11 10.9148 11 12.6198C11.0029 13.2158 11.1773 13.7984 11.5024 14.298C11.8275 14.7975 12.2895 15.1929 12.8333 15.437C13.2007 15.6157 13.6042 15.7076 14.0128 15.7059C14.3632 15.7229 14.7135 15.6686 15.0423 15.5462C15.3711 15.4238 15.6717 15.236 15.9257 14.994C16.1798 14.752 16.382 14.4609 16.5202 14.1384C16.6584 13.8159 16.7297 13.4687 16.7297 13.1178C16.7297 12.767 16.6584 12.4198 16.5202 12.0973C16.382 11.7748 16.1798 11.4837 15.9257 11.2417C15.6717 10.9997 15.3711 10.8118 15.0423 10.6894C14.7135 10.567 14.3632 10.5127 14.0128 10.5298V10.542Z"
                            fill="#00ACB8"
                          />
                        </svg>
                        <p className="text-xs sm:text-[15px] text-[#525252] leading-relaxed">
                          Gia đình có một số khúc mắc, phân vân về tài chính, chưa
                          biết nên mua nhà luôn chưa. Sau buổi nói chuyện tư vấn
                          riêng với Finful thì đã hiểu hơn về bức tranh tài chính
                          và tự tin mua nhà rồi. Sổ đỏ trao tay rồi nhé, rất hài
                          lòng về ngôi nhà đầu tiên của gia đình.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 - Hidden by default, will be shown via JS */}
                <div className={`testimonial-slide ${currentSlide === 1 ? "" : "hidden"} bg-white rounded-lg border border-[#CFCFD1] p-4 mb-5 sm:p-6 shadow-lg transition-all duration-500`}>
                  <div className="flex items-start gap-4">
                    <img
                      src="/Rectangle 34624580.png"
                      alt="Chị Thắm Bin"
                      className="w-24 h-24 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg text-[#333] mb-1">
                        Chị Thắm Bin
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#525252] mb-3">
                        Mua nhà thành công sau khi nghe nhận định thị trường
                      </p>
                      <div className="relative">
                        <svg
                          className="w-5 h-5 mb-2"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M7.01278 10.5168C6.56072 10.5183 6.11666 10.6362 5.72333 10.859C6.27709 9.42567 7.19554 8.16176 8.38778 7.19236C8.45599 7.13618 8.51247 7.06712 8.554 6.98912C8.59552 6.91111 8.62127 6.82569 8.62979 6.73773C8.6383 6.64978 8.6294 6.561 8.60361 6.47648C8.57781 6.39196 8.53562 6.31335 8.47944 6.24514C8.42327 6.17692 8.35421 6.12044 8.2762 6.07892C8.1982 6.03739 8.11278 6.01164 8.02482 6.00313C7.93686 5.99462 7.84809 6.00351 7.76357 6.02931C7.67905 6.0551 7.60044 6.0973 7.53222 6.15347C5.08778 8.13958 4 10.8896 4 12.5946C4.00421 13.1974 4.18387 13.786 4.51702 14.2885C4.85018 14.7909 5.32243 15.1855 5.87611 15.424C6.23444 15.5976 6.62685 15.6895 7.025 15.6929C7.37545 15.71 7.7257 15.6556 8.05453 15.5333C8.38336 15.4109 8.68391 15.223 8.93796 14.981C9.19201 14.739 9.39426 14.4479 9.53246 14.1254C9.67065 13.8029 9.74191 13.4557 9.74191 13.1049C9.74191 12.754 9.67065 12.4068 9.53246 12.0843C9.39426 11.7618 9.19201 11.4707 8.93796 11.2287C8.68391 10.9867 8.38336 10.7988 8.05453 10.6765C7.7257 10.5541 7.37545 10.4998 7.025 10.5168H7.01278Z"
                            fill="#00ACB8"
                          />
                          <path
                            d="M14.0128 10.542C13.5606 10.543 13.1164 10.6609 12.7233 10.8842C13.2769 9.45235 14.1929 8.18886 15.3817 7.21754C15.4561 7.16391 15.5187 7.09562 15.5657 7.01687C15.6128 6.93812 15.6432 6.85058 15.6551 6.75964C15.667 6.6687 15.6602 6.57628 15.6351 6.48807C15.61 6.39986 15.5671 6.31772 15.509 6.24671C15.4509 6.17571 15.379 6.11733 15.2975 6.07518C15.216 6.03303 15.1268 6.008 15.0353 6.00163C14.9438 5.99525 14.852 6.00767 14.7655 6.03811C14.6789 6.06856 14.5996 6.11639 14.5322 6.17865C12.0878 8.16477 11 10.9148 11 12.6198C11.0029 13.2158 11.1773 13.7984 11.5024 14.298C11.8275 14.7975 12.2895 15.1929 12.8333 15.437C13.2007 15.6157 13.6042 15.7076 14.0128 15.7059C14.3632 15.7229 14.7135 15.6686 15.0423 15.5462C15.3711 15.4238 15.6717 15.236 15.9257 14.994C16.1798 14.752 16.382 14.4609 16.5202 14.1384C16.6584 13.8159 16.7297 13.4687 16.7297 13.1178C16.7297 12.767 16.6584 12.4198 16.5202 12.0973C16.382 11.7748 16.1798 11.4837 15.9257 11.2417C15.6717 10.9997 15.3711 10.8118 15.0423 10.6894C14.7135 10.567 14.3632 10.5127 14.0128 10.5298V10.542Z"
                            fill="#00ACB8"
                          />
                        </svg>
                        <p className="text-xs sm:text-[15px] text-[#525252] leading-relaxed">
                          Chương trình chia sẻ rất hay, chị sẽ chia sẻ cho bạn bè cần nhé. Sau buổi gặp gỡ chia sẻ kiến thức thì chị cũng quyết định cọc mua nhà luôn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="carousel-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="carousel-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>


            </div>
            <motion.div
              className="rounded-[20px] border border-white/70 bg-gradient-to-b from-white/35 to-white/0 backdrop-blur-md p-8 lg:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white text-center mb-12">
                Những con số biết nói
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-white mb-3">
                    100+
                  </div>
                  <div className="text-lg sm:text-xl font-medium text-white mb-2">
                    Khách hàng tư vấn
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Chúng tôi tư vấn giúp hàng trăm khách hàng đưa ra quyết định
                    mua BĐS thành công
                  </p>
                </div>

                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-white mb-3">
                    9.2/10
                  </div>
                  <div className="text-lg sm:text-xl font-medium text-white mb-2">
                    Độ hài lòng
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Các khách hàng đánh giá cao những thông tin BĐS và các đề
                    xuất chúng tôi đưa ra
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Đối tác của chúng tôi
          </motion.h2>

          <motion.div
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 lg:gap-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className={`${partner.width} h-auto object-contain`}
                />
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {partnersRow2.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className={`${partner.width} h-auto object-contain`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
