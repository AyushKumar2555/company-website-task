import { useState, useEffect } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Our team will contact you within 24 hours to discuss your project requirements.');
    
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      budget: '', 
      projectType: '',
      timeline: '',
      message: '' 
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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
          {/* Contact Form */}
          <div className={`bg-white rounded-3xl shadow-2xl p-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Project Inquiry</h2>
            <p className="text-gray-600 mb-8">Complete the form below and we'll get back to you within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="undecided">To be determined</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select Project Type</option>
                    <option value="web-development">Web Application Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="ecommerce">E-commerce Solution</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select Timeline</option>
                    <option value="urgent">Urgent (1-2 months)</option>
                    <option value="standard">Standard (3-6 months)</option>
                    <option value="flexible">Flexible (6+ months)</option>
                    <option value="exploratory">Exploratory Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Please describe your project requirements, goals, and any specific features or technologies you have in mind..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-lg font-semibold transform hover:scale-105 transition-transform duration-300 shadow-2xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Processing Your Inquiry...
                  </div>
                ) : (
                  'Submit Project Inquiry'
                )}
              </Button>
              
              <p className="text-center text-gray-500 text-sm">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>

          {/* Contact Information & Details */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Cards */}
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

            {/* Emergency Support */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Urgent Technical Support</h3>
              <p className="text-blue-100 mb-4">
                For critical technical issues requiring immediate attention outside business hours.
              </p>
              <div className="text-2xl font-black mb-2">+1 (555) 911-TECH</div>
              <p className="text-blue-200 text-sm">24/7 Emergency Support Line</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;