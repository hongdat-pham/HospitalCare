# HospitalCare

🇺🇸 English Version: [README.md](https://github.com/hongdat-pham/HospitalCare/blob/main/README.md)

## Giới thiệu

HospitalCare là hệ thống quản lý bệnh viện (Hospital Information System - HIS) được xây dựng nhằm hỗ trợ số hóa quy trình khám chữa bệnh, quản lý hồ sơ bệnh án điện tử, cận lâm sàng, nhà thuốc và thanh toán viện phí.

Dự án được phát triển trong khuôn khổ đồ án tốt nghiệp với mục tiêu mô phỏng các nghiệp vụ cốt lõi của bệnh viện theo hướng hiện đại và thực tiễn.

---

## Chức năng chính

### Quản lý bệnh nhân

- Tiếp nhận bệnh nhân
- Quản lý hồ sơ bệnh nhân
- Theo dõi lịch sử khám bệnh

### Quản lý lịch khám

- Đặt lịch khám
- Quản lý hàng chờ
- Theo dõi lượt khám

### Hồ sơ bệnh án điện tử (EMR)

- Ghi nhận khám lâm sàng
- Lưu chỉ số sinh hiệu
- Chẩn đoán theo ICD-10

### Quản lý cận lâm sàng

- Chỉ định xét nghiệm
- Nhập kết quả xét nghiệm
- Đồng bộ kết quả theo thời gian thực

### Quản lý đơn thuốc

- Kê đơn điện tử
- Theo dõi lịch sử điều trị
- Quản lý thuốc sử dụng

### Quản lý nhà thuốc

- Quản lý tồn kho
- Xuất thuốc
- Theo dõi nhập xuất thuốc

### Quản lý thanh toán

- Lập hóa đơn
- Thanh toán viện phí
- Quản lý giao dịch

---

## Vai trò người dùng

| Vai trò       | Mô tả                                    |
| ------------- | ---------------------------------------- |
| Quản trị viên | Quản lý hệ thống và tài khoản            |
| Lễ tân        | Tiếp nhận bệnh nhân và quản lý lịch khám |
| Bác sĩ        | Khám bệnh, chẩn đoán và kê đơn           |
| Kỹ thuật viên | Thực hiện và trả kết quả cận lâm sàng    |
| Dược sĩ       | Quản lý thuốc và xuất thuốc              |
| Thu ngân      | Quản lý hóa đơn và thanh toán            |

---

## Công nghệ sử dụng

### Backend

- NestJS
- PostgreSQL
- TypeORM
- JWT Authentication
- Role-Based Access Control (RBAC)
- Socket.IO
- Swagger

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query
- Zustand

### Triển khai

- Railway / Render (Backend)
- Vercel (Frontend)

---

## Cấu trúc dự án

```text
hospitalcare/
│
├── docs/
├── backend/
├── frontend/
├── README.md
└── README.vi.md
```

---

## Tài liệu

Thư mục `docs/` bao gồm:

- SRS (Software Requirements Specification)
- SDD (Software Design Description)
- ERD (Entity Relationship Diagram)
- Test Documentation

---

## Phạm vi dự án

### Bao gồm

- Khám ngoại trú (OPD)
- Quản lý nhập viện cơ bản
- Quản lý cận lâm sàng
- Quản lý nhà thuốc
- Quản lý thanh toán

### Không bao gồm

- ICU
- Quản lý phẫu thuật
- Tích hợp thiết bị y tế
- Tích hợp bảo hiểm nâng cao

---

## Tác giả

Phạm Hồng Đạt
