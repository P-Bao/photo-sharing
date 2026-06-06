# Cấu hình

Hướng dẫn này mô tả cấu hình cần thiết để chạy Photo Sharing an toàn và ổn định.

## Môi trường backend

Tạo `backend/.env` từ `backend/.env.example`.

| Biến | Bắt buộc | Được dùng bởi | Mô tả |
| --- | --- | --- | --- |
| `DB_URL` | Có | `backend/db/dbConnect.js` | Chuỗi kết nối MongoDB dùng bởi Mongoose. |
| `SESSION_SECRET` | Có | `backend/index.js` | Secret dùng để ký Express session cookie. |

Không commit file `.env` thật. Dùng `.env.example` để mô tả các key bắt buộc.

## Cổng backend

Backend lắng nghe ở cổng `8081` trong `backend/index.js`.

## Session cookies

Backend session cookie được cấu hình với:

- `httpOnly: true`
- `sameSite: "none"`
- `secure: true`
- thời hạn một giờ

Cấu hình này hỗ trợ cookie bảo mật cross-site. Khi test local chỉ với HTTP, có thể cần điều chỉnh các setting này hoặc dùng HTTPS local.

## Frontend API base URL

API base URL hiện đang hard-code trong `frontend/src/lib/fetchModelData.js`.

Khi test backend local, dùng:

```text
http://localhost:8081
```

Với môi trường deploy, dùng URL backend đã deploy.

## Dependency managers

- Frontend: npm, với `frontend/package-lock.json`.
- Backend: Yarn, với `backend/yarn.lock`.
