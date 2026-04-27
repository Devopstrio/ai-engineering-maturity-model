# Devopstrio AI-EMM: Production AKS Cluster Module

resource "azurerm_kubernetes_cluster" "aks" {
  name                = "aks-ai-emm-prod"
  location            = var.location
  resource_group_name = var.resource_group_name
  dns_prefix          = "aiemm"
  kubernetes_version  = "1.27"

  default_node_pool {
    name                = "systempool"
    node_count          = 2
    vm_size             = "Standard_DS2_v2"
    vnet_subnet_id      = var.aks_subnet_id
    enable_auto_scaling = true
    min_count           = 2
    max_count           = 5
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin    = "azure"
    load_balancer_sku = "standard"
    outbound_type     = "loadBalancer"
  }

  # Security Hardening
  api_server_access_profile {
    authorized_ip_ranges = var.admin_ip_ranges
  }

  role_based_access_control_enabled = true

  azure_active_directory_role_based_access_control {
    managed                = true
    admin_group_object_ids = [var.admin_group_id]
    azure_rbac_enabled     = true
  }

  tags = {
    Portfolio = "Devopstrio"
    Service   = "AI-EMM"
  }
}

output "kubernetes_cluster_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "client_certificate" {
  value     = azurerm_kubernetes_cluster.aks.kube_config.0.client_certificate
  sensitive = true
}
