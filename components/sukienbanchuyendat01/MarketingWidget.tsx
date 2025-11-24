"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MarketingWidget() {
    const [isVisible, setIsVisible] = useState(true);

    const handleScrollToPricing = () => {
        const pricingSection = document.querySelector('.bg-\\[\\#E2F6FC\\]');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
            {/* Message Bubble */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="relative bg-[#1A1D29] text-white p-4 rounded-xl shadow-xl max-w-[320px] ml-2"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="pr-6">
                            <h3 className="font-bold text-lg mb-1">Số lượng có hạn</h3>
                            <p className="text-[12px] text-gray-300 mb-3 leading-relaxed">
                                Tiết kiệm hàng trăm triệu khi mua BĐS thông minh chỉ với 2 tiếng tham gia webinar
                            </p>
                            <button
                                onClick={handleScrollToPricing}
                                className="bg-[#00ACB8] text-white text-[13px] font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Đăng ký ngay
                            </button>
                        </div>

                        {/* Arrow pointing down */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#1A1D29] rotate-45"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
