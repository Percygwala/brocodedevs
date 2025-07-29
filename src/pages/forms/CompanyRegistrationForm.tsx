import ServiceForm from '../../components/ServiceForm'

const CompanyRegistrationForm = () => {
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
      label: 'Proposed Company Name',
      required: true,
      placeholder: 'Enter your proposed company name'
    },
    {
      name: 'businessType',
      type: 'select' as const,
      label: 'Business Type',
      required: true,
      options: [
        'Private Company (Pty) Ltd',
        'Personal Liability Company (Inc)',
        'Public Company (Ltd)',
        'Non-Profit Company (NPC)',
        'Close Corporation (CC)'
      ]
    },
    {
      name: 'businessDescription',
      type: 'textarea' as const,
      label: 'Business Description',
      required: true,
      placeholder: 'Describe your business activities'
    },
    {
      name: 'directors',
      type: 'textarea' as const,
      label: 'Directors/Shareholders Information',
      required: true,
      placeholder: 'List all directors and shareholders with their ID numbers'
    },
    {
      name: 'registeredAddress',
      type: 'textarea' as const,
      label: 'Registered Business Address',
      required: true,
      placeholder: 'Enter your registered business address'
    },
    {
      name: 'idDocument',
      type: 'file' as const,
      label: 'ID Document (PDF/Image)',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png'
    },
    {
      name: 'proofOfAddress',
      type: 'file' as const,
      label: 'Proof of Address (PDF/Image)',
      required: true,
      accept: '.pdf,.jpg,.jpeg,.png'
    },
    {
      name: 'additionalDocuments',
      type: 'file' as const,
      label: 'Additional Documents (Optional)',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png,.doc,.docx'
    },
    {
      name: 'specialRequirements',
      type: 'textarea' as const,
      label: 'Special Requirements or Notes',
      required: false,
      placeholder: 'Any special requirements or additional information'
    }
  ]

  return (
    <ServiceForm
      serviceName="Company Registration"
      serviceDescription="Complete company registration service including CIPC registration, name reservation, Memorandum of Incorporation (MOI), and Business Owner (BO) updates."
      fields={fields}
    />
  )
}

export default CompanyRegistrationForm 