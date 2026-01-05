#!/bin/bash
# Azure startup script - Serve the built app
# Azure builds the app during deployment (SCM_DO_BUILD_DURING_DEPLOYMENT = true)

# Azure sets PORT automatically
export PORT=${PORT:-8080}

# Verify dist folder exists (should exist if build during deployment is enabled)
if [ ! -d "dist" ]; then
  echo "ERROR: dist folder not found!"
  echo "Make sure SCM_DO_BUILD_DURING_DEPLOYMENT is set to 'true' in app settings"
  exit 1
fi

# Start the server
echo "Starting server on port $PORT..."
exec npx serve -s dist -l $PORT

