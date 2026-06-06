# Backend Quick Reference

The backend is an Express API connected to MongoDB. It serves authentication, users, photos, comments, uploads, and static image files.

## Run

```powershell
Copy-Item .env.example .env
yarn install
yarn start
```

Required environment variables:

```env
DB_URL=
SESSION_SECRET=
```

The API listens on port `8081`.

## Full Documentation

- Backend setup: `../docs/getting-started.en.md`
- Configuration: `../docs/configuration.en.md`
- API reference: `../docs/api-reference.en.md`
- Data model: `../docs/data-model.en.md`
- Development workflow: `../docs/development.en.md`
