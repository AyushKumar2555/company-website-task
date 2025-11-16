import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = {
    development: {
      title: 'Development Services',
      services: [
        {
          title: 'Enterprise Web Applications',
          description: 'Scalable, secure web applications built with modern frameworks and cloud-native architectures.',
          features: ['React/Next.js Development', 'Node.js Backend', 'Microservices Architecture', 'API Development'],
          price: 'Custom Quote',
          level: 'Enterprise'
        },
        {
          title: 'Mobile Solutions',
          description: 'Cross-platform mobile applications delivering native-like performance and user experience.',
          features: ['React Native', 'Flutter Development', 'iOS & Android', 'App Store Deployment'],
          price: 'Starting at $25,000',
          level: 'Professional'
        },
        {
          title: 'E-commerce Platforms',
          description: 'Complete online store solutions with integrated payment processing and inventory management.',
          features: ['Headless Commerce', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
          price: 'Starting at $15,000',
          level: 'Business'
        }
      ]
    },
    design: {
      title: 'Design Services',
      services: [
        {
          title: 'UI/UX Design Systems',
          description: 'Comprehensive design systems that ensure consistency and scalability across all digital touchpoints.',
          features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
          price: 'Starting at $12,000',
          level: 'Enterprise'
        },
        {
          title: 'Brand Identity',
          description: 'Complete brand development including logo, guidelines, and visual identity systems.',
          features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Asset Creation'],
          price: 'Starting at $8,000',
          level: 'Professional'
        }
      ]
    },
    strategy: {
      title: 'Digital Strategy',
      services: [
        {
          title: 'Digital Transformation',
          description: 'End-to-end digital transformation consulting to modernize your business operations.',
          features: ['Process Analysis', 'Technology Audit', 'Implementation Roadmap', 'Change Management'],
          price: 'Custom Quote',
          level: 'Enterprise'
        },
        {
          title: 'Growth Strategy',
          description: 'Data-driven growth strategies to expand your digital presence and market reach.',
          features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Performance Metrics'],
          price: 'Starting at $10,000',
          level: 'Business'
        }
      ]
    }
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
              Comprehensive Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              We deliver end-to-end digital services that drive growth, enhance efficiency, 
              and create meaningful connections with your audience.
            </p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {Object.keys(serviceCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {serviceCategories[category].title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories[activeTab].services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  title={service.title}
                  description={service.description}
                  className="h-full bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex-grow">
                    {/* Service Level Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      service.level === 'Enterprise' 
                        ? 'bg-purple-100 text-purple-800' 
                        : service.level === 'Professional'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {service.level} Tier
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.price}
                          </span>
                        </div>
                        <Button 
                          size="sm" 
                          className="transform group-hover:scale-105 transition-transform duration-300"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Delivery Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: 'Discovery & Strategy', 
                desc: 'Deep dive into your business objectives and technical requirements',
                duration: '1-2 weeks'
              },
              { 
                step: 'Design & Planning', 
                desc: 'Create detailed specifications and project roadmap',
                duration: '2-3 weeks'
              },
              { 
                step: 'Development & Testing', 
                desc: 'Agile development with continuous integration and testing',
                duration: '4-12 weeks'
              },
              { 
                step: 'Launch & Support', 
                desc: 'Deployment, monitoring, and ongoing maintenance',
                duration: 'Ongoing'
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {process.step}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {process.desc}
                </p>
                <div className="text-cyan-400 text-sm font-semibold">
                  {process.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;