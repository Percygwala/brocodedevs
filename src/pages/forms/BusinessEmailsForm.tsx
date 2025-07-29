import ServiceForm from '../../components/ServiceForm'

const BusinessEmailsForm = () => {
  const fields = [
    { name: 'fullName', type: 'text' as const, label: 'Full Name', required: true, placeholder: 'Enter your full name' },
    { name: 'email', type: 'email' as const, label: 'Email Address', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', type: 'tel' as const, label: 'Phone Number', required: true, placeholder: 'Enter your phone number' },
    { name: 'companyName', type: 'text' as const, label: 'Company/Business Name', required: true, placeholder: 'Enter your company or business name' },
    { name: 'domainName', type: 'text' as const, label: 'Preferred Domain Name', required: true, placeholder: 'e.g., yourbusiness.co.za' },
    { name: 'numberOfEmails', type: 'select' as const, label: 'Number of Email Accounts', required: true, options: ['1', '2-5', '6-10', '11-20', 'More than 20'] },
    { name: 'emailNames', type: 'textarea' as const, label: 'Desired Email Addresses', required: true, placeholder: 'List the email addresses you want (e.g., info@, sales@, yourname@, etc.)' },
    { name: 'currentProvider', type: 'text' as const, label: 'Current Email Provider (if any)', required: false, placeholder: 'e.g., Gmail, Outlook, Zoho, etc.' },
    { name: 'migrationNeeded', type: 'select' as const, label: 'Email Migration Needed?', required: true, options: ['No', 'Yes, migrate from old provider', 'Not sure'] },
    { name: 'specialRequirements', type: 'textarea' as const, label: 'Special Requirements or Notes', required: false, placeholder: 'Any special requirements, preferences, or additional information' }
  ]

  return (
    <ServiceForm
      serviceName="Business Emails"
      serviceDescription="Set up professional business email addresses using Gmail for Business. Create a professional image with custom domain email addresses that match your brand."
      fields={fields}
    />
  )
}

export default BusinessEmailsForm 