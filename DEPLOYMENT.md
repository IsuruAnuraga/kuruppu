# Azure Web App Deployment Guide

This guide will help you deploy this portfolio application to Azure Web App.

## Prerequisites

1. An Azure account with an active subscription
2. Azure CLI installed (optional, but recommended)
3. GitHub repository set up (already configured as "Kuruppu")

## Deployment Methods

### Method 1: GitHub Actions (Recommended)

1. **Create Azure Web App:**
   ```bash
   az webapp create \
     --resource-group your-resource-group \
     --plan your-app-service-plan \
     --name your-app-name \
     --runtime "NODE:20-lts"
   ```

2. **Get Publish Profile:**
   - Go to Azure Portal → Your Web App → Get publish profile
   - Download the publish profile file

3. **Configure GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add a new secret named `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Paste the entire contents of the publish profile file

4. **Update Workflow File:**
   - Edit `.github/workflows/azure-deploy.yml`
   - Update `AZURE_WEBAPP_NAME` with your actual Azure Web App name

5. **Deploy:**
   - Push to `main` or `master` branch
   - GitHub Actions will automatically build and deploy

### Method 2: Azure Portal (Quick Deploy)

1. **Create Web App:**
   - Go to Azure Portal → Create a resource → Web App
   - Choose Node.js 20 LTS as runtime stack
   - Configure your app name and resource group

2. **Configure Deployment Center:**
   - In your Web App → Deployment Center
   - Select GitHub as source
   - Authorize and select your repository (Kuruppu)
   - Select branch (main/master)
   - Save

3. **Configure Build Settings:**
   - Go to Configuration → General settings
   - Set Startup Command: `npm start`
   - Save

### Method 3: Azure CLI

```bash
# Login to Azure
az login

# Create resource group (if not exists)
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create \
  --name myAppServicePlan \
  --resource-group myResourceGroup \
  --sku FREE

# Create Web App
az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name your-app-name \
  --runtime "NODE:20-lts"

# Configure Node.js version
az webapp config appsettings set \
  --resource-group myResourceGroup \
  --name your-app-name \
  --settings WEBSITE_NODE_DEFAULT_VERSION="20-lts"

# Deploy from local Git
az webapp deployment source config-local-git \
  --resource-group myResourceGroup \
  --name your-app-name

# Get deployment URL and push
git remote add azure <deployment-url>
git push azure main
```

## Important Configuration

### Environment Variables

Azure Web App automatically sets the `PORT` environment variable. The `server.js` file is configured to use this.

### Build Configuration

- **Build Command:** `npm run build`
- **Start Command:** `npm start` (uses server.js which handles PORT correctly)
- **Node Version:** 20.x (LTS)

### Application Settings

In Azure Portal, ensure these settings:
- `WEBSITE_NODE_DEFAULT_VERSION`: `20-lts`
- `SCM_DO_BUILD_DURING_DEPLOYMENT`: `true` (for automatic builds)

## Troubleshooting

1. **Build fails:**
   - Check that all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **App doesn't start:**
   - Check Application Insights or Log Stream in Azure Portal
   - Verify `PORT` environment variable is being used
   - Check that `dist` folder exists after build

3. **404 errors:**
   - Ensure `server.js` is serving from `dist` folder
   - Check that build completed successfully

## Post-Deployment

After deployment, your app will be available at:
`https://your-app-name.azurewebsites.net`

## Continuous Deployment

With GitHub Actions configured, every push to `main`/`master` will automatically:
1. Build the application
2. Deploy to Azure Web App
3. Restart the app with new changes

