# Architecture

Photo Sharing is split into a browser frontend, an Express API, and MongoDB persistence.

## System Overview

```text
Browser
  -> React frontend
  -> fetchModel API client
  -> Express backend
  -> Mongoose models
  -> MongoDB
```

Uploaded and sample images are served from `backend/images` through the `/images` static route.

## Frontend

The frontend is a Create React App application. Its main areas are:

- `LoginRegister`: authentication and registration form.
- `TopBar`: current user, logout, and upload control.
- `UserList`: navigation between users.
- `UserDetail`: profile details for one user.
- `UserPhotos`: photos and comments for one user.

Protected pages redirect to `/login` when no authenticated user is loaded.

## Backend

The backend starts in `backend/index.js`. It:

- connects to MongoDB,
- enables CORS with credentials,
- parses JSON bodies,
- supports file uploads,
- serves static images,
- creates an Express session,
- protects routes with `requireLogin`.

The `/admin` routes are registered before `requireLogin` so login and current-session checks can work. Other application routes require an authenticated session, except public user registration.

## Authentication Flow

1. The frontend calls `POST /admin/login`.
2. The backend verifies `login_name` and `password`.
3. The backend stores a limited user object in `request.session.user`.
4. Later requests include credentials so the session cookie can be used.
5. Protected frontend routes use `GET /admin/current` to decide whether a user is logged in.

## Upload Flow

1. The frontend sends a file as form data to `POST /photos/new`.
2. The backend validates that `request.files.photo` exists.
3. The file is moved into `backend/images`.
4. A `Photos` document is created with the generated file name and current user id.
