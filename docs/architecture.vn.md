# Kiến trúc

Photo Sharing được chia thành browser frontend, Express API và MongoDB persistence.

## Tổng quan hệ thống

```text
Browser
  -> React frontend
  -> fetchModel API client
  -> Express backend
  -> Mongoose models
  -> MongoDB
```

Ảnh mẫu và ảnh upload được phục vụ từ `backend/images` thông qua static route `/images`.

## Frontend

Frontend là ứng dụng Create React App. Các khu vực chính:

- `LoginRegister`: form đăng nhập và đăng ký.
- `TopBar`: user hiện tại, đăng xuất và upload.
- `UserList`: điều hướng giữa các user.
- `UserDetail`: thông tin profile của một user.
- `UserPhotos`: ảnh và bình luận của một user.

Các trang được bảo vệ chuyển về `/login` khi chưa tải được user đã đăng nhập.

## Backend

Backend bắt đầu từ `backend/index.js`. Phần này:

- kết nối MongoDB,
- bật CORS với credentials,
- parse JSON body,
- hỗ trợ file upload,
- phục vụ ảnh tĩnh,
- tạo Express session,
- bảo vệ route bằng `requireLogin`.

Các route `/admin` được đăng ký trước `requireLogin` để login và current-session check hoạt động. Các route ứng dụng khác yêu cầu session đã đăng nhập, ngoại trừ đăng ký user công khai.

## Luồng authentication

1. Frontend gọi `POST /admin/login`.
2. Backend kiểm tra `login_name` và `password`.
3. Backend lưu một object user rút gọn vào `request.session.user`.
4. Các request sau gửi credentials để dùng session cookie.
5. Protected route phía frontend dùng `GET /admin/current` để xác định user đã đăng nhập hay chưa.

## Luồng upload

1. Frontend gửi file dạng form data đến `POST /photos/new`.
2. Backend kiểm tra `request.files.photo` tồn tại.
3. File được chuyển vào `backend/images`.
4. Một document `Photos` được tạo với tên file đã sinh và current user id.
