import { motion, AnimatePresence } from 'framer-motion'
import { useScrollToTop } from '../hooks/useScrollToTop'
import StaggeredMenu from './StaggeredMenu'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Packages from '../pages/Packages'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import About from '../pages/About'
import CompanyRegistrationForm from '../pages/forms/CompanyRegistrationForm'
import LogoDesignForm from '../pages/forms/LogoDesignForm'
import TrademarkForm from '../pages/forms/TrademarkForm'
import SmallAppsForm from '../pages/forms/SmallAppsForm'
import LandingPageForm from '../pages/forms/LandingPageForm'
import ShopifyForm from '../pages/forms/ShopifyForm'
import DigitalAdvertisingForm from '../pages/forms/DigitalAdvertisingForm'
import BusinessEmailsForm from '../pages/forms/BusinessEmailsForm'
import DomainRegistrationForm from '../pages/forms/DomainRegistrationForm'
import PaymentMethodsForm from '../pages/forms/PaymentMethodsForm'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Projects from '../pages/Projects'
import JoyFootballAcademy from '../pages/JoyFootballAcademy'
import { Routes, Route } from 'react-router-dom'

const AppContent = () => {
  // Use the scroll to top hook inside Router context
  useScrollToTop()

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <StaggeredMenu />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Services />
            </motion.div>
          } />
          <Route path="/packages" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Packages />
            </motion.div>
          } />
          <Route path="/faq" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FAQ />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          } />
          {/* Service Form Routes */}
          <Route path="/forms/company-registration" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CompanyRegistrationForm />
            </motion.div>
          } />
          <Route path="/forms/logo-design" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LogoDesignForm />
            </motion.div>
          } />
          <Route path="/forms/trademark" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TrademarkForm />
            </motion.div>
          } />
          <Route path="/forms/small-apps" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SmallAppsForm />
            </motion.div>
          } />
          <Route path="/forms/landing-page" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LandingPageForm />
            </motion.div>
          } />
          <Route path="/forms/shopify" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ShopifyForm />
            </motion.div>
          } />
          <Route path="/forms/digital-advertising" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DigitalAdvertisingForm />
            </motion.div>
          } />
          <Route path="/forms/business-emails" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BusinessEmailsForm />
            </motion.div>
          } />
          <Route path="/forms/domain-registration" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <DomainRegistrationForm />
            </motion.div>
          } />
          <Route path="/forms/payment-methods" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PaymentMethodsForm />
            </motion.div>
          } />
          <Route path="/privacy" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Privacy />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          } />
          <Route path="/projects/joy-football-academy" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <JoyFootballAcademy />
            </motion.div>
          } />
          <Route path="/terms" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Terms />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default AppContent 