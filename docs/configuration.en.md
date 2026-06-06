# Configuration

This guide describes the configuration required to run Photo Sharing safely and predictably.

## Backend Environment

Create `backend/.env` from `backend/.env.example`.

| Variable | Required | Used by | Description |
| --- | --- | --- | --- |
| `DB_URL` | Yes | `backend/db/dbConnect.js` | MongoDB connection string used by Mongoose. |
| `SESSION_SECRET` | Yes | `backend/index.js` | Secret used to sign Express session cookies. |

Do not commit real `.env` files. Use `.env.example` to document required keys.

## Backend Port

The backend listens on port `8081` in `backend/index.js`.

## Session Cookies

The backend session cookie is configured with:

- `httpOnly: true`
- `sameSite: "none"`
- `secure: true`
- one-hour max age

This supports cross-site secure cookies. For local HTTP-only testing, these settings may need adjustment or a HTTPS local setup.

## Frontend API Base URL

The API base URL is currently hard-coded in `frontend/src/lib/fetchModelData.js`.

For local backend testing, use:

```text
http://localhost:8081
```

For deployed environments, use the deployed backend URL.

## Dependency Managers

- Frontend: npm, with `frontend/package-lock.json`.
- Backend: Yarn, with `backend/yarn.lock`.
