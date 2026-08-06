import React from "react";
import Image from "next/image";

const mentorsData = [
  {
    id: 1,
    name: "LÊ QUANG ĐẠM",
    designation: "CEO Marvel Việt Nam",
    image: "/assets/img/Keynote/lequangdam.jpg",
    colClass: "col-lg-4 col-md-6 mb-5",
  },
  {
    id: 2,
    name: "NGUYỄN MẠNH HÙNG",
    designation:
      "Chủ tịch Sáng lập Viện Lãnh đạo,\nQuản trị và Quản lý Việt Nam",
    image: "/assets/img/Keynote/nguyenmanhhung.jpg",
    colClass: "col-lg-4 col-md-6 mb-5 order-first order-md-0",
    isMain: true,
  },
  {
    id: 3,
    name: "NGUYỄN HUY DŨNG",
    designation: "Thứ trưởng Bộ Văn hóa,\nThể thao và Du lịch",
    image: "/assets/img/mentor/nguyenhuydung.jpg",
    colClass: "col-lg-4 col-md-6 mb-5",
  },
  {
    id: 4,
    name: "LƯU TRUNG THÁI",
    designation: "Chủ tịch Ngân hàng MB",
    image: "/assets/img/Keynote/luu-trung-thai.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 5,
    name: "NGUYỄN THỊ MAI THANH",
    designation: "Chủ tịch Tập đoàn REE",
    image: "/assets/img/mentor/nguyenthimaithanh.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 6,
    name: "LỮ THÀNH LONG",
    designation: "Chủ tịch MISA Group",
    image: "/assets/img/mentor/luthanhlong.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 7,
    name: "TÀO ĐỨC THẮNG",
    designation: "Chủ tịch/CEO Tập đoàn Viettel",
    image: "/assets/img/mentor/taoducthang.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 8,
    name: "NGUYỄN TRUNG CHÍNH",
    designation: "Chủ tịch CMC Corp",
    image: "/assets/img/mentor/nguyentrungchinh.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 9,
    name: "VÕ QUANG HUỆ",
    designation: "Chủ tịch FoundryAI Việt Nam",
    image: "/assets/img/mentor/voquanghue.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 10,
    name: "NGUYỄN THẾ TRUNG",
    designation: "Chủ tịch/CEO Công ty DTT",
    image: "/assets/img/mentor/nguyenthetrung.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
  {
    id: 11,
    name: "HOÀNG HẢI ĐƯỜNG",
    designation: "Chủ tịch Goldsun Group",
    image: "/assets/img/mentor/hoanghaiduong.jpg",
    colClass: "col-lg-3 col-md-6 mb-5",
  },
];

const CeoMentors = ({ title = "CÁC MENTOR CỦA CHƯƠNG TRÌNH", align = "center", hideHeader = false }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        paddingBottom: "80px",
        fontFamily: "var(--font-montserrat)",
      }}
    >
      <style>
        {`
                .ceo-mentor-image .social-overlay {
                    position: absolute;
                    bottom: -50px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    transition: all 0.3s ease;
                    opacity: 0;
                    z-index: 10;
                }
                .ceo-mentor-image:hover .social-overlay {
                    bottom: 20px;
                    opacity: 1;
                }
                .ceo-mentor-image .social-overlay ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                .ceo-mentor-image .social-overlay ul li a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: #cc0000;
                    color: #fff;
                    border-radius: 50%;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 16px;
                }
                .ceo-mentor-image .social-overlay ul li a:hover {
                    background: #003366;
                }
                `}
      </style>
      <div className="container">
        {!hideHeader && (
          <div className={`text-${align}`} style={{ marginBottom: "60px" }}>
            <h2
              style={{
                color: "#cc0000",
                fontSize: "36px",
                fontWeight: "800",
                marginBottom: "20px",
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                color: "#555",
                fontSize: "15.5px",
                maxWidth: "850px",
                margin: align === "center" ? "0 auto" : "0",
                lineHeight: "1.7",
              }}
            >
              CEO Mentoring được tổ chức liên tục với sự đồng hành của các Nhà
              lãnh đạo doanh nghiệp hàng đầu. Mỗi Mentor mang đến một góc nhìn
              riêng, giúp cộng đồng CEO tiếp cận nhiều kinh nghiệm lãnh đạo trong
              những bối cảnh và lĩnh vực khác nhau.
            </p>
          </div>
        )}

        <div className="row justify-content-center text-center">
          {mentorsData.map((mentor) => {
            let innerClass = "mx-auto";
            if (mentor.id === 1) innerClass = "mx-auto ms-lg-0 me-lg-auto";
            if (mentor.id === 3) innerClass = "mx-auto ms-lg-auto me-lg-0";

            return (
              <div
                key={mentor.id}
                className={mentor.colClass}
                style={{ paddingLeft: "15px", paddingRight: "15px" }}
              >
                <div
                  className={innerClass}
                  style={{
                    maxWidth: mentor.colClass.includes("col-lg-4")
                      ? "92%"
                      : "100%",
                    width: "100%",
                  }}
                >
                  <div
                    className="ceo-mentor-image"
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      aspectRatio: mentor.isMain
                        ? "3/4.15"
                        : mentor.colClass.includes("col-lg-4")
                          ? "3/4"
                          : "3/4.2",
                      margin: "0 auto 25px auto",
                      marginTop: mentor.isMain ? "-20px" : "0",
                    }}
                  >
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />

                  </div>
                  <div
                    style={{
                      minHeight: "90px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h4
                      style={{
                        color: "#cc0000",
                        fontSize: "17px",
                        fontWeight: "800",
                        margin: "0 0 10px 0",
                        fontFamily: "var(--font-montserrat)",
                        textTransform: "uppercase",
                      }}
                    >
                      {mentor.name}
                    </h4>
                    <p
                      style={{
                        color: "#555",
                        fontSize: "14.5px",
                        margin: 0,
                        whiteSpace: "pre-line",
                        lineHeight: "1.5",
                      }}
                    >
                      {mentor.designation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CeoMentors;
