import ServiceForm from '../../components/ServiceForm'

const LogoDesignForm = () => {
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
      placeholder: 'Describe your business and what you do'
    },
    {
      name: 'targetAudience',
      type: 'textarea' as const,
      label: 'Target Audience',
      required: true,
      placeholder: 'Describe your target audience and customers'
    },
    {
      name: 'logoStyle',
      type: 'select' as const,
      label: 'Preferred Logo Style',
      required: true,
      options: [
        'Modern and Minimalist',
        'Classic and Professional',
        'Creative and Playful',
        'Bold and Dynamic',
        'Elegant and Sophisticated',
        'Let the designer decide'
      ]
    },
    {
      name: 'colorPreferences',
      type: 'textarea' as const,
      label: 'Color Preferences',
      required: false,
      placeholder: 'Any specific colors you want to include or avoid?'
    },
    {
      name: 'logoUsage',
      type: 'select' as const,
      label: 'Primary Logo Usage',
      required: true,
      options: [
        'Website and Digital',
        'Print and Business Cards',
        'Social Media',
        'All of the above',
        'Other (specify below)'
      ]
    },
    {
      name: 'competitorLogos',
      type: 'textarea' as const,
      label: 'Competitor Logos (Optional)',
      required: false,
      placeholder: 'List any competitor logos you like or dislike'
    },
    {
      name: 'inspiration',
      type: 'textarea' as const,
      label: 'Design Inspiration (Optional)',
      required: false,
      placeholder: 'Any logos, designs, or styles that inspire you'
    },
    {
      name: 'existingBranding',
      type: 'file' as const,
      label: 'Existing Branding Materials (Optional)',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png,.ai,.eps'
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
        'No specific deadline',
        'Urgent (specify below)'
      ]
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
      serviceName="Logo Design"
      serviceDescription="Professional logo design service using Adobe Illustrator and Photoshop to create high-quality, scalable logos that represent your business perfectly."
      fields={fields}
    />
  )
}

export default LogoDesignForm 