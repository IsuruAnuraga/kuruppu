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
    app_command_line = "npm start"
    
    # Health check configuration
    health_check_path = "/health.json"
  }

  app_settings = {
    # Ensure PORT is set (Azure sets this automatically, but you can override)
    PORT = "8080"
    
    # Disable build during deployment since we build in GitHub Actions
    SCM_DO_BUILD_DURING_DEPLOYMENT = "false"
    
    # Enable logging
    WEBSITE_ENABLE_SYNC_UPDATE_SITE = "true"
  }

  # If using container settings
  # site_config {
  #   linux_fx_version = "NODE|22-lts"
  # }
}

