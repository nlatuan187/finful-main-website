export default function HeroSection() {
    return (
        <section className="relative min-h-[680px] bg-gradient-to-b from-[#E2F6FC] via-[#E2F6FC] to-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full border-[1.5px] border-[#004449]">
                                <span className="text-[#004449] text-lg sm:text-xl lg:text-[22px] font-normal">
                                    ✦ Bàn chuyện Đất 01
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-semibold italic mb-4 bg-gradient-to-r from-[#004449] to-[#009AA5] bg-clip-text text-transparent leading-tight">
                                Vay mua Bất động sản
                            </h1>

                            <h2 className="text-6xl sm:text-7xl lg:text-[110px] font-black italic leading-none mb-6 bg-gradient-to-b from-brand-teal to-brand-teal-dark bg-clip-text text-transparent">
                                AN TOÀN
                            </h2>

                            <p className="text-xl sm:text-2xl lg:text-[32px] text-[#004449] mb-8">
                                <span className="font-normal">trước khi</span>{" "}
                                <span className="font-semibold italic">Lãi suất vay tăng cao</span>
                                <br />
                                <span className="font-normal">&</span>{" "}
                                <span className="font-semibold italic">Giá đất lập đỉnh mới</span>
                            </p>

                            <div className="text-base sm:text-lg font-semibold text-black mb-8">
                                🕓 9H30 - 11H30 <span className="text-[#BCBCBC]">|</span> THỨ 7 -
                                6.12.2025 <span className="text-[#BCBCBC]">|</span> VIN UNIVERSITY
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="flex flex-col items-center lg:items-end">
                            <div className="flex gap-4 lg:gap-6 mb-6">
                                <div className="relative">
                                    {/* Background SVG */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 286 391"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-full"
                                        >
                                            <path
                                                d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
                                                fill="url(#paint0_linear)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1="143"
                                                    y1="0"
                                                    x2="143"
                                                    y2="391"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="white" stopOpacity="0" />
                                                    <stop offset="1" stopColor="#00ACB8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/3496bc3844b95e2673a272e63a14f4427a21f164?width=532"
                                        alt="Lê Bảo Long"
                                        className="h-64 sm:h-80 lg:h-[343px] w-auto object-cover rounded-lg relative z-10"
                                    />
                                </div>
                                <div className="relative">
                                    {/* Background SVG */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                        <svg
                                            width="110%"
                                            height="110%"
                                            viewBox="0 0 286 391"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-full"
                                        >
                                            <path
                                                d="M67.1812 0H286L224.577 391H0L67.1812 0Z"
                                                fill="url(#paint0_linear2)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear2"
                                                    x1="143"
                                                    y1="0"
                                                    x2="143"
                                                    y2="391"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="white" stopOpacity="0" />
                                                    <stop offset="1" stopColor="#00ACB8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/b516d0e6076e1a277fd0f7b4e04d586c4bd53da1?width=502"
                                        alt="Nguyễn Lưu Anh Tuấn"
                                        className="h-64 sm:h-80 lg:h-[339px] w-auto object-cover rounded-lg relative z-10"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
                                <div>
                                    <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
                                        LÊ BẢO LONG
                                    </h3>
                                    <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                                        Giám đốc Chiến lược & Marketing
                                    </p>
                                    <p className="font-semibold text-base sm:text-lg text-black uppercase">
                                        Batdongsan.com.vn
                                    </p>
                                </div>
                                <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
                                <div>
                                    <h3 className="font-bold text-base sm:text-[19px] text-[#004449] mb-1">
                                        NGUYỄN LƯU ANH TUẤN
                                    </h3>
                                    <p className="text-xs sm:text-[15px] text-black/80 mb-1">
                                        Nhà sáng lập
                                    </p>
                                    <p className="font-semibold text-base sm:text-lg text-black">
                                        FINFUL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
