# Data Model Reference

The backend uses Mongoose models for MongoDB persistence.

## `Users`

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `login_name` | String | Yes | Unique login identifier. |
| `password` | String | Yes | Stored as plain text in current code. |
| `first_name` | String | No in schema, required by registration route | User first name. |
| `last_name` | String | No in schema, required by registration route | User last name. |
| `location` | String | No | Profile location. |
| `description` | String | No | Profile description. |
| `occupation` | String | No | Profile occupation. |

## `Photos`

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `file_name` | String | No | Stored image file name under `backend/images`. |
| `date_time` | Date | No | Defaults to current time. |
| `user_id` | ObjectId | No | User who owns the photo. |
| `comments` | Comment[] | No | Embedded comments. |

## Comment

| Field | Type | Notes |
| --- | --- | --- |
| `comment` | String | Comment text. |
| `date_time` | Date | Defaults to current time. |
| `user_id` | ObjectId | User who wrote the comment. |

## `SchemaInfo`

| Field | Type | Notes |
| --- | --- | --- |
| `version` | String | Seed/schema version marker. |
| `load_date_time` | Date | Defaults to current time. |

## Security Note

Passwords are stored as plain text in the current model and login route. Treat this as a known implementation limitation before production use.
