"use client";

import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import SuccessPopup from "./SuccessPopup";

export default function RegistrationSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Vé thường (1 buổi)",
  });

  const handleFormSubmit = () => {
    setSubmitted(true);
    setIsPopupOpen(true);
  };

  const handleIframeLoad = () => {
    if (submitted) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Vé thường (1 buổi)",
      });
      setSubmitted(false);
    }
  };

  return (
    <section id="register" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="max-w-6xl mx-auto rounded-[20px] border border-brand-teal p-8 lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: "none" }}
              onLoad={handleIframeLoad}
            ></iframe>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdVDJn-ViLZ7QhFV9856_c0lJqHogW2sWRk6PmKvDroV6SnVA/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleFormSubmit}
              className="space-y-6 lg:col-span-2"
            >
              <div>
                <label className="block text-[#333] text-base font-semibold mb-2">
                  Họ tên*
                </label>
                <input
                  type="text"
                  name="entry.1531178908"
                  placeholder="Nhập họ tên"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <label className="block text-[#333] text-base font-semibold mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="entry.1887976924"
                  placeholder="Nhập email"
                  required
                  pattern=".*@.*"
                  title="Email phải chứa ký tự @"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>

              <div>
                <label className="block text-[#333] text-base font-semibold mb-2">
                  Số điện thoại*
                </label>
                <input
                  type="tel"
                  name="entry.1180298465"
                  placeholder="Nhập số điện thoại"
                  required
                  className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  pattern="0[0-9]{9}"
                  title="Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0."
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[#333] text-base font-semibold mb-2">
                  Gói đăng ký bạn quan tâm*
                </label>
                <div className="relative">
                  <select
                    name="entry.2138638337"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] appearance-none focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  >
                    <option>Vé thường</option>
                    <option>Vé nâng cao</option>
                    <option>Vé VVIP</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.95958 9.08032L0.000402958 -3.54994e-05L7.91876 -3.44161e-05L3.95958 9.08032Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#004D52] to-brand-teal text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all"
                >
                  ĐĂNG KÝ NGAY &gt;&gt;
                </button>
              </div>
            </form>

            <div className="flex flex-col justify-between h-full lg:col-span-3 space-y-6">
              <h3 className="text-xl sm:text-[24px] font-semibold text-[#333] text-center">
                THÔNG TIN CHUYỂN KHOẢN ĐĂNG KÝ
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a38d9e59d9d6e017f597ec3ac03aaf3ddd38ec17?width=522"
                  alt="QR Code"
                  className="w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0"
                />

                <div className="space-y-4 flex-1">
                  <p className="text-[15px] text-[#333]">
                    <span className="font-semibold text-brand-teal">
                      Nhân hàng:
                    </span>{" "}
                    Ngân hàng Quân đội (MB)
                  </p>
                  <p className="text-[15px] text-[#333]">
                    <span className="font-semibold text-brand-teal">
                      Chủ tài khoản:
                    </span>{" "}
                    CONG TY CO PHAN FINFUL
                  </p>
                  <p className="text-[15px] text-[#333]">
                    <span className="font-semibold text-brand-teal">
                      Số tài khoản:
                    </span>{" "}
                    9602345678
                  </p>
                  <p className="text-[15px] text-[#333]">
                    <span className="font-semibold text-brand-teal">
                      Nội dung:
                    </span>{" "}
                    Loại vé - Họ tên - Số điện thoại
                  </p>
                  <p className="text-[15px] text-[#333]">
                    <span className="font-semibold text-brand-teal">
                      Ví dụ:
                    </span>{" "}
                    Vé VVIP - Nguyen Van A - 012345678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg">
                <Shield className="w-8 h-8 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-[#333] italic">
                  Sau khi xác nhận thông tin chuyển khoản, BTC sẽ gửi email vé
                  mời cho các khách hàng trong vòng 24h làm việc.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Popup */}
      <SuccessPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
