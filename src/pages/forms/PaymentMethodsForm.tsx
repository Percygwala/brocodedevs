import ServiceForm from '../../components/ServiceForm'

const PaymentMethodsForm = () => {
  const fields = [
    { name: 'fullName', type: 'text' as const, label: 'Full Name', required: true, placeholder: 'Enter your full name' },
    { name: 'email', type: 'email' as const, label: 'Email Address', required: true, placeholder: 'Enter your email address' },
    { name: 'phone', type: 'tel' as const, label: 'Phone Number', required: true, placeholder: 'Enter your phone number' },
    { name: 'companyName', type: 'text' as const, label: 'Company/Business Name', required: true, placeholder: 'Enter your company or business name' },
    { name: 'websiteUrl', type: 'text' as const, label: 'Website/Store URL (if any)', required: false, placeholder: 'e.g., yourbusiness.co.za' },
    { name: 'paymentGateway', type: 'select' as const, label: 'Payment Gateway Needed', required: true, options: ['PayFast', 'PayPal', 'Yoco', 'Multiple Gateways', 'Other'] },
    { name: 'businessType', type: 'select' as const, label: 'Business Type', required: true, options: ['Sole Proprietor', 'Private Company (Pty) Ltd', 'Non-Profit', 'Other'] },
    { name: 'monthlyVolume', type: 'select' as const, label: 'Estimated Monthly Transaction Volume', required: true, options: ['< R1,000', 'R1,000 - R10,000', 'R10,000 - R50,000', 'R50,000+', 'Not sure'] },
    { name: 'integrationType', type: 'select' as const, label: 'Integration Type', required: true, options: ['Website', 'Mobile App', 'Both', 'Not sure'] },
    { name: 'specialRequirements', type: 'textarea' as const, label: 'Special Requirements or Notes', required: false, placeholder: 'Any special requirements, preferences, or additional information' }
  ]

  return (
    <ServiceForm
      serviceName="Payment Methods"
      serviceDescription="Accept online payments with integrated payment gateways including PayFast, PayPal, and Yoco. Set up secure payment processing for your business website or e-commerce store."
      fields={fields}
    />
  )
}

export default PaymentMethodsForm 