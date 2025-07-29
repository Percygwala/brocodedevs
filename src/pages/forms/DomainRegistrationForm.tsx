import ServiceForm from '../../components/ServiceForm'

const DomainRegistrationForm = () => {
  const fields = [
    { name: 'fullName', type: 'text' as const, label: 'Full Name', required: true, placeholder: 'Enter your full name' },
    { name: 'email', type: 'email' as const, label: 'Email Address', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', type: 'tel' as const, label: 'Phone Number', required: true, placeholder: 'Enter your phone number' },
    { name: 'companyName', type: 'text' as const, label: 'Company/Business Name', required: true, placeholder: 'Enter your company or business name' },
    { name: 'domainName', type: 'text' as const, label: 'Preferred Domain Name', required: true, placeholder: 'e.g., yourbusiness.co.za' },
    { name: 'alternativeDomains', type: 'textarea' as const, label: 'Alternative Domain Names (Optional)', required: false, placeholder: 'List any alternative domains you would accept' },
    { name: 'domainPurpose', type: 'select' as const, label: 'Domain Purpose', required: true, options: ['Business Website', 'Personal Website', 'Email Only', 'Landing Page', 'Other'] },
    { name: 'hostingNeeded', type: 'select' as const, label: 'Do you need hosting?', required: true, options: ['No, just domain', 'Yes, need hosting', 'Not sure'] },
    { name: 'specialRequirements', type: 'textarea' as const, label: 'Special Requirements or Notes', required: false, placeholder: 'Any special requirements, preferences, or additional information' }
  ]

  return (
    <ServiceForm
      serviceName="Domain Registration"
      serviceDescription="Secure your online presence with Google domain registration. Get the perfect domain name for your business with reliable hosting and management services."
      fields={fields}
    />
  )
}

export default DomainRegistrationForm 