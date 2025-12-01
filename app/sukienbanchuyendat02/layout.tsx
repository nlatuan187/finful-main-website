import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bàn chuyện Đất 02 - Vay mua Bất động sản AN TOÀN",
    description: "Sự kiện chia sẻ kiến thức về vay mua bất động sản an toàn, tối ưu và thông minh. Giúp bạn tránh rủi ro lãi suất và đưa ra quyết định đúng đắn.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
