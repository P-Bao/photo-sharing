# API Reference

Base URL khi phát triển local:

```text
http://localhost:8081
```

Hầu hết endpoint yêu cầu session cookie đã đăng nhập. Ngoại lệ công khai là `POST /user` và `GET /`.

## Admin

| Method | Path | Auth | Mô tả |
| --- | --- | --- | --- |
| `GET` | `/admin/current` | Session | Trả về user trong session hiện tại. |
| `POST` | `/admin/login` | Public | Đăng nhập bằng `login_name` và `password`. |
| `POST` | `/admin/logout` | Session | Hủy session hiện tại. |

### `POST /admin/login`

Request:

```json
{
  "login_name": "user",
  "password": "password"
}
```

Success response:

```json
{
  "_id": "user-id",
  "login_name": "user",
  "first_name": "First",
  "last_name": "Last"
}
```

## Users

| Method | Path | Auth | Mô tả |
| --- | --- | --- | --- |
| `POST` | `/user` | Public | Đăng ký user mới. |
| `GET` | `/user/list` | Session | Liệt kê users với id và tên. |
| `GET` | `/user/:id` | Session | Trả về các field profile của một user. |

`POST /user` yêu cầu `login_name`, `password`, `first_name` và `last_name`.

## Photos

| Method | Path | Auth | Mô tả |
| --- | --- | --- | --- |
| `GET` | `/photosOfUser/:id` | Session | Liệt kê ảnh và comments đã populate của một user. |
| `POST` | `/photos/new` | Session | Upload file ảnh từ form field `photo`. |
| `GET` | `/images/:fileName` | Public static | Phục vụ file ảnh. |

## Comments

| Method | Path | Auth | Mô tả |
| --- | --- | --- | --- |
| `POST` | `/commentsOfPhoto/:photo_id` | Session | Thêm comment không rỗng vào một ảnh. |

Request:

```json
{
  "comment": "Nice photo"
}
```

Success response:

```json
{
  "message": "Comment added."
}
```

## Lỗi thường gặp

- `400`: thiếu field, trùng login name, object id không hợp lệ hoặc thiếu file upload.
- `401`: thiếu session đã đăng nhập.
- `500`: lỗi server hoặc database.
