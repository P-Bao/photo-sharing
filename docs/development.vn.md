# Hướng dẫn phát triển

Dùng hướng dẫn này cho các tác vụ phát triển hằng ngày.

## Lệnh thường dùng

Frontend:

```powershell
Set-Location frontend
npm start
npm test
npm run build
```

Backend:

```powershell
Set-Location backend
yarn start
```

## Quy trình local

1. Khởi động MongoDB hoặc xác nhận remote MongoDB URL truy cập được.
2. Chạy backend ở cổng `8081`.
3. Chạy frontend ở cổng `3000`.
4. Xác nhận frontend API base URL trỏ đến đúng backend.
5. Test đăng nhập, danh sách user, danh sách ảnh, bình luận và upload.

## Quy trình tài liệu

- Giữ `README.md` ngắn và trỏ về `docs/`.
- Tài liệu tiếng Anh dùng `.en.md`.
- Tài liệu tiếng Việt dùng `.vn.md`.
- Các cặp tài liệu tiếng Anh và tiếng Việt nên giữ cùng cấu trúc.

## Xử lý sự cố

- Backend không khởi động: kiểm tra `backend/.env`, dependencies và cổng `8081`.
- Kết nối MongoDB lỗi: kiểm tra `DB_URL`.
- Frontend không fetch được dữ liệu: kiểm tra API base URL và CORS/session của backend.
- Login redirect bất thường: kiểm tra session cookie settings và requests có gửi credentials không.
- Upload lỗi: xác nhận form field tên là `photo` và `backend/images` có thể ghi.
