import ServiceForm from '../../components/ServiceForm'

const DigitalAdvertisingForm = () => {
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
      name: 'adType',
      type: 'select' as const,
      label: 'Advertising Platform',
      required: true,
      options: [
        'Facebook',
        'Instagram',
        'TikTok',
        'YouTube',
        'Google Ads',
        'Other (specify below)'
      ]
    },
    {
      name: 'adObjective',
      type: 'select' as const,
      label: 'Advertising Objective',
      required: true,
      options: [
        'Brand Awareness',
        'Website Traffic',
        'Lead Generation',
        'Sales/Conversions',
        'App Installs',
        'Video Views',
        'Other (specify below)'
      ]
    },
    {
      name: 'targetAudience',
      type: 'textarea' as const,
      label: 'Target Audience',
      required: true,
      placeholder: 'Describe your target audience (age, location, interests, etc.)'
    },
    {
      name: 'adBudget',
      type: 'text' as const,
      label: 'Advertising Budget (ZAR)',
      required: true,
      placeholder: 'e.g., R800, R2000, etc.'
    },
    {
      name: 'adDuration',
      type: 'select' as const,
      label: 'Campaign Duration',
      required: true,
      options: [
        '1 week',
        '2 weeks',
        '1 month',
        'Ongoing',
        'Other (specify below)'
      ]
    },
    {
      name: 'adContent',
      type: 'textarea' as const,
      label: 'Ad Content/Message',
      required: true,
      placeholder: 'Describe your ad message or content (or upload below)'
    },
    {
      name: 'adMedia',
      type: 'file' as const,
      label: 'Ad Media (Images/Video, Optional)',
      required: false,
      accept: '.jpg,.jpeg,.png,.mp4,.mov,.avi,.pdf'
    },
    {
      name: 'websiteOrLanding',
      type: 'text' as const,
      label: 'Website/Landing Page URL',
      required: false,
      placeholder: 'Where should the ad send people? (optional)'
    },
    {
      name: 'specialRequirements',
      type: 'textarea' as const,
      label: 'Special Requirements or Notes',
      required: false,
      placeholder: 'Any special requirements, preferences, or additional information'
    }
  ]

  return (
    <ServiceForm
      serviceName="Digital Advertising"
      serviceDescription="Reach your target audience with strategic digital advertising campaigns on Facebook, Instagram, TikTok, and YouTube. Drive traffic, increase brand awareness, and generate leads."
      fields={fields}
    />
  )
}

export default DigitalAdvertisingForm 