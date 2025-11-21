"use client";
// BƯỚC 1: Import công cụ `useState` từ React để tạo "trí nhớ" cho component.
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    id: "cong-cu",
    title: "Công cụ tài chính",
    children: [
      { title: "Lập kế hoạch mua nhà", href: "https://planning.finful.co/" },
      { title: "Phân tích chứng khoán", href: "https://global.finful.co/sign-in?redirect_url=https%3A%2F%2Fglobal.finful.co%2Fcourse%2F654b4b6c919baafbb5c4e975%3Ffbclid%3DIwY2xjawGXuPtleHRuA2FlbQIxMAABHVmJVUh1h6PjYXMWcGrc4Rk4_QmPn22qZimfZLo3aj_a-POutj-ma8d90w_aem_j78gg5nee3mqU6GYcU4ItA" },
    ],
  },
  {
    id: "giao-duc",
    title: "Giáo dục tài chính",
    children: [
      { title: "Thư viện tài chính cá nhân", href: "https://app.finful.co/sign-in?redirect_url=https%3A%2F%2Fapp.finful.co%2Fcourse%2F65fb0e91feebb569c2191340%3Ffbclid%3DIwY2xjawGXuQ9leHRuA2FlbQIxMAABHQz4oKhOcoGY-vfIIYNQ0Bi8Grznu_ZpfIf_M0V_mZ5CF8qkodGIA2rAcQ_aem_ZUu0TxwVY7QuOmaOqMPvDA" },
      { title: "Chương trình cho doanh nghiệp", href: "https://education.finful.co/" },
    ],
  },
  { id: "ve-finful", title: "Về Finful", href: "#" },
  { id: "lien-he", title: "Liên hệ", href: "#" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (id: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  return (
    <nav className="w-full bg-white bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
      {/* <img
        src="/Hero_background.png"
        alt="Hero background"
        className="box-border object-cover absolute w-full h-full"
      /> */}
      <div className="relative flex justify-between items-center max-w-full my-2 mx-auto px-4">
        <Link href="/">
          <img
            src="/finful.png"
            alt="Finful Logo"
            className="h-[33px] w-[115px] max-sm:h-7 max-sm:w-[100px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-12 max-md:hidden">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative h-11 flex items-center" // Đặt chiều cao cố định và căn giữa
              onMouseEnter={() => item.children && setOpenDropdown(item.id)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link href={item.href || "#"} target="_blank" className="flex items-center gap-2 text-base font-semibold text-slate-500 hover:text-cyan-600 transition-colors">
                {item.title}
                {item.children && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.children && openDropdown === item.id && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-xl py-2 z-20">
                    {item.children.map((child, index) => (
                      <Link key={index} target="_blank" href={child.href} className="block px-4 py-2 text-slate-700 hover:bg-gray-100">
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="https://muanha.finful.co/" target="_blank" className="flex items-center justify-center gap-2.5 px-5 h-11 bg-cyan-600 text-white rounded-lg shadow-sm">
            <span className="text-sm font-medium">Lập kế hoạch mua nhà</span>
            <svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
              <path d="M1.25 5.79529H11.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.45435 1.5L11.7498 5.79545L7.45435 10.0909" stroke="white" strokeWidth="1.27273" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="hidden cursor-pointer max-md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="ti ti-menu-2 text-2xl text-slate-500" />
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-lg shadow-xl p-6 z-20 md:hidden">
            <div className="flex flex-col items-start gap-4">
              {menuItems.map((item) => (
                <div key={item.id} className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <Link href={item.href || "#"} target="_blank" className="text-base font-semibold text-slate-500 hover:text-cyan-600">
                      {item.title}
                    </Link>
                    {item.children && (
                      <button onClick={() => handleSubmenuToggle(item.id)} className="p-1 -mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform text-slate-500 ${openMobileSubmenu === item.id ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.children && openMobileSubmenu === item.id && (
                    <div className="flex flex-col items-start gap-3 mt-3 pl-4 border-l-2 border-gray-200">
                      {item.children.map((child, index) => (
                        <Link key={index} href={child.href} className="text-sm text-slate-600 hover:text-cyan-600">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="https://muanha.finful.co/" target="_blank" className="flex items-center justify-center w-full gap-2.5 px-3 py-2 mt-4 h-9 bg-cyan-600 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-white">Lập kế hoạch mua nhà</span>
                <svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                  <path d="M1.25 5.79529H11.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.45435 1.5L11.7498 5.79545L7.45435 10.0909" stroke="white" strokeWidth="1.27273" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
