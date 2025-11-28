import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const handleScrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#E2F6FC] to-transparent"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between py-6">
          <div className="flex-shrink-0">
            <img
              src="/FinfulLogo.png"
              alt="Finful Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a
              href="https://tuvanmuanha.finful.co"
              className="text-[#656C86] text-[15px] font-semibold hover:text-[#00ACB8] transition-colors"
            >
              Tư vấn mua nhà
            </a>
            <a
                href="https://education.finful.co/"
                target="_blank"
                className="flex items-center gap-1 text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
            >
                Giáo dục tài chính
            </a>
            <button
                onClick={handleScrollToRegister}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-teal text-white text-[14px] font-medium shadow-md hover:bg-brand-teal-dark transition-colors"
            >
                Đăng ký ngay
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.5 6H11"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.5 1L10.7954 5.29545L6.5 9.59088"
                        stroke="white"
                        strokeWidth="1.27273"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
          </div>

          <button className="lg:hidden text-[#00ACB8]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
