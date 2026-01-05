# Azure Web App Deployment Guide

## Azure Portal Configuration

### 1. Application Settings
Go to: **Configuration** → **Application settings**

Add/Update these settings:
- **SCM_DO_BUILD_DURING_DEPLOYMENT** = `true` (enables build during deployment)
- **WEBSITE_ENABLE_SYNC_UPDATE_SITE** = `true` (enables logging)

### 2. Startup Command
Go to: **Configuration** → **General settings**

Set **Startup Command** to:
```
bash startup.sh
```

### 3. Health Check (Optional)
Go to: **Configuration** → **General settings**

- **Health check path**: `/health.json` (or leave empty to disable)
- **Health check enabled**: `true` (if using health check)

### 4. Stack Settings
Go to: **Configuration** → **General settings**

- **Stack**: Node.js
- **Node version**: 22 LTS (or 20 LTS)

## Deployment Methods

### Option 1: GitHub Actions (Recommended)
If you have a GitHub Actions workflow, push to your repository and it will deploy automatically.

### Option 2: Local Git Deployment
1. Go to **Deployment Center** in Azure Portal
2. Choose your source (GitHub, Azure Repos, etc.)
3. Configure and deploy

### Option 3: ZIP Deploy
1. Build locally: `npm run build`
2. Create a ZIP file of your project (excluding node_modules and dist)
3. Use Azure CLI or Portal to deploy the ZIP

## Troubleshooting

### Check Logs
1. Go to **Log stream** for live logs
2. Or go to **Monitoring** → **Logs** for detailed logs

### Common Issues
- **503 Error**: App not starting - check logs
- **Health check failing**: Verify `/health.json` is accessible
- **Build failing**: Check that `SCM_DO_BUILD_DURING_DEPLOYMENT = true`

## Files Used
- `startup.sh` - Startup script for Azure
- `server.js` - Server script (used for local dev with `npm start`)
- `package.json` - Contains build and start scripts
- `public/health.json` - Health check endpoint

