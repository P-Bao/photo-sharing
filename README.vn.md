# Photo Sharing

Photo Sharing là ứng dụng web full-stack để xem danh sách người dùng, xem album ảnh, bình luận, tải ảnh lên và quản lý phiên đăng nhập.

## Tài liệu

Bộ tài liệu đầy đủ nằm trong `docs/`. Tài liệu được tổ chức theo phong cách template của The Good Docs Project và cấu trúc Diataxis.

- Bắt đầu tại đây: `docs/index.vn.md`
- Tài liệu tiếng Anh: `docs/index.en.md`
- Hướng dẫn chạy dự án: `docs/getting-started.vn.md`
- API reference: `docs/api-reference.vn.md`
- Kiến trúc: `docs/architecture.vn.md`

## Chạy nhanh

1. Tạo file cấu hình backend:

   ```powershell
   Copy-Item backend\.env.example backend\.env
   ```

2. Cập nhật `DB_URL` và `SESSION_SECRET` trong `backend/.env`.

3. Cài đặt và chạy backend:

   ```powershell
   Set-Location backend
   yarn install
   yarn start
   ```

4. Cài đặt và chạy frontend:

   ```powershell
   Set-Location ..\frontend
   npm install
   npm start
   ```

Backend lắng nghe ở cổng `8081`. Frontend chạy tại `http://localhost:3000`.

## Cấu trúc dự án

```text
backend/     Express API, MongoDB models, routes và lưu trữ ảnh
frontend/    React UI và browser-side API client
docs/        Bộ tài liệu đầy đủ tiếng Anh và tiếng Việt
```

## Tài liệu khác

- Backend quick reference: `backend/README.vn.md`
- Frontend quick reference: `frontend/README.vn.md`
- README tiếng Anh: `README.md`
