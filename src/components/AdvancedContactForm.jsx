import { useState } from 'react';
import Button from './Button';

const AdvancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    company: { value: '', error: '', touched: false },
    budget: { value: '', error: '', touched: false },
    projectType: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateField = (name, value) => {
    const validations = {
      name: {
        test: value.length >= 2,
        message: 'Name must be at least 2 characters'
      },
      email: {
        test: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Please enter a valid email address'
      },
      company: {
        test: value.length >= 1,
        message: 'Company name is required'
      },
      budget: {
        test: value.length >= 1,
        message: 'Please select a budget range'
      },
      projectType: {
        test: value.length >= 1,
        message: 'Please select a project type'
      },
      message: {
        test: value.length >= 10,
        message: 'Message must be at least 10 characters'
      }
    };

    return validations[name] || { test: true, message: '' };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validation = validateField(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: {
        value,
        error: !validation.test && prev[name].touched ? validation.message : '',
        touched: prev[name].touched
      }
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validation = validateField(name, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        error: !validation.test ? validation.message : '',
        touched: true
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    const updatedFormData = { ...formData };
    
    Object.keys(updatedFormData).forEach(key => {
      const validation = validateField(key, updatedFormData[key].value);
      if (!validation.test) {
        updatedFormData[key] = {
          ...updatedFormData[key],
          error: validation.message,
          touched: true
        };
        isValid = false;
      }
    });

    if (!isValid) {
      setFormData(updatedFormData);
      setSubmitStatus('validation-error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(''), 5000);
      
      // Reset form
      setFormData({
        name: { value: '', error: '', touched: false },
        email: { value: '', error: '', touched: false },
        company: { value: '', error: '', touched: false },
        budget: { value: '', error: '', touched: false },
        projectType: { value: '', error: '', touched: false },
        message: { value: '', error: '', touched: false }
      });
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'success':
        return { message: 'Thank you! Your message has been sent successfully.', type: 'success' };
      case 'error':
        return { message: 'Sorry, there was an error sending your message. Please try again.', type: 'error' };
      case 'validation-error':
        return { message: 'Please fix the errors in the form before submitting.', type: 'error' };
      default:
        return null;
    }
  };

  const status = getStatusMessage();

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Project Inquiry</h2>
      <p className="text-gray-600 mb-8">Complete the form below and we'll get back to you within 24 hours</p>

      {/* Status Message */}
      {status && (
        <div className={`mb-6 p-4 rounded-xl border-2 transition-all duration-500 animate-slide-down ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
              status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {status.type === 'success' ? '✓' : '!'}
            </div>
            {status.message}
          </div>
        </div>
      )}

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
              value={formData.name.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white peer ${
                formData.name.error && formData.name.touched 
                  ? 'border-red-500 bg-red-50 shake' 
                  : formData.name.touched && !formData.name.error
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Enter your full name"
            />
            {formData.name.error && (
              <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {formData.name.error}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                formData.email.error && formData.email.touched 
                  ? 'border-red-500 bg-red-50 shake' 
                  : formData.email.touched && !formData.email.error
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="your.email@company.com"
            />
            {formData.email.error && (
              <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {formData.email.error}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Company / Organization *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                formData.company.error && formData.company.touched 
                  ? 'border-red-500 bg-red-50 shake' 
                  : formData.company.touched && !formData.company.error
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Your company name"
            />
            {formData.company.error && (
              <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {formData.company.error}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Budget *
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                formData.budget.error && formData.budget.touched 
                  ? 'border-red-500 bg-red-50 shake' 
                  : formData.budget.touched && !formData.budget.error
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
            >
              <option value="">Select Budget Range</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
            {formData.budget.error && (
              <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {formData.budget.error}
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType.value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
              formData.projectType.error && formData.projectType.touched 
                ? 'border-red-500 bg-red-50 shake' 
                : formData.projectType.touched && !formData.projectType.error
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 focus:border-blue-500'
            }`}
          >
            <option value="">Select Project Type</option>
            <option value="web-development">Web Application Development</option>
            <option value="mobile-app">Mobile Application</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="ecommerce">E-commerce Solution</option>
          </select>
          {formData.projectType.error && (
            <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              {formData.projectType.error}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message.value}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="6"
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white resize-none ${
              formData.message.error && formData.message.touched 
                ? 'border-red-500 bg-red-50 shake' 
                : formData.message.touched && !formData.message.error
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Please describe your project requirements, goals, and any specific features or technologies you have in mind..."
          ></textarea>
          {formData.message.error && (
            <div className="text-red-500 text-sm mt-2 animate-fade-in flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              {formData.message.error}
            </div>
          )}
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.message.value.length}/10 minimum
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full py-4 text-lg font-semibold transform hover:scale-105 transition-transform duration-300 shadow-2xl relative overflow-hidden group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
              Processing Your Inquiry...
            </div>
          ) : (
            <>
              <span className="relative z-10">Submit Project Inquiry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default AdvancedContactForm;