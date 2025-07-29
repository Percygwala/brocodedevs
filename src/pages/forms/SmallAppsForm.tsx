import ServiceForm from '../../components/ServiceForm'

const SmallAppsForm = () => {
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
      name: 'appType',
      type: 'select' as const,
      label: 'App Type',
      required: true,
      options: [
        'Android App',
        'iOS App',
        'Web App',
        'Cross-platform App (Android + iOS)',
        'Progressive Web App (PWA)',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'appPurpose',
      type: 'textarea' as const,
      label: 'App Purpose and Functionality',
      required: true,
      placeholder: 'Describe what your app will do and its main features'
    },
    {
      name: 'targetAudience',
      type: 'textarea' as const,
      label: 'Target Audience',
      required: true,
      placeholder: 'Who will be using your app?'
    },
    {
      name: 'appPages',
      type: 'select' as const,
      label: 'Estimated Number of Pages/Screens',
      required: true,
      options: [
        '2-5 pages',
        '6-10 pages',
        '11-15 pages',
        '16-20 pages',
        'More than 20 pages'
      ]
    },
    {
      name: 'keyFeatures',
      type: 'textarea' as const,
      label: 'Key Features Required',
      required: true,
      placeholder: 'List the main features you want in your app'
    },
    {
      name: 'userAuthentication',
      type: 'select' as const,
      label: 'User Authentication',
      required: true,
      options: [
        'No user accounts needed',
        'Simple email/password login',
        'Social media login (Google, Facebook, etc.)',
        'Advanced authentication system',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'database',
      type: 'select' as const,
      label: 'Database Requirements',
      required: true,
      options: [
        'No database needed',
        'Simple data storage',
        'User data and profiles',
        'Complex data relationships',
        'Real-time data synchronization',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'paymentIntegration',
      type: 'select' as const,
      label: 'Payment Integration',
      required: true,
      options: [
        'No payments needed',
        'PayFast integration',
        'PayPal integration',
        'Credit card processing',
        'Multiple payment methods',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'appStorePublishing',
      type: 'select' as const,
      label: 'App Store Publishing',
      required: true,
      options: [
        'Google Play Store only',
        'Apple App Store only',
        'Both stores',
        'Web app only (no stores)',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'existingBranding',
      type: 'file' as const,
      label: 'Existing Branding Materials (Optional)',
      required: false
    },
    {
      name: 'referenceApps',
      type: 'textarea' as const,
      label: 'Reference Apps (Optional)',
      required: false,
      placeholder: 'Any existing apps that are similar to what you want'
    },
    {
      name: 'deadline',
      type: 'select' as const,
      label: 'Project Timeline',
      required: true,
      options: [
        '1-2 weeks',
        '2-4 weeks',
        '1-2 months',
        '2-3 months',
        'No specific deadline',
        'Urgent (specify below)'
      ]
    },
    {
      name: 'budget',
      type: 'select' as const,
      label: 'Budget Range',
      required: true,
      options: [
        'R2,000 - R5,000',
        'R5,000 - R10,000',
        'R10,000 - R20,000',
        'R20,000+',
        'Need a quote'
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
      serviceName="Small Apps Development"
      serviceDescription="Develop custom applications for Android, iOS, or web platforms. Includes 2-10 page apps, Play Store/App Store account setup, and domain configuration."
      fields={fields}
    />
  )
}

export default SmallAppsForm 