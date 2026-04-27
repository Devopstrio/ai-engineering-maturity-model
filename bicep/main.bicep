// AI-EMM: Enterprise Landing Zone Bicep Template
targetScope = 'resourceGroup'

param location string = resourceGroup().location
param environment string = 'prod'
param projectName string = 'ai-emm'

// 1. Storage Backend (Cosmos DB)
module cosmos './modules/cosmos.bicep' = {
  name: 'cosmosDeploy'
  params: {
    location: location
    dbName: '${projectName}-${environment}-db'
  }
}

// 2. Monitoring & Logging
module monitoring './modules/monitor.bicep' = {
  name: 'monitorDeploy'
  params: {
    location: location
    workspaceName: '${projectName}-${environment}-law'
  }
}

// 3. App Service (API & Frontend)
module compute './modules/appservice.bicep' = {
  name: 'computeDeploy'
  params: {
    location: location
    appServiceName: '${projectName}-${environment}-api'
    planName: '${projectName}-${environment}-plan'
    aiInstrumentationKey: monitoring.outputs.instrumentationKey
  }
}

output portalUrl string = compute.outputs.appServiceUrl
