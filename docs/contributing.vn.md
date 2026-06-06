# Hướng dẫn đóng góp

Hướng dẫn này mô tả cách chuẩn bị thay đổi cho repository Photo Sharing.

## Trước khi chỉnh sửa

- Kiểm tra `git status --short` để biết file nào đã thay đổi.
- Không ghi đè thay đổi không liên quan của người khác.
- Với thay đổi source code ở function, class hoặc method, chạy GitNexus impact analysis trước khi sửa symbol.
- Thay đổi chỉ liên quan tài liệu không cần symbol impact analysis.

## Thay đổi code

- Đi theo pattern hiện có của frontend và backend.
- Giữ phạm vi thay đổi đúng với hành vi được yêu cầu.
- Không commit file `.env` thật hoặc secret.
- Dùng `backend/.env.example` để mô tả biến môi trường bắt buộc.

## Thay đổi tài liệu

- Đặt tài liệu đầy đủ trong `docs/`.
- Giữ root `README.md` là entrypoint tiếng Anh.
- Dùng `.en.md` cho tiếng Anh và `.vn.md` cho tiếng Việt.
- Ưu tiên các bước theo tác vụ, kết quả mong đợi và ghi chú troubleshooting.
- Giữ API reference khớp với các Express route files.

## Kiểm tra

Trước khi commit hoặc bàn giao:

```powershell
git status --short
git check-ignore -v --no-index backend\.env backend\.env.example
```

Chạy GitNexus change detection trước khi commit:

```text
gitnexus_detect_changes(scope: "all")
```
