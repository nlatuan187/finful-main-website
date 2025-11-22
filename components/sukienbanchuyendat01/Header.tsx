import { ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#E2F6FC] to-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <nav className="flex items-center justify-between py-6">
                    <div className="flex-shrink-0">
                        <a href="/">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/8899c1bc80022455a73f2def6807e68c9b2e662f?width=230"
                                alt="Finful Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        <a
                            href="https://planning.finful.co/"
                            target="_blank"
                            className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
                        >
                            Tư vấn mua nhà
                        </a>
                        <a
                            href="https://global.finful.co/sign-in?redirect_url=https%3A%2F%2Fglobal.finful.co%2Fcourse%2F654b4b6c919baafbb5c4e975%3Ffbclid%3DIwY2xjawGXuPtleHRuA2FlbQIxMAABHVmJVUh1h6PjYXMWcGrc4Rk4_QmPn22qZimfZLo3aj_a-POutj-ma8d90w_aem_j78gg5nee3mqU6GYcU4ItA"
                            target="_blank"
                            className="text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
                        >
                            Tư vấn đầu tư
                        </a>
                        <a
                            href="https://education.finful.co/"
                            target="_blank"
                            className="flex items-center gap-1 text-[#656C86] text-[15px] font-semibold hover:text-brand-teal transition-colors"
                        >
                            Giáo dục tài chính
                            <ChevronDown className="w-4 h-4" />
                        </a>
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
                        <a
                            href="https://muanha.finful.co/"
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-teal text-white text-[14px] font-medium shadow-md hover:bg-brand-teal-dark transition-colors"
                        >
                            Lập kế hoạch mua nhà
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
        </header>
    );
}
