@echo off
cd /d "%~dp0"
node --version || (echo Install Node.js 20 or newer & pause & exit /b 1)
start "" http://127.0.0.1:8788
node server.mjs
pause
