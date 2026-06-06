# Data Model Reference

Backend dùng Mongoose models để lưu dữ liệu trong MongoDB.

## `Users`

| Field | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `login_name` | String | Có | Định danh đăng nhập duy nhất. |
| `password` | String | Có | Code hiện tại lưu plain text. |
| `first_name` | String | Không trong schema, route đăng ký yêu cầu | Tên. |
| `last_name` | String | Không trong schema, route đăng ký yêu cầu | Họ. |
| `location` | String | Không | Vị trí trong profile. |
| `description` | String | Không | Mô tả profile. |
| `occupation` | String | Không | Nghề nghiệp. |

## `Photos`

| Field | Kiểu | Bắt buộc | Ghi chú |
| --- | --- | --- | --- |
| `file_name` | String | Không | Tên file ảnh trong `backend/images`. |
| `date_time` | Date | Không | Mặc định là thời điểm hiện tại. |
| `user_id` | ObjectId | Không | User sở hữu ảnh. |
| `comments` | Comment[] | Không | Comments nhúng trong photo. |

## Comment

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `comment` | String | Nội dung bình luận. |
| `date_time` | Date | Mặc định là thời điểm hiện tại. |
| `user_id` | ObjectId | User viết bình luận. |

## `SchemaInfo`

| Field | Kiểu | Ghi chú |
| --- | --- | --- |
| `version` | String | Mốc version seed/schema. |
| `load_date_time` | Date | Mặc định là thời điểm hiện tại. |

## Ghi chú bảo mật

Model và login route hiện tại lưu password dạng plain text. Đây là giới hạn cần xử lý trước khi dùng production.
