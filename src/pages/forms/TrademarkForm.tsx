import ServiceForm from '../../components/ServiceForm'

const TrademarkForm = () => {
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
      name: 'trademarkName',
      type: 'text' as const,
      label: 'Trademark Name/Logo',
      required: true,
      placeholder: 'Enter the name or logo you want to trademark'
    },
    {
      name: 'trademarkType',
      type: 'select' as const,
      label: 'Trademark Type',
      required: true,
      options: [
        'Word Mark (Text Only)',
        'Logo/Design Mark',
        'Combined Mark (Text + Logo)',
        'Sound Mark',
        'Color Mark',
        'Shape Mark'
      ]
    },
    {
      name: 'businessDescription',
      type: 'textarea' as const,
      label: 'Business Description',
      required: true,
      placeholder: 'Describe your business and the goods/services you provide'
    },
    {
      name: 'trademarkClass',
      type: 'select' as const,
      label: 'Trademark Class (Optional)',
      required: false,
      options: [
        'Class 1: Chemicals',
        'Class 2: Paints',
        'Class 3: Cosmetics',
        'Class 4: Fuels',
        'Class 5: Pharmaceuticals',
        'Class 6: Metals',
        'Class 7: Machinery',
        'Class 8: Hand tools',
        'Class 9: Electronics',
        'Class 10: Medical devices',
        'Class 11: Appliances',
        'Class 12: Vehicles',
        'Class 13: Firearms',
        'Class 14: Jewelry',
        'Class 15: Musical instruments',
        'Class 16: Paper goods',
        'Class 17: Rubber goods',
        'Class 18: Leather goods',
        'Class 19: Building materials',
        'Class 20: Furniture',
        'Class 21: Household goods',
        'Class 22: Ropes and nets',
        'Class 23: Yarns and threads',
        'Class 24: Textiles',
        'Class 25: Clothing',
        'Class 26: Lace and embroidery',
        'Class 27: Floor coverings',
        'Class 28: Games and toys',
        'Class 29: Meat and dairy',
        'Class 30: Coffee and tea',
        'Class 31: Agricultural products',
        'Class 32: Beverages',
        'Class 33: Alcoholic beverages',
        'Class 34: Tobacco',
        'Class 35: Advertising and business',
        'Class 36: Insurance and financial',
        'Class 37: Construction services',
        'Class 38: Telecommunications',
        'Class 39: Transportation',
        'Class 40: Treatment of materials',
        'Class 41: Education and entertainment',
        'Class 42: Scientific services',
        'Class 43: Food services',
        'Class 44: Medical services',
        'Class 45: Legal and security services',
        'Not sure - need guidance'
      ]
    },
    {
      name: 'existingUse',
      type: 'select' as const,
      label: 'Current Use of Trademark',
      required: true,
      options: [
        'Already in use in South Africa',
        'Planning to use soon',
        'Intend to use (not yet in use)',
        'Used internationally but not in SA'
      ]
    },
    {
      name: 'firstUseDate',
      type: 'text' as const,
      label: 'First Use Date (if applicable)',
      required: false,
      placeholder: 'When did you first start using this trademark?'
    },
    {
      name: 'logoFile',
      type: 'file' as const,
      label: 'Logo File (if applicable)',
      required: false
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
      serviceName="Trademark Registration"
      serviceDescription="Protect your brand with trademark registration for new or existing business logos. Our service ensures your intellectual property is legally protected."
      fields={fields}
    />
  )
}

export default TrademarkForm 