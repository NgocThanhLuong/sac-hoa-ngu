# Sắc Hoa Ngữ

Landing page giới thiệu lớp học tiếng Trung theo phong cách trẻ trung, truyền cảm hứng và chuyên nghiệp.

## Chạy local

Mở `index.html` trực tiếp trong trình duyệt hoặc dùng một static server:

```bash
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Cấu trúc

- `index.html` — nội dung và semantic HTML
- `styles.css` / `responsive.css` / `enhanced.css` — visual system và responsive layout
- `script.js` / `enhanced.js` — navigation, kiến thức tương tác, CTA
- `wow.css` / `wow.js` — V2 WOW interactive learning experience
- `music.js` — background ambience, fade, mute state và attribution
- `data/teacher-profile.json` — dữ liệu học vấn/năng lực giáo viên, tách khỏi giao diện
- `data/teacher-profile-design-history.json` — lịch sử/policy xoay vòng design phần hồ sơ trong chu kỳ 30 ngày
- `teacher-profile.css` / `teacher-profile.js` — render phần Học vấn & Năng lực từ JSON

## Quy tắc hồ sơ giáo viên

Dữ liệu học vấn/chứng chỉ/kinh nghiệm trong `data/teacher-profile.json` được xem là dữ liệu gốc do chủ website xác nhận. Các lần refresh design chỉ được thay layout, typography, visual treatment, motion và responsive behavior; không được tự thay đổi factual data.

Mỗi design mới phải được demo trước để duyệt. Sau khi được duyệt, design được lưu vào `data/teacher-profile-design-history.json`. Chu kỳ giữ tối đa 30 design gần nhất; khi đủ 30 có thể tái sử dụng theo thứ tự cũ nhất trước với khoảng cách tối thiểu 30 ngày.

## Nhạc nền

Website sử dụng bản piano **“Piano Refreshing”** do **PeriTune** sáng tác, nguồn Wikimedia Commons. Track được dùng theo giấy phép Creative Commons Attribution và attribution được hiển thị trong footer.

Nhạc chỉ bắt đầu sau tương tác đầu tiên của người dùng để tuân thủ chính sách autoplay của trình duyệt; trạng thái bật/tắt được lưu cục bộ trên thiết bị.

## Tuỳ biến nhanh

Các thông tin liên hệ và link mạng xã hội có thể thay đổi khi có dữ liệu thật. Facebook giáo viên hiện đã được gắn vào CTA của landing page.
