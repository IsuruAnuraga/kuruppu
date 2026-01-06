@echo off
REM Script to set up GitHub repository for Kuruppu (Windows)

echo Setting up GitHub repository 'Kuruppu'...

REM Check if git is initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    git branch -M main
)

REM Check if remote already exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo Remote 'origin' already exists. Updating...
    git remote set-url origin https://github.com/IsuruAnuraga/Kuruppu.git
) else (
    echo Adding remote 'origin'...
    git remote add origin https://github.com/IsuruAnuraga/Kuruppu.git
)

echo.
echo GitHub repository configured!
echo.
echo Next steps:
echo 1. Create the repository 'Kuruppu' on GitHub (https://github.com/new)
echo 2. Run: git add .
echo 3. Run: git commit -m "Initial commit"
echo 4. Run: git push -u origin main
echo.
echo To verify remote:
echo   git remote -v

pause

