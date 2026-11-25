# NexusOffice — v0.1 local preview

One workspace. Endless possibilities.

Run `npm test` then `npm start` with Node.js 20+. Open http://127.0.0.1:8795. Windows: START-LOCAL.bat. Override the port in PowerShell with `$env:PORT='8796'` before running `npm start`. No dependencies, AI, paid APIs or cloud calls are needed for this preview. Notes, Tasks, Contacts and Calendar use local browser storage; no authentication or cloud sync. Writer, Sheets and Slides now have lightweight native browser editors with local saving and export (HTML/TXT, CSV, HTML respectively; Writer and Slides also print to PDF). No DOCX/XLSX/PPTX compatibility yet. Other modules are clearly marked pending. Never enter sensitive data in this preview.

## Integration roadmap
- SignuDoc: https://github.com/NYLLON-SOFTWARE/SignuDoc (MIT). Preserve notices and authoritative signature records in a transactional database. No signature engine integrated yet.
- ElixirOffice was replaced by dependency-free browser editors to avoid a dedicated server. Full Office file interoperability remains a future task.
- Google Sheets for business metadata, Drive for private files, with server-side authorization and tenant isolation. No credentials or spreadsheet IDs in public code. Not yet connected.
- PDF, Forms and Convert: implement browser-based tools with reviewed libraries.
- Netlify is the intended host, but static publish config is only preparation. Do not deploy or link a site until owner approves local testing. No paid services authorized. Production requires secure authentication, persistence and a separately validated signing backend.

## Craft engine integration (v0.3)
Run npm run setup:craft once to download four pinned upstream static release ZIPs (approximately 82 MB total), verify SHA-256 and extract under public/craft. Windows uses built-in PowerShell Expand-Archive; Linux/macOS require unzip. No Rust, AI or extra server. Run npm test and npm start (port 8795). Launch editors from the dashboard. The original engine UI opens in a separate tab with upstream branding intact; original licenses and notices must be retained. Basic editors remain accessible. No Google Drive sync yet. Actual Office file fidelity must be tested on representative files. Do not deploy; Netlify configuration is unchanged and does not download these assets yet. A later approved cloud build must explicitly package the engines and review hosting asset limits, license notices and runtime behavior.