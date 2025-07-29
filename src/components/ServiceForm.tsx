import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react'

interface ServiceFormProps {
  serviceName: string
  serviceDescription: string
  fields: {
    name: string
    type: 'text' | 'email' | 'tel' | 'textarea' | 'file' | 'select'
    label: string
    required?: boolean
    placeholder?: string
    options?: string[]
    accept?: string
  }[]
}

const ServiceForm = ({ serviceName, serviceDescription, fields }: ServiceFormProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, File | null>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (name: string, file: File | null) => {
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, [name]: 'File size must not exceed 10MB' }))
      return
    }
    setFiles(prev => ({ ...prev, [name]: file }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    fields.forEach(field => {
      if (field.required) {
        if (field.type === 'file') {
          if (!files[field.name]) {
            newErrors[field.name] = `${field.label} is required`
          }
        } else {
          if (!formData[field.name] || formData[field.name].trim() === '') {
            newErrors[field.name] = `${field.label} is required`
          }
        }
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address'
        }
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    try {
      const formDataToSend = new FormData()
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key])
      })
      Object.keys(files).forEach(key => {
        if (files[key]) {
          formDataToSend.append(key, files[key]!)
        }
      })
      formDataToSend.append('service', serviceName)
      formDataToSend.append('_subject', `New ${serviceName} Request`)
      
      const response = await fetch('https://formsubmit.co/info@brocodedevs.co.za', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => navigate('/services'), 3000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="heading-lg mb-4">Thank You!</h1>
              <p className="body-lg text-gray-600 mb-6">
                Your {serviceName} request has been submitted successfully. We'll get back to you within 24 hours.
              </p>
              <Link to="/services" className="btn-primary">
                Back to Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-8"
          >
            <h1 className="heading-lg mb-2">{serviceName}</h1>
            <p className="body-lg text-gray-600">{serviceDescription}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card space-y-6"
          >
            {fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label htmlFor={field.name} className="form-label">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`form-textarea ${errors[field.name] ? 'border-red-500' : ''}`}
                    rows={4}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    required={field.required}
                    className={`form-select ${errors[field.name] ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select an option</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'file' ? (
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="file"
                        id={field.name}
                        name={field.name}
                        onChange={(e) => handleFileChange(field.name, e.target.files?.[0] || null)}
                        accept={field.accept}
                        required={field.required}
                        className="hidden"
                      />
                      <label
                        htmlFor={field.name}
                        className={`block w-full p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300 ${
                          errors[field.name] 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-600">
                            {files[field.name] ? files[field.name]?.name : 'Click to upload file'}
                          </span>
                        </div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-500">File size must not exceed 10MB.</p>
                  </div>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`form-input ${errors[field.name] ? 'border-red-500' : ''}`}
                  />
                )}
                
                {errors[field.name] && (
                  <p className="text-sm text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}

            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{errors.submit}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary btn-large btn-full-mobile w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default ServiceForm 