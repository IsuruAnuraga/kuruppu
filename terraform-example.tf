# Example Terraform configuration for Azure App Service
# This is a reference file - adjust according to your actual Terraform setup

resource "azurerm_linux_web_app" "portfolio" {
  name                = "level2-kuruppu-webapp"  # Your app service name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  service_plan_id     = azurerm_service_plan.main.id

  site_config {
    application_stack {
      node_version = "22-lts"
    }
    
    # Important: Set the startup command
    # Use startup.sh which builds if needed and starts the server
    app_command_line = "bash startup.sh"
    
    # Health check configuration
    health_check_path = "/health.json"
  }

  app_settings = {
    # Azure sets PORT automatically, no need to set it here
    
    # Enable build during deployment (recommended for static sites)
    # Azure will run "npm install" and "npm run build" during deployment
    SCM_DO_BUILD_DURING_DEPLOYMENT = "true"
    
    # Increase container startup time limit (optional, max 1800 seconds)
    # WEBSITES_CONTAINER_START_TIME_LIMIT = "600"
    
    # Enable logging
    WEBSITE_ENABLE_SYNC_UPDATE_SITE = "true"
  }

  # If using container settings
  # site_config {
  #   linux_fx_version = "NODE|22-lts"
  # }
}

