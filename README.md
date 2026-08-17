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

## Nhạc nền

Website sử dụng **Piano Refreshing** của **PeriTune**, piano solo nhẹ và sáng hơn để làm background ambience. Nguồn media từ Wikimedia Commons; track được sử dụng với attribution theo giấy phép Creative Commons ghi trên trang nguồn.

Nguồn: https://commons.wikimedia.org/wiki/File:%E3%80%90%E7%84%A1%E6%96%99%E3%83%95%E3%83%AA%E3%83%BCBGM%E3%80%91%E7%88%BD%E3%82%84%E3%81%8B%E3%81%AA%E3%83%94%E3%82%A2%E3%83%8E%E3%82%BD%E3%83%AD%E3%80%8CPiano_Refreshing%E3%80%8D.opus

Music credit được hiển thị trực tiếp ở footer của website. Nhạc chỉ bắt đầu sau tương tác đầu tiên của người dùng để tuân thủ chính sách autoplay của trình duyệt; trạng thái bật/tắt được lưu cục bộ trên thiết bị.

## Tuỳ biến nhanh

Các thông tin liên hệ, tên giáo viên và link mạng xã hội có thể thay đổi khi có dữ liệu thật. Facebook giáo viên hiện đã được gắn vào CTA của landing page.
