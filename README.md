# Photo Sharing

Photo Sharing is a full-stack web application for browsing users, viewing photo albums, posting comments, uploading photos, and managing login sessions.

## Documentation

The complete documentation set is in `docs/`. It follows The Good Docs Project template style and the Diataxis documentation structure.

- Start here: `docs/index.en.md`
- Vietnamese documentation: `docs/index.vn.md`
- Getting started: `docs/getting-started.en.md`
- API reference: `docs/api-reference.en.md`
- Architecture: `docs/architecture.en.md`

## Quick Start

1. Configure the backend environment:

   ```powershell
   Copy-Item backend\.env.example backend\.env
   ```

2. Set `DB_URL` and `SESSION_SECRET` in `backend/.env`.

3. Install and run the backend:

   ```powershell
   Set-Location backend
   yarn install
   yarn start
   ```

4. Install and run the frontend:

   ```powershell
   Set-Location ..\frontend
   npm install
   npm start
   ```

The backend listens on port `8081`. The frontend runs at `http://localhost:3000`.

## Project Layout

```text
backend/     Express API, MongoDB models, routes, and image storage
frontend/    React UI and browser-side API client
docs/        Full English and Vietnamese documentation
```

## More

- Backend quick reference: `backend/README.en.md`
- Frontend quick reference: `frontend/README.en.md`
- Vietnamese root README: `README.vn.md`
