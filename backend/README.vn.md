# Backend Quick Reference

Backend là Express API kết nối MongoDB. Phần này phục vụ authentication, users, photos, comments, uploads và file ảnh tĩnh.

## Chạy

```powershell
Copy-Item .env.example .env
yarn install
yarn start
```

Các biến môi trường bắt buộc:

```env
DB_URL=
SESSION_SECRET=
```

API lắng nghe ở cổng `8081`.

## Tài liệu đầy đủ

- Cài đặt backend: `../docs/getting-started.vn.md`
- Cấu hình: `../docs/configuration.vn.md`
- API reference: `../docs/api-reference.vn.md`
- Data model: `../docs/data-model.vn.md`
- Quy trình phát triển: `../docs/development.vn.md`
