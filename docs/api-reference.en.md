# API Reference

Base URL for local development:

```text
http://localhost:8081
```

Most endpoints require an authenticated session cookie. Public exceptions are `POST /user` and `GET /`.

## Admin

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/admin/current` | Session | Returns the current session user. |
| `POST` | `/admin/login` | Public | Logs in with `login_name` and `password`. |
| `POST` | `/admin/logout` | Session | Destroys the current session. |

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

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/user` | Public | Registers a new user. |
| `GET` | `/user/list` | Session | Lists users with id and names. |
| `GET` | `/user/:id` | Session | Returns one user's profile fields. |

`POST /user` requires `login_name`, `password`, `first_name`, and `last_name`.

## Photos

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/photosOfUser/:id` | Session | Lists photos and populated comments for one user. |
| `POST` | `/photos/new` | Session | Uploads a photo file from `photo` form field. |
| `GET` | `/images/:fileName` | Public static | Serves an image file. |

## Comments

| Method | Path | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/commentsOfPhoto/:photo_id` | Session | Adds a non-empty comment to a photo. |

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

## Common Errors

- `400`: missing fields, duplicate login name, invalid object id, or missing upload file.
- `401`: missing authenticated session.
- `500`: server or database error.
