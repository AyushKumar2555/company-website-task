import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

// Import new enhanced components
import AdvancedContactForm from './components/AdvancedContactForm'
import AdvancedPortfolio from './components/AdvancedPortfolio'
import TeamMemberCard from './components/TeamMemberCard'
import OptimizedImage from './components/OptimizedImage'
import PageLoader from './components/PageLoader'
import AnimatedBackground from './components/AnimatedBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Components */}
      <PageLoader />
      <AnimatedBackground />
      <CustomCursor />
      
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<AdvancedPortfolio />} /> {/* Updated */}
          <Route path="/contact" element={<ContactWithEnhancedForm />} /> {/* Enhanced */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// Enhanced Contact Page with new form
const ContactWithEnhancedForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black mb-6 text-gray-900">
              Let's Start Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Project Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Ready to transform your ideas into exceptional digital experiences? 
              Contact us for a comprehensive consultation and project proposal.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Use the new Advanced Contact Form */}
          <AdvancedContactForm />
          
          {/* Existing Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {[
                  {
                    type: 'Phone',
                    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
                    description: 'Mon-Fri 9:00 AM - 6:00 PM EST'
                  },
                  {
                    type: 'Email',
                    details: ['hello@techcorp.com', 'projects@techcorp.com'],
                    description: 'We respond within 2 business hours'
                  },
                  {
                    type: 'Office',
                    details: ['123 Innovation Drive', 'Tech City, TC 12345'],
                    description: 'Visit us by appointment'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-6 h-6 bg-white rounded-lg"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{contact.type}</h4>
                      {contact.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-100 font-medium">{detail}</p>
                      ))}
                      <p className="text-blue-200 text-sm mt-1">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What Happens Next?</h3>
              <div className="space-y-6">
                {[
                  { step: 'Initial Consultation', time: 'Within 24 hours', desc: 'We review your requirements and schedule a discovery call' },
                  { step: 'Project Analysis', time: '2-3 days', desc: 'Our team analyzes your project and prepares a detailed proposal' },
                  { step: 'Proposal Delivery', time: '1 week', desc: 'We present comprehensive project scope, timeline, and investment' },
                  { step: 'Project Kickoff', time: 'Upon approval', desc: 'Team onboarding and project initiation within 48 hours' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.step}
                        </h4>
                        <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App