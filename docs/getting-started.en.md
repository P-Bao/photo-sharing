# Getting Started

This tutorial gets the Photo Sharing app running locally with a React frontend and Express backend.

## Prerequisites

- Node.js installed.
- npm installed for the frontend.
- Yarn installed for the backend, or npm if you choose not to use Yarn.
- MongoDB connection string available.

## 1. Configure Backend Environment

From the repository root:

```powershell
Copy-Item backend\.env.example backend\.env
```

Edit `backend/.env`:

```env
DB_URL=mongodb://...
SESSION_SECRET=replace-with-a-long-random-secret
```

Expected result: the backend can read MongoDB and session settings without exposing secrets in Git.

## 2. Install Backend Dependencies

```powershell
Set-Location backend
yarn install
```

If Yarn is unavailable, use `npm install`.

## 3. Run Backend

```powershell
yarn start
```

Expected result: the server logs that it is listening on port `8081`.

## 4. Install Frontend Dependencies

Open another terminal:

```powershell
Set-Location frontend
npm install
```

## 5. Run Frontend

```powershell
npm start
```

Expected result: the React app opens at `http://localhost:3000`.

## 6. Connect Frontend to Local Backend

The current frontend API client uses a hard-coded base URL in `frontend/src/lib/fetchModelData.js`. For local backend testing, set that URL to:

```text
http://localhost:8081
```

## Next Steps

- Review configuration details in `configuration.en.md`.
- Review endpoint behavior in `api-reference.en.md`.
- Review data fields in `data-model.en.md`.
