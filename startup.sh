#!/bin/bash
# Azure startup script - Build and serve the app

# Set PORT if not set
export PORT=${PORT:-8080}

# Install dependencies (production only for speed)
echo "Installing dependencies..."
npm install --production

# Check if dist folder exists, if not, build it
if [ ! -d "dist" ]; then
  echo "Dist folder not found, building application..."
  npm install
  npm run build
fi

# Verify dist folder exists
if [ ! -d "dist" ]; then
  echo "ERROR: dist folder not found after build!"
  exit 1
fi

# Verify health.json exists in dist
if [ ! -f "dist/health.json" ]; then
  echo "WARNING: health.json not found in dist folder"
fi

# Start the server
echo "Starting server on port $PORT..."
exec npm start

