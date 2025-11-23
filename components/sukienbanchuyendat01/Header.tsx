import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed left-0 right-0 z-50 bg-[#E2F6FC]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="flex items-center justify-between py-6">
          <div className="flex-shrink-0 bg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8899c1bc80022455a73f2def6807e68c9b2e662f?width=230"
              alt="Finful Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <a
              href="https://tuvanmuanha.finful.co"
              className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
            >
              Tư vấn mua nhà
            </a>
            <a
              href="https://tuvandautu.finful.co"
              className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
            >
              Tư vấn đầu tư
            </a>
            <button className="flex items-center gap-1 text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors">
              Giáo dục tài chính
              <ChevronDown className="w-4 h-4" />
            </button>
            <a
              href="#"
              className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
            >
              Về Finful
            </a>
            <a
              href="#"
              className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
            >
              Liên hệ
            </a>
          </div>

          <button className="lg:hidden text-brand-teal">
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
