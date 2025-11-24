"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SpeakersSection() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Diễn giả
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Speaker 1 - Lê Bảo Long */}
                    <motion.div
                        className="grid grid-cols-5 gap-1 rounded-2xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="bg-white p-4 col-span-3">
                            <h3 className="text-2xl text-[#00ACB8] font-bold mb-2">LÊ BẢO LONG</h3>
                            <p className="text-[12px] mb-4">
                                Giám đốc Chiến lược và Marketing<br />
                                <span className="font-bold text-[15px]">Batdongsan.com.vn</span>
                            </p>
                            <ul className="space-y-2 text-[12px]">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        <strong>11+ năm kinh nghiệm</strong> làm chiến lược, quản trị dự án và bán hàng tại các công ty tư vấn và công nghệ đầu ngành Việt Nam.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        Trực tiếp phát triển các <strong> Báo cáo Ngành Bất động sản, cung cấp phân tích và dự báo</strong> giúp Chủ đầu tư, Sàn môi giới và Người mua ra quyết định tốt trên thị trường.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        Đào tạo <strong>Kỹ năng Giải quyết Vấn đề và Kiến thức về Bất động sản</strong> cho 3,000+ học viên tại các tổ chức SME và Doanh nghiệp lớn.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative min-h-full bg-[#17B8CE] col-span-2">
                            <Image
                                src="/BaoLong.png"
                                alt="Lê Bảo Long"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Speaker 2 - Nguyễn Lưu Anh Tuấn */}
                    <motion.div
                        className="grid grid-cols-5 gap-1 rounded-2xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="p-4 bg-white col-span-3">
                            <h3 className="text-2xl font-bold text-[#00ACB8] mb-2">NGUYỄN LƯU ANH TUẤN</h3>
                            <p className="text-[12px] mb-4">
                                Nhà sáng lập, Chuyên gia Tài chính & Công nghệ<br />
                                <span className="font-bold text-[15px]">Finful</span>
                            </p>
                            <ul className="space-y-2 text-[12px]">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        Sáng lập công ty Công nghệ tài chính Finful - <strong>Nền tảng hàng đầu về Giáo dục tài chính</strong>tại Việt Nam.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        Làm việc trực tiếp và điều phối các <strong>chuyên gia đầu ngành về đầu tư, tài chính, bất động sản, bảo hiểm.</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>
                                        <strong>Xây dựng chương trình giáo dục tài chính</strong>cho các tổ chức tài chính hàng đầu: Mastercard, Techcombank, MoMo, Shinhan Finance,...
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative min-h-full bg-[#17B8CE] col-span-2">
                            <Image
                                src="/NLAT.png"
                                alt="Nguyễn Lưu Anh Tuấn"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
