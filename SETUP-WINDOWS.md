# Windows / GitHub Desktop Setup

## Put these files into the existing repository

Extract the ZIP. Copy the **contents inside** the `3903-command-center` folder into your local GitHub Desktop repository folder for `3903-command-center`.

The included `README.md` is intended to replace the tiny initial README currently in the repository.

## In GitHub Desktop

1. Review the changed/new files.
2. Commit message suggestion: `chore: initialize Cloudflare React app`
3. Commit to `main` for this initial scaffold.
4. Push origin.

## Optional local test before push

Open PowerShell/Terminal in the repository folder:

```powershell
npm install
npm run dev
```

For a production-style local check:

```powershell
npm run build
npm run preview
```

## Do not add secrets yet

There are intentionally no Google credentials in this starter. We will configure the Google Sheets connection later through the Worker backend and Cloudflare Secrets.
