export const knowledgeData = [
    {
        id: 1,
        title: "Thực thi chiến lược hiệu quả",
        desc: "Nếu thực thi chiến lược không hiệu quả thì lỗi ở chiến lược hay lỗi ở thực thi? Trước đây hay cho rằng, chiến lược thất bại là do thực thi. Nay, để chiến lược được thực thi hiệu quả thì đầu tiên chiến lược phải đúng...",
        image: "/assets/img/baiVietMau/bai1.png",
        time: "03/08/2026",
        tags: "Đào tạo, Tin tức",
        comments: 0
    },
    {
        id: 2,
        title: "Thay đổi tư duy, văn hoá và hành vi của tổ chức",
        desc: "Quá trình chuyển đổi số đòi hỏi sự thay đổi toàn diện từ tư duy lãnh đạo đến văn hoá tổ chức và hành vi của từng cá nhân...",
        image: "/assets/img/baiVietMau/bai2.png",
        time: "02/08/2026",
        tags: "Tin tức",
        comments: 0
    },
    {
        id: 3,
        title: "[CEO DIALOGUE] Trục 1 – Khi CEO không có mặt, hệ thống có tiếp tục vận hành?",
        desc: "Một bài toán muôn thuở của các doanh nghiệp là phụ thuộc quá nhiều vào sự hiện diện của người đứng đầu...",
        image: "/assets/img/baiVietMau/bai3.png",
        time: "31/07/2026",
        tags: "CEO Dialogue",
        comments: 0
    },
    {
        id: 4,
        title: "[CEO DIALOGUE] Trục 1 – Ai được quyền quyết?",
        desc: "Trao quyền là một nghệ thuật. Phân định rõ quyền hạn và trách nhiệm sẽ giúp tổ chức linh hoạt và phản ứng nhanh hơn...",
        image: "/assets/img/baiVietMau/bai4.png",
        time: "30/07/2026",
        tags: "CEO Dialogue",
        comments: 15
    },
    {
        id: 5,
        title: "Chuyển đổi số doanh nghiệp",
        desc: "Cẩm nang toàn diện về chuyển đổi số, từ việc đánh giá mức độ trưởng thành số đến triển khai thực tế...",
        image: "/assets/img/baiVietMau/bai5.png",
        time: "27/07/2026",
        tags: "Tin tức",
        comments: 0
    },
    {
        id: 6,
        title: "Nghề CEO - Nghề chịu trách nhiệm cuối cùng",
        desc: "Những áp lực vô hình và trách nhiệm nặng nề mà người đứng đầu doanh nghiệp phải đối mặt trong môi trường kinh doanh khốc liệt...",
        image: "/assets/img/baiVietMau/bai6.png",
        time: "27/07/2026",
        tags: "Tin tức",
        comments: 0
    },
    {
        id: 7,
        title: "Phát triển năng lực lãnh đạo thời kỳ 4.0",
        desc: "Lãnh đạo trong kỷ nguyên số đòi hỏi những kỹ năng mới như thấu cảm, tư duy dữ liệu và khả năng thích ứng linh hoạt...",
        image: "/assets/img/baiVietMau/bai7.png",
        time: "25/07/2026",
        tags: "Đào tạo",
        comments: 0
    },
    {
        id: 8,
        title: "Quản trị rủi ro trong bối cảnh kinh tế biến động",
        desc: "Chiến lược xây dựng doanh nghiệp kiên cường, có khả năng chống chịu trước các cú sốc từ thị trường...",
        image: "/assets/img/baiVietMau/bai8.png",
        time: "22/07/2026",
        tags: "Tin tức",
        comments: 0
    },
    {
        id: 9,
        title: "Xây dựng chiến lược nhân sự bền vững",
        desc: "Làm thế nào để thu hút, giữ chân và phát triển nhân tài trong thời kỳ thế hệ Z đang làm chủ lực lượng lao động...",
        image: "/assets/img/baiVietMau/bai9.jpg",
        time: "20/07/2026",
        tags: "Đào tạo",
        comments: 0
    },
    {
        id: 10,
        title: "Định hình lại mô hình kinh doanh sau khủng hoảng",
        desc: "Các bài học đắt giá và hướng đi mới cho doanh nghiệp muốn phục hồi và tăng trưởng đột phá...",
        image: "/assets/img/baiVietMau/bai10.png",
        time: "18/07/2026",
        tags: "Tin tức",
        comments: 0
    }
];

// Sinh thêm data để đủ phân trang
for (let i = 11; i <= 28; i++) {
    knowledgeData.push({
        ...knowledgeData[(i - 1) % 10],
        id: i,
        title: `${knowledgeData[(i - 1) % 10].title} (Copy ${i})`,
    });
}
