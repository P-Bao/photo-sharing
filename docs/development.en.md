# Development Guide

Use this guide for day-to-day development tasks.

## Common Commands

Frontend:

```powershell
Set-Location frontend
npm start
npm test
npm run build
```

Backend:

```powershell
Set-Location backend
yarn start
```

## Local Workflow

1. Start MongoDB or confirm the remote MongoDB URL is reachable.
2. Start the backend on port `8081`.
3. Start the frontend on port `3000`.
4. Confirm the frontend API base URL points to the intended backend.
5. Test login, user list, photo list, comments, and upload.

## Documentation Workflow

- Keep `README.md` short and link to `docs/`.
- Add English docs as `.en.md`.
- Add Vietnamese docs as `.vn.md`.
- Keep paired English and Vietnamese files structurally aligned.

## Troubleshooting

- Backend does not start: check `backend/.env`, dependency installation, and port `8081`.
- MongoDB connection fails: verify `DB_URL`.
- Frontend cannot fetch data: verify API base URL and backend CORS/session behavior.
- Login redirects unexpectedly: check session cookie settings and whether requests include credentials.
- Upload fails: confirm the form field is named `photo` and `backend/images` is writable.
