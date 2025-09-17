import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of the BROCODEDEVS website (brocodedevs.co.za) and the services provided by BROCODEDEVS ("we," "our," or "us"). By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                BROCODEDEVS provides digital agency services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Web development and design</li>
                <li>Company registration services</li>
                <li>Logo design and branding</li>
                <li>E-commerce solutions (Shopify stores)</li>
                <li>Digital advertising and marketing</li>
                <li>Domain registration</li>
                <li>Business email setup</li>
                <li>Payment method integration</li>
                <li>Trademark registration</li>
                <li>Small business applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the security of your account and passwords</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not use our services to transmit harmful or malicious content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.1 Pricing and Payment</h3>
              <p className="text-gray-600 mb-4">
                All prices are quoted in South African Rand (ZAR) unless otherwise specified. Payment is required in advance for most services. We accept various payment methods as indicated on our website.
              </p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.2 Refunds and Cancellations</h3>
              <p className="text-gray-600 mb-4">
                Refund policies vary by service type:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li><strong>Web Development:</strong> 50% refund if cancelled before development begins</li>
                <li><strong>Design Services:</strong> No refunds after work has commenced</li>
                <li><strong>Registration Services:</strong> No refunds once applications are submitted</li>
                <li><strong>Domain Services:</strong> Subject to registrar policies</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.3 Late Payments</h3>
              <p className="text-gray-600 mb-4">
                Late payments may result in service suspension or termination. We reserve the right to charge interest on overdue amounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-gray-600 mb-4">
                All content on our website, including text, graphics, logos, and software, is owned by BROCODEDEVS and is protected by copyright and other intellectual property laws.
              </p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.2 Your Content</h3>
              <p className="text-gray-600 mb-4">
                You retain ownership of content you provide to us. By providing content, you grant us a license to use it for the purpose of providing our services.
              </p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.3 Deliverables</h3>
              <p className="text-gray-600 mb-4">
                Upon full payment, you will own the final deliverables created for your project, subject to any third-party licensing requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Delivery and Timelines</h2>
              <p className="text-gray-600 mb-4">
                We strive to deliver services within agreed timelines. However, delivery times may vary based on:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Project complexity and scope</li>
                <li>Client feedback and revision cycles</li>
                <li>Third-party dependencies</li>
                <li>Current workload and availability</li>
              </ul>
              
              <p className="text-gray-600 mb-4">
                We will communicate any delays and provide updated timelines when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                BROCODEDEVS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to our services.
              </p>
              
              <p className="text-gray-600 mb-4">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless BROCODEDEVS from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate these Terms with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 ml-4">
                <li>You must cease using our services</li>
                <li>We may delete your account and data</li>
                <li>Outstanding payments remain due</li>
                <li>Certain provisions survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of South Africa. Any disputes shall be resolved in the courts of South Africa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Entire Agreement</h2>
              <p className="text-gray-600 mb-4">
                These Terms constitute the entire agreement between you and BROCODEDEVS regarding our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@brocodedevs.co.za
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +27 69 839 2563
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Address:</strong> Durban, South Africa
                </p>
                <p className="text-gray-600">
                  <strong>Website:</strong> brocodedevs.co.za
                </p>
              </div>
            </section>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-500 text-center">
                These Terms of Service are effective as of the date listed above and apply to all users of our website and services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
