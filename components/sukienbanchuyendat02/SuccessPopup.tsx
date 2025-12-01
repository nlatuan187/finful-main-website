import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Popup */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-600" />
                            </button>

                            {/* Content */}
                            <div className="text-center">
                                {/* Title */}
                                <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mb-4">
                                    ĐĂNG KÝ THÀNH CÔNG
                                </h2>

                                {/* Message */}
                                <p className="text-base sm:text-lg text-gray-700 mb-6">
                                    Thông tin của Quý khách đã được ghi nhận. BTC sẽ gửi email vé mời trong vòng 24h làm việc tiếp theo.
                                </p>

                                {/* QR Code */}
                                <div className="mb-6">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/a38d9e59d9d6e017f597ec3ac03aaf3ddd38ec17?width=522"
                                        alt="QR Code Zalo"
                                        className="w-64 h-64 mx-auto"
                                    />
                                </div>

                                {/* Footer text */}
                                <p className="text-sm sm:text-base text-gray-600">
                                    Tham gia nhóm Zalo dành riêng cho người tham gia để nhận những thông tin cập nhật mới nhất.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
