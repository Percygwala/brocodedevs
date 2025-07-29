import ServiceForm from '../../components/ServiceForm'

const ShopifyForm = () => {
  const fields = [
    {
      name: 'fullName',
      type: 'text' as const,
      label: 'Full Name',
      required: true,
      placeholder: 'Enter your full name'
    },
    {
      name: 'email',
      type: 'email' as const,
      label: 'Email Address',
      required: true,
      placeholder: 'Enter your email address'
    },
    {
      name: 'phone',
      type: 'tel' as const,
      label: 'Phone Number',
      required: true,
      placeholder: 'Enter your phone number'
    },
    {
      name: 'companyName',
      type: 'text' as const,
      label: 'Company/Business Name',
      required: true,
      placeholder: 'Enter your company or business name'
    },
    {
      name: 'businessDescription',
      type: 'textarea' as const,
      label: 'Business Description',
      required: true,
      placeholder: 'Describe your business and what products/services you sell'
    },
    {
      name: 'productType',
      type: 'select' as const,
      label: 'Product Type',
      required: true,
      options: [
        'Physical Products',
        'Digital Products',
        'Services',
        'Mixed (Physical + Digital)',
        'Dropshipping',
        'Print on Demand',
        'Other'
      ]
    },
    {
      name: 'productCount',
      type: 'select' as const,
      label: 'Number of Products',
      required: true,
      options: [
        '1-10 products',
        '11-50 products',
        '51-100 products',
        '100+ products',
        'Not sure yet'
      ]
    },
    {
      name: 'targetMarket',
      type: 'textarea' as const,
      label: 'Target Market',
      required: true,
      placeholder: 'Who is your target audience and market?'
    },
    {
      name: 'paymentMethods',
      type: 'select' as const,
      label: 'Payment Methods Required',
      required: true,
      options: [
        'PayFast only',
        'PayPal only',
        'PayFast + PayPal',
        'Credit cards (Stripe)',
        'All payment methods',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'shippingRequirements',
      type: 'select' as const,
      label: 'Shipping Requirements',
      required: true,
      options: [
        'Local delivery only',
        'National shipping',
        'International shipping',
        'Free shipping',
        'Multiple shipping options',
        'Digital products (no shipping)',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'inventoryManagement',
      type: 'select' as const,
      label: 'Inventory Management',
      required: true,
      options: [
        'Manual inventory tracking',
        'Automatic inventory sync',
        'Low stock notifications',
        'Advanced inventory system',
        'Not needed (digital products)',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'customDomain',
      type: 'text' as const,
      label: 'Preferred Domain Name',
      required: false,
      placeholder: 'e.g., yourstore.co.za'
    },
    {
      name: 'existingStore',
      type: 'text' as const,
      label: 'Existing Store (if any)',
      required: false,
      placeholder: 'Do you have an existing online store?'
    },
    {
      name: 'productImages',
      type: 'select' as const,
      label: 'Product Images',
      required: true,
      options: [
        'I have all product images',
        'I have some product images',
        'I need product photography',
        'I need stock photos',
        'Not sure yet'
      ]
    },
    {
      name: 'productDescriptions',
      type: 'select' as const,
      label: 'Product Descriptions',
      required: true,
      options: [
        'I have all product descriptions',
        'I have some descriptions',
        'I need help writing descriptions',
        'I need content writing service',
        'Not sure yet'
      ]
    },
    {
      name: 'brandingMaterials',
      type: 'file' as const,
      label: 'Branding Materials (Optional)',
      required: false,

    },
    {
      name: 'referenceStores',
      type: 'textarea' as const,
      label: 'Reference Stores (Optional)',
      required: false,
      placeholder: 'Any online stores you like or want to reference'
    },
    {
      name: 'specialFeatures',
      type: 'textarea' as const,
      label: 'Special Features Required',
      required: false,
      placeholder: 'Any special features like subscriptions, memberships, etc.'
    },
    {
      name: 'deadline',
      type: 'select' as const,
      label: 'Project Timeline',
      required: true,
      options: [
        '1-2 weeks',
        '2-3 weeks',
        '3-4 weeks',
        '1-2 months',
        'No specific deadline',
        'Urgent (specify below)'
      ]
    },
    {
      name: 'specialRequirements',
      type: 'textarea' as const,
      label: 'Special Requirements or Notes',
      required: false,
      placeholder: 'Any special requirements, integrations, or additional information'
    }
  ]

  return (
    <ServiceForm
      serviceName="Shopify Stores"
      serviceDescription="Launch your online business with a fully functional Shopify store. Includes payment method integration, custom domain setup, and complete e-commerce functionality."
      fields={fields}
    />
  )
}

export default ShopifyForm 