import { Shield } from "lucide-react";

export default function RegistrationSection() {
    return (
        <section id="register" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto rounded-[20px] border border-brand-teal p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        <div className="space-y-6 lg:col-span-2">
                            <div>
                                <label className="block text-[#333] text-base font-semibold mb-2">
                                    Họ tên*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập họ tên"
                                    className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>

                            <div>
                                <label className="block text-[#333] text-base font-semibold mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>

                            <div>
                                <label className="block text-[#333] text-base font-semibold mb-2">
                                    Số điện thoại*
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Nhập số điện thoại"
                                    className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-brand-teal"
                                />
                            </div>

                            <div>
                                <label className="block text-[#333] text-base font-semibold mb-2">
                                    Gói đăng ký bạn quan tâm*
                                </label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-md border border-brand-teal bg-[#FAFAFA] text-[15px] font-medium text-[#333] appearance-none focus:outline-none focus:ring-2 focus:ring-brand-teal">
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
                                <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#004D52] to-brand-teal text-white text-lg font-semibold rounded-lg hover:shadow-xl transition-all">
                                    ĐĂNG KÝ NGAY &gt;&gt;
                                </button>
                            </div>
                        </div>

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
                </div>
            </div>
        </section>
    );
}
