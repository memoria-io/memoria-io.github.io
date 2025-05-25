<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Product Catalog</p>
          <p class="text-[#5c738a] text-sm font-normal leading-normal">
            Browse our complete catalog of innovative solutions designed to transform your business.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div v-for="product in products" :key="product.id" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-[#101418] text-xl font-bold mb-2">{{ product.title }}</h2>
          <div class="prose dark:prose-invert max-w-none text-[#5c738a] mb-4" v-html="renderMarkdown(product.content)"></div>
          <div class="flex justify-end">
            <button 
              @click="selectProduct(product)"
              class="inline-flex items-center text-[#3f7fbf] hover:text-[#2d5d8f] font-medium"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      <!-- Product Details Modal -->
      <div v-if="selectedProduct" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-[#101418] text-2xl font-bold">{{ selectedProduct.title }}</h2>
            <button 
              @click="selectedProduct = null"
              class="text-[#5c738a] hover:text-[#101418]"
            >
              ✕
            </button>
          </div>
          <div class="prose dark:prose-invert max-w-none" v-html="renderMarkdown(selectedProduct.content)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

interface Product {
  id: string;
  title: string;
  content: string;
}

const products = ref<Product[]>([
  {
    id: '1',
    title: 'Enterprise Analytics Suite',
    content: `Our flagship analytics platform that helps enterprises make data-driven decisions:

- Real-time data processing
- Advanced visualization tools
- AI-powered insights
- Custom reporting
- Seamless integration with existing systems

### Key Features

Our Enterprise Analytics Suite provides comprehensive data analysis capabilities:

- **Real-time Processing**: Process and analyze data as it arrives
- **Interactive Dashboards**: Create custom visualizations and reports
- **AI Integration**: Leverage machine learning for predictive analytics
- **Data Integration**: Connect with multiple data sources seamlessly
- **Automated Reporting**: Schedule and automate report generation
- **Role-based Access**: Secure data access control
- **API Access**: Integrate with your existing systems`
  },
  {
    id: '2',
    title: 'Cloud Operations Manager',
    content: `Streamline your cloud infrastructure management:

- Multi-cloud support
- Automated scaling
- Cost optimization
- Security monitoring
- Performance analytics

### Detailed Features

Our Cloud Operations Manager helps you maintain optimal cloud performance:

- **Multi-cloud Management**: Unified control across major cloud providers
- **Auto-scaling**: Dynamic resource allocation based on demand
- **Cost Analysis**: Real-time cost tracking and optimization
- **Security Suite**: Comprehensive security monitoring and alerts
- **Performance Metrics**: Detailed analytics and reporting
- **Disaster Recovery**: Automated backup and recovery solutions
- **Resource Planning**: Capacity planning and forecasting`
  },
  {
    id: '3',
    title: 'Digital Workflow Automation',
    content: `Transform your business processes with intelligent automation:

- Visual workflow designer
- Smart document processing
- Integration capabilities
- Process analytics
- Mobile accessibility

### Advanced Capabilities

Our Workflow Automation platform streamlines your operations:

- **Visual Process Builder**: Intuitive drag-and-drop interface
- **Document AI**: Intelligent document processing and data extraction
- **Process Mining**: Identify optimization opportunities
- **Mobile Support**: Access workflows on any device
- **Integration Hub**: Connect with popular business tools
- **Analytics Dashboard**: Track process performance
- **Compliance Tracking**: Ensure regulatory compliance`
  },
  {
    id: '4',
    title: 'Security Intelligence Platform',
    content: `Enterprise-grade security solution for modern businesses:

- Threat detection and response
- Compliance management
- Identity protection
- Security analytics
- 24/7 monitoring

### Security Features

Our Security Intelligence Platform provides comprehensive protection:

- **Real-time Monitoring**: Continuous threat detection
- **AI-powered Analysis**: Advanced threat intelligence
- **Compliance Tools**: Meet regulatory requirements
- **Identity Management**: Secure access control
- **Incident Response**: Automated threat response
- **Security Reporting**: Detailed security analytics
- **Zero Trust Framework**: Enhanced security model`
  }
])

const selectedProduct = ref<Product | null>(null)

const renderMarkdown = (content: string) => {
  return marked(content)
}

const selectProduct = (product: Product) => {
  selectedProduct.value = product
}
</script>

<style>
.prose {
  max-width: none;
}
</style> 