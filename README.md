# NexusOffice — v0.1 local preview

One workspace. Endless possibilities.

Run `npm test` then `npm start` with Node.js 20+. Open http://127.0.0.1:8795. Windows: START-LOCAL.bat. Override the port in PowerShell with `$env:PORT='8796'` before running `npm start`. No dependencies, AI, paid APIs or cloud calls are needed for this preview. Notes, Tasks, Contacts and Calendar use local browser storage; no authentication or cloud sync. Other modules are clearly marked pending. Never enter sensitive data in this preview.

## Integration roadmap
- SignuDoc: https://github.com/NYLLON-SOFTWARE/SignuDoc (MIT). Preserve notices and authoritative signature records in a transactional database. No signature engine integrated yet.
- ElixirOffice: https://github.com/leag1234/elixiroffice (AGPLv3). Verify browser build, hosting resource requirements, corresponding source obligations and disable AI. No editor engine integrated yet.
- Google Sheets for business metadata, Drive for private files, with server-side authorization and tenant isolation. No credentials or spreadsheet IDs in public code. Not yet connected.
- PDF, Forms and Convert: implement browser-based tools with reviewed libraries.
- Netlify is the intended host, but static publish config is only preparation. Do not deploy or link a site until owner approves local testing. No paid services authorized. Production requires secure authentication, persistence and a separately validated signing backend.
