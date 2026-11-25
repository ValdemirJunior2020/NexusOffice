@echo off
cd /d "%~dp0"
node --version || (echo Install Node.js 20 or newer & pause & exit /b 1)
if not defined PORT set "PORT=8795"
start "" http://127.0.0.1:%PORT%
node server.mjs
pause
