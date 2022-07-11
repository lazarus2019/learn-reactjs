## Cấu trúc thư mục của CRA
| Folder/File | Description |
| :---: | --- |
| `node_modules` | Chứa tất cả thư viện sử dụng trong dự án |
| `public` |  Chứa tất cả file có thể truy cập qua địa chỉ web <br> Đóng vai trò là thư mục gốc (root) của web server |
| `public/manifest.json` | File khai báo rõ ràng thông tin về website  cho trình duyệt (khi phát triển web PWA-) |
| `public/robots.txt` | File hướng dẫn công cụ tìm kiếm crawl url nào,  hững url không cần crawl |
| `gitignore` | Khai báo những file, folder không cần track để đẩy lên  github
| `src/index.js` | Là file entreepoint được webpack trỏ vào => render  |file bundle.js
| `src/reportWebVitals.js` | Thống kê báo cáo giúp công cụ tìm kiếm  |trong tương lai hiểu được website có hiệu năng thế nào để tối ưu trải nghiệm người dùng => Gửi lên GG analytic
| `src/setupTests.js` | Chạy test |
