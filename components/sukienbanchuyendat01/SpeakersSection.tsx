"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SpeakersSection() {
    return (
        <section className="bg-[#E7F7F9] py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <motion.h2
                    className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Diễn giả
                </motion.h2>

                <motion.div
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                        <div className="md:col-span-2 flex items-center justify-center p-6 md:p-0">
                            <Image
                                src="/AnhTuan.png"
                                alt="Nguyễn Lưu Anh Tuấn"
                                width={400}
                                height={600}
                                className="object-contain object-center"
                            />
                        </div>
                        <div className="md:col-span-3 p-8">
                            <h3 className="text-2xl lg:text-3xl font-bold text-[#00ACB8] mb-2">NGUYỄN LƯU ANH TUẤN</h3>
                            <p className="text-gray-700 text-sm lg:text-base mb-6">
                                Nhà sáng lập, Chuyên gia Tài chính & Công nghệ | <strong>FINFUL</strong>
                            </p>
                            <ul className="space-y-4 text-sm lg:text-base text-gray-800">
                                <li className="flex items-start">
                                    <span className="text-[#00ACB8] font-bold mr-3 mt-1">•</span>
                                    <span>
                                        Sáng lập công ty Công nghệ tài chính Finful - <strong>Nền tảng hàng đầu về Giáo dục tài chính</strong> tại Việt Nam.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#00ACB8] font-bold mr-3 mt-1">•</span>
                                    <span>
                                        Làm việc trực tiếp và điều phối các <strong>chuyên gia đầu ngành về đầu tư, tài chính, bất động sản, bảo hiểm.</strong>
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#00ACB8] font-bold mr-3 mt-1">•</span>
                                    <span>
                                        <strong>Xây dựng chương trình giáo dục tài chính</strong> cho các tổ chức tài chính hàng đầu: Mastercard, Techcombank, MoMo, Shinhan Finance,...
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-8 p-4 border border-brand-teal rounded-lg">
                                <div className="flex justify-around items-center flex-wrap gap-6">
                                    {/* Vui lòng đảm bảo các file logo này tồn tại trong thư mục /public */}
                                    <img src="/FinfulLogo.png" alt="Finful" className="h-8 object-contain"/>
                                    <img src="/McKinsey_logo.png" alt="McKinsey & Company" className="h-8 object-contain"/>
                                    <img src="/EY_logo.png" alt="EY" className="h-8 object-contain"/>
                                    <img src="/Vingroup_logo.png" alt="Vingroup" className="h-8 object-contain"/>
                                    <img src="/Antler_logo.png" alt="Antler" className="h-8 object-contain"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
