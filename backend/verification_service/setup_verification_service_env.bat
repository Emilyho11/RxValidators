@echo off
@REM Created for Windows

REM Check if running with administrative privileges
net session >nul 2>&1
if %errorLevel% == 0 (
    echo Running with administrative privileges...
) else (
    echo Running without administrative privileges...
    echo Requesting elevation...
    runas /user:Administrator "%~dpnx0"
    exit /b
)

cd /d "%~dp0"
python -m venv ./.venv
call .venv/Scripts/activate.bat

python -m pip install --upgrade pip

@REM Install Dependencies
@REM Check if contains argument "--skip-dependencies"
if "%1"=="--skip-dependencies" (
    echo Skipping dependencies installation...
) else (
    echo Installing Dependencies...

    # pip install -r requirements.txt
    python -m pip install flask
    python -m pip install flask_cors
    python -m pip install pandas
    python -m pip install tqdm
    python -m pip install scrapy
    python -m pip install selenium
    python -m pip install bs4
    python -m pip install asyncio
    python -m pip install scrapyscript
)
@REM echo "STARTING FLASK SERVER"
@REM python -m flask --app ./src/main run
echo SETUP COMPLETED
echo To start the server, run the following command:
echo Run as Administrator (Permissions Required due to Windows blocking scrapy on venv "WinError 5")
echo python -m flask --app ./src/main run
pause