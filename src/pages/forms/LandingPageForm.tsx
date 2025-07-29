import ServiceForm from '../../components/ServiceForm'

const LandingPageForm = () => {
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
      name: 'websitePurpose',
      type: 'select' as const,
      label: 'Website Purpose',
      required: true,
      options: [
        'Business Information',
        'Lead Generation',
        'Product/Service Showcase',
        'Contact/Inquiry Form',
        'Portfolio/Showcase',
        'E-commerce (Simple)',
        'Blog/Content',
        'Other (specify below)'
      ]
    },
    {
      name: 'targetAudience',
      type: 'textarea' as const,
      label: 'Target Audience',
      required: true,
      placeholder: 'Who is your target audience?'
    },
    {
      name: 'websitePages',
      type: 'select' as const,
      label: 'Number of Pages Required',
      required: true,
      options: [
        '1 page (Landing page)',
        '2-3 pages',
        '4-5 pages',
        '6-10 pages',
        'More than 10 pages'
      ]
    },
    {
      name: 'pageDetails',
      type: 'textarea' as const,
      label: 'Page Details',
      required: true,
      placeholder: 'List the pages you need (e.g., Home, About, Services, Contact, etc.)'
    },
    {
      name: 'designStyle',
      type: 'select' as const,
      label: 'Preferred Design Style',
      required: true,
      options: [
        'Modern and Minimalist',
        'Classic and Professional',
        'Creative and Bold',
        'Elegant and Sophisticated',
        'Simple and Clean',
        'Let the designer decide'
      ]
    },
    {
      name: 'colorScheme',
      type: 'textarea' as const,
      label: 'Color Preferences',
      required: false,
      placeholder: 'Any specific colors you want to use?'
    },
    {
      name: 'domainName',
      type: 'text' as const,
      label: 'Preferred Domain Name',
      required: false,
      placeholder: 'e.g., yourbusiness.co.za'
    },
    {
      name: 'existingWebsite',
      type: 'text' as const,
      label: 'Existing Website (if any)',
      required: false,
      placeholder: 'Do you have an existing website?'
    },
    {
      name: 'contentProvided',
      type: 'select' as const,
      label: 'Content Availability',
      required: true,
      options: [
        'I have all content ready',
        'I have some content',
        'I need help with content',
        'I need content writing service'
      ]
    },
    {
      name: 'imagesProvided',
      type: 'select' as const,
      label: 'Images/Media',
      required: true,
      options: [
        'I have all images ready',
        'I have some images',
        'I need stock photos',
        'I need professional photography'
      ]
    },
    {
      name: 'seoRequirements',
      type: 'select' as const,
      label: 'SEO Requirements',
      required: true,
      options: [
        'Basic SEO setup',
        'Advanced SEO optimization',
        'Local SEO for South Africa',
        'No SEO needed'
      ]
    },
    {
      name: 'contactForm',
      type: 'select' as const,
      label: 'Contact Form Requirements',
      required: true,
      options: [
        'Simple contact form',
        'Advanced form with file upload',
        'Multiple forms (quote, contact, etc.)',
        'No contact form needed'
      ]
    },
    {
      name: 'existingBranding',
      type: 'file' as const,
      label: 'Existing Branding Materials (Optional)',
      required: false,
      accept: '.pdf,.jpg,.jpeg,.png,.ai,.eps'
    },
    {
      name: 'referenceWebsites',
      type: 'textarea' as const,
      label: 'Reference Websites (Optional)',
      required: false,
      placeholder: 'Any websites you like or want to reference'
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
      serviceName="Landing Page Websites"
      serviceDescription="Create stunning business websites with custom domains. Our landing page websites are designed to convert visitors into customers with modern design and optimized user experience."
      fields={fields}
    />
  )
}

export default LandingPageForm 