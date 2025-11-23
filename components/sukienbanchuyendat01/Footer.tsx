export default function Footer() {
  return (
    <footer className="bg-[#232B35] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6d0a35c9dbfa7d03384e349d96b11d9e7a8e6523?width=320"
              alt="Finful Logo"
              className="h-12 w-auto"
            />
            <p className="text-[15px] text-white/70">
              © 2025 Finful, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/29100f9f96b35388c8529cc23dc161fc832d721a?width=56"
                alt="Facebook"
                className="w-7 h-7"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/161ba2919b1699173f362f9c4dd4b513756d1b36?width=56"
                alt="YouTube"
                className="w-7 h-7"
              />
            </div>
            <p className="text-[15px] text-white">hello@finful.co</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-white/70 uppercase">
              CÔNG TY
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Về chúng tôi
              </a>
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Liên hệ
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-white/70 uppercase">
              DÀNH CHO CÁ NHÂN
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Đồng hành và Tư vấn Mua nhà
              </a>
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Đồng hành và Tư vấn Đầu tư
              </a>
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Thư viện tài chính cá nhân
              </a>
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Thư viện phân tích chứng khoán
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-white/70 uppercase">
              DÀNH CHO TỔ CHỨC
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm text-white hover:text-brand-teal transition-colors"
              >
                Thiết kế nội dung giáo dục tài chính
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
