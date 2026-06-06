# Contributing Guide

This guide describes how to prepare changes for the Photo Sharing repository.

## Before Editing

- Check `git status --short` so you know what is already modified.
- Do not overwrite unrelated user changes.
- For source code symbol changes, run GitNexus impact analysis before editing the function, class, or method.
- Documentation-only changes do not require symbol impact analysis.

## Code Changes

- Follow existing frontend and backend patterns.
- Keep changes scoped to the requested behavior.
- Do not commit real `.env` files or secrets.
- Use `backend/.env.example` to document required environment variables.

## Documentation Changes

- Put full documentation in `docs/`.
- Keep root `README.md` as the English entrypoint.
- Use `.en.md` for English and `.vn.md` for Vietnamese.
- Prefer task-oriented steps, expected results, and troubleshooting notes.
- Keep API reference aligned with the Express route files.

## Verification

Before commit or handoff:

```powershell
git status --short
git check-ignore -v --no-index backend\.env backend\.env.example
```

Run GitNexus change detection before committing:

```text
gitnexus_detect_changes(scope: "all")
```
