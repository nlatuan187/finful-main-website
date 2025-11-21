"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = React.useState("home-planner");

  const services = [
    {
      id: "home-planner",
      icon: "/home_planner.png",
      title: "Công cụ lập kế hoạch mua nhà",
      description:
        "Giúp người dùng lập kế hoạch tài chính để mua được căn nhà mơ ước. Chỉ cần nhập thông tin về căn nhà muốn mua và khả năng tài chính, chúng tôi sẽ thiết kế kế hoạch hành động phù hợp.",
      buttonText: "Truy cập Công cụ lập kế hoạch mua nhà",
      link: "https://planning.finful.co/", // URL đích
    },
    {
      id: "corporate-education",
      icon: "/corporate-education.png",
      title: "Giáo dục tài chính cho doanh nghiệp",
      description:
        "Giúp các tổ chức tài chính xây dựng chương trình giáo dục về đa dạng chủ đề tài chính, hướng tới thay đổi hành vi của người dùng, qua đó tạo tác động tích cực tới kết quả kinh doanh.",
      buttonText: "Truy cập Giáo dục tài chính cho doanh nghiệp",
      link: "https://education.finful.co/", // URL đích
    },
    {
      id: "personal-education",
      icon: "/personal-education.png",
      title: "Giáo dục tài chính cho cá nhân",
      description:
        "Một thư viện cung cấp kiến thức nền tảng về tài chính cá nhân, mở miễn phí cho tất cả mọi người, giúp bất kỳ ai muốn hiểu và xây dựng nền tảng tài chính tốt hơn.",
      buttonText: "Truy cập Giáo dục tài chính cho cá nhân",
      link: "https://app.finful.co/sign-in?redirect_url=https%3A%2F%2Fapp.finful.co%2Fcourse%2F65fb0e91feebb569c2191340%3Ffbclid%3DIwY2xjawGXuQ9leHRuA2FlbQIxMAABHQz4oKhOcoGY-vfIIYNQ0Bi8Grznu_ZpfIf_M0V_mZ5CF8qkodGIA2rAcQ_aem_ZUu0TxwVY7QuOmaOqMPvDA", // URL đích
    },
  ];

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

  return (
    <section className="box-border flex flex-col items-center justify-center gap-14 pt-10 mx-auto max-w-[1226px] max-md:px-5 max-sm:px-4 max-sm:mt-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="box-border flex flex-col items-center gap-1"
      >
        <h2 className="box-border self-stretch text-5xl font-semibold max-md:text-2xl tracking-tighter leading-10 text-center text-neutral-800 max-md:leading-10 max-sm:leading-8">
          Chúng tôi giúp tổ chức &amp; cá nhân
        </h2>
        <h2 className="box-border self-stretch text-5xl bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent font-semibold tracking-tighter leading-none text-center bg-clip-text h-[59px] max-md:text-2xl max-md:leading-10 max-sm:text-2xl max-sm:leading-8">
          đạt được mục tiêu tài chính
        </h2>
      </motion.header>
      <div className="box-border self-stretch h-px bg-gray-300" />

      <div className="hidden md:flex gap-8 w-full h-[542px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="box-border flex flex-col items-start h-[542px] w-[547px]"
        >
          <div className="box-border gap-7 flex flex-col self-stretch items-start">
            {services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <article
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`box-border flex relative flex-col gap-2.5 items-start self-stretch px-6 py-7 rounded-xl cursor-pointer transition-all duration-300 ${isActive
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-100 text-zinc-800"
                    }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <img
                        src={service.icon}
                        alt="Task icon"
                        className={`box-border w-6 h-6 aspect-[1/1] ${isActive ? "brightness-0 invert" : "brightness-0"
                          }`}
                      />
                      <h3 className="box-border text-2xl font-semibold tracking-tight leading-10 max-sm:text-lg max-sm:leading-6">
                        {service.title}
                      </h3>
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85af886dd5e81fdc8834dd08a410fe2d44ac342?width=42"
                      alt="Arrow icon"
                      className={`box-border aspect-[1/1] h-[21px] w-[21px] transition-all duration-300 ${isActive ? "" : "transform rotate-180 brightness-0"
                        }`}
                    />
                  </div>
                  {isActive && (
                    <div className="box-border flex flex-col gap-4 items-start ml-9 max-sm:ml-8 max-sm:w-full">
                      <p className="box-border self-stretch text-lg pr-7 tracking-tight leading-6 opacity-80 max-sm:text-base max-sm:leading-6">
                        {service.description}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <Link href={activeServiceData?.link || "#"} target="_blank" className="w-full mt-auto max-md:mt-2">
            <button className="flex justify-center items-center w-full p-2.5 bg-gradient-to-r from-[#232B35] to-[#656A71] text-white font-bold rounded-3xl shadow-sm text-base">
              <span className="text-base font-medium tracking-tight text-center text-white max-md:px-7">
                {activeServiceData?.buttonText}
              </span>
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="box-border relative bg-gray-100 rounded-xl h-[542px] w-[647px] p-3"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {activeService === "home-planner" && (
                <div className="flex flex-col w-full h-full gap-4">
                  <img
                    src="/Frame 1321315865.png"
                    alt="Tổng quan kế hoạch"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                  <article className="relative">
                    <img
                      src="/Group 1000002581.png"
                      alt="Xem trước kế hoạch"
                      className="w-full h-auto rounded-xl shadow-sm"
                    />
                  </article>
                </div>
              )}
              {activeService === "corporate-education" && (
                <div className="flex flex-col w-full h-full gap-4 px-2 py-2">
                  <img
                    src="/Frame 1321315876.png"
                    alt="Tổng quan kế hoạch"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                  <img
                    src="/Frame 1321315877.png"
                    alt="Xem trước kế hoạch"
                    className="w-full h-auto rounded-xl shadow-sm"
                  />
                </div>
              )}
              {activeService === "personal-education" && (
                <div className="flex flex-col w-full h-full gap-4">
                  <div className="w-full flex-grow bg-white rounded-lg">
                    <img
                      src="/Frame 1321315874.png"
                      alt="Tổng quan kế hoạch"
                      className="w-full h-auto rounded-xl shadow-sm"
                    />
                  </div>
                  <div className="w-full flex-grow bg-white rounded-lg">
                    <img
                      src="/Frame 1321315875.png"
                      alt="Xem trước kế hoạch"
                      className="w-full h-auto rounded-xl shadow-sm"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* GIAO DIỆN MOBILE: Chỉ hiển thị trên màn hình nhỏ hơn 'md' */}
      <div className="w-full md:hidden flex flex-col gap-4">
        {services.map((service) => {
          const isActive = activeService === service.id;
          return (
            <React.Fragment key={service.id}>
              <article
                onClick={() => setActiveService(isActive ? "" : service.id)}
                className={`flex flex-col p-6 rounded-xl transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-zinc-800"
                  }`}
              >
                {/* Header của accordion (Icon, Title, Mũi tên) */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <img
                      src={service.icon}
                      alt="Task icon"
                      className={`w-6 h-6 aspect-square ${isActive ? "brightness-0 invert" : "brightness-0"
                        }`}
                    />
                    <h3 className="text-lg font-semibold leading-6">
                      {service.title}
                    </h3>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85af886dd5e81fdc8834dd08a410fe2d44ac342?width=42"
                    alt="Arrow icon"
                    className={`h-[21px] w-[21px] transition-transform duration-300 ${isActive ? "transform rotate-180" // Giữ nguyên logic mũi tên
                      : "brightness-0"
                      }`}
                  />
                </div>

                {/* Phần mô tả vẫn có thể nằm bên trong article nếu muốn */}
                {isActive && (
                  <p className="mt-4 text-base leading-6 opacity-80 ml-9">
                    {service.description}
                  </p>
                )}
              </article>

              {/* Nội dung mở rộng bên ngoài Article */}
              {isActive && (
                <div className="mt-4 flex flex-col gap-4">
                  {/* Khối hình ảnh tương ứng */}
                  <div className="space-y-4">
                    {service.id === "home-planner" && (
                      <div className="box-border relative bg-gray-100 rounded-xl w-full p-3">
                        <div className="flex flex-col w-full h-full gap-4">
                          <img
                            src="/Frame 1321315865.png"
                            alt="Tổng quan kế hoạch"
                            className="w-full h-auto rounded-xl shadow-sm"
                          />
                          <img
                            src="/Group 1000002581.png"
                            alt="Xem trước kế hoạch"
                            className="w-full h-auto rounded-xl shadow-sm"
                          />
                        </div>
                      </div>
                    )}
                    {service.id === "corporate-education" && (
                      <div className="box-border relative bg-gray-100 rounded-xl w-full p-3">
                        <div className="flex flex-col w-full h-full gap-4">
                          <img src="/Frame 1321315876.png" alt="Kế hoạch doanh nghiệp" className="w-full rounded-xl shadow-sm" />
                          <img src="/Frame 1321315877.png" alt="Kế hoạch doanh nghiệp 2" className="w-full rounded-xl shadow-sm" />
                        </div>
                      </div>
                    )}
                    {service.id === "personal-education" && (
                      <div className="box-border relative bg-gray-100 rounded-xl w-full p-3">
                        <div className="flex flex-col w-full h-full gap-4">
                          <img src="/Frame 1321315874.png" alt="Kế hoạch cá nhân" className="w-full rounded-xl shadow-sm" />
                          <img src="/Frame 1321315875.png" alt="Kế hoạch cá nhân 2" className="w-full rounded-xl shadow-sm" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Nút bấm */}
                  <Link href={service.link || "#"} target="_blank" className="w-full mt-2">
                    <button className="flex justify-center items-center w-full p-2.5 bg-gradient-to-r from-[#232B35] to-[#656A71] text-white font-bold rounded-3xl shadow-sm text-base">
                      <span>{service.buttonText}</span>
                    </button>
                  </Link>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

    </section>
  );
};

export default ServicesSection;
