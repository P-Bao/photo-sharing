# Bắt đầu

Tutorial này giúp chạy ứng dụng Photo Sharing local với React frontend và Express backend.

## Yêu cầu

- Đã cài Node.js.
- Đã cài npm cho frontend.
- Đã cài Yarn cho backend, hoặc dùng npm nếu không dùng Yarn.
- Có chuỗi kết nối MongoDB.

## 1. Cấu hình môi trường backend

Từ thư mục root của repository:

```powershell
Copy-Item backend\.env.example backend\.env
```

Sửa `backend/.env`:

```env
DB_URL=mongodb://...
SESSION_SECRET=thay-bang-chuoi-bi-mat-dai-va-ngau-nhien
```

Kết quả mong đợi: backend đọc được cấu hình MongoDB và session mà không đưa secret vào Git.

## 2. Cài đặt dependencies backend

```powershell
Set-Location backend
yarn install
```

Nếu không có Yarn, dùng `npm install`.

## 3. Chạy backend

```powershell
yarn start
```

Kết quả mong đợi: server log rằng nó đang lắng nghe ở cổng `8081`.

## 4. Cài đặt dependencies frontend

Mở terminal khác:

```powershell
Set-Location frontend
npm install
```

## 5. Chạy frontend

```powershell
npm start
```

Kết quả mong đợi: React app mở tại `http://localhost:3000`.

## 6. Kết nối frontend với backend local

API client hiện tại dùng base URL hard-code trong `frontend/src/lib/fetchModelData.js`. Khi test backend local, đặt URL đó thành:

```text
http://localhost:8081
```

## Bước tiếp theo

- Xem cấu hình chi tiết trong `configuration.vn.md`.
- Xem hành vi endpoint trong `api-reference.vn.md`.
- Xem các field dữ liệu trong `data-model.vn.md`.
