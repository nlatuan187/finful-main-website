interface PaymentModalProps {
  onClose: () => void;
}

export default function PaymentModal({ onClose }: PaymentModalProps) {
  const backgroundImageUrl =
    "https://api.builder.io/api/v1/image/assets/TEMP/4c0fbe6861e7a9c325a2c313538259c0acf70158?width=1040";

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Đóng modal khi nhấp ra ngoài
    >
      {/* Modal container */}
      <div
        className="relative max-w-md w-full border-4 border-gray-400 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Ngăn việc đóng modal khi nhấp bên trong
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-800 bg-opacity-90"></div>

        {/* Content */}
        <div className="relative p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="text-center space-y-6">
            <h2 className="text-xl font-semibold mb-2">
              Thông báo chuyển khoản
            </h2>

            <img
              src="/image 8.png"
              alt="QR Code thanh toán"
              className="w-44 h-44 object-contain mx-auto bg-white p-1 rounded-md"
            />

            <div className="text-left space-y-1.5 text-base sm:text-lg">
              <p>
                Nhận hàng:{" "}
                <span className="font-semibold">Ngân hàng Quân đội (MB)</span>
              </p>
              <p>
                Chủ tài khoản:{" "}
                <span className="font-semibold">CONG TY CO PHAN FINFUL</span>
              </p>
              <p>
                Số tài khoản: <span className="font-semibold">9602345678</span>
              </p>
              <p>
                Nội dung:{" "}
                <span className="font-semibold">
                  Loại vé - Họ tên - Số điện thoại
                </span>
              </p>
            </div>

            <div className="border-t border-white/30 pt-4 flex items-start gap-3">
              <svg
                className="w-10 h-10 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm text-left">
                Sau khi xác nhận thanh toán, chúng tôi sẽ liên hệ với bạn để đặt lịch tư vấn trong vòng 24 giờ tiếp theo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}