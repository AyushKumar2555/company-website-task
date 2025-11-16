import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'Global E-commerce Platform',
      description: 'Enterprise-scale online marketplace serving 50+ countries with real-time inventory and multi-currency support',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis'],
      client: 'Fortune 500 Retailer',
      results: '300% revenue growth in first year',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization platform for investment firms with predictive analytics',
      category: 'web',
      tech: ['Vue.js', 'Python', 'D3.js', 'WebSocket', 'Docker'],
      client: 'Investment Bank',
      results: '40% reduction in analysis time',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      title: 'Healthcare Mobile Application',
      description: 'Patient management and telemedicine platform with HIPAA compliance and secure messaging',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Twilio', 'Node.js'],
      client: 'Healthcare Provider',
      results: '50k+ active users monthly',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      title: 'Supply Chain Management System',
      description: 'End-to-end supply chain optimization platform with IoT integration and predictive logistics',
      category: 'web',
      tech: ['Angular', 'Java', 'PostgreSQL', 'Azure', 'IoT'],
      client: 'Logistics Company',
      results: '25% cost reduction in logistics',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      title: 'Educational Learning Platform',
      description: 'Interactive learning management system with AI-powered personalized learning paths',
      category: 'web',
      tech: ['Next.js', 'Python', 'ML', 'PostgreSQL', 'AWS'],
      client: 'Education Technology',
      results: '95% student satisfaction rate',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      title: 'Real Estate Virtual Tours',
      description: 'Immersive virtual reality platform for property viewings with 3D modeling and AR features',
      category: 'mobile',
      tech: ['Unity', 'ARKit', 'ARCore', 'Three.js', 'Node.js'],
      client: 'Real Estate Agency',
      results: '3x increase in property inquiries',
      image: '/api/placeholder/400/300',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Applications' },
    { key: 'mobile', label: 'Mobile Solutions' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl font-black mb-6 text-gray-900">
              Our Portfolio of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Explore our curated collection of successful projects that demonstrate 
              our expertise in delivering innovative digital solutions across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-2">
                      Featured Case Study
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                  <span className="text-cyan-300 font-semibold">{project.client}</span>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-blue-400 pt-4">
                  <p className="text-cyan-300 font-semibold">Key Result: {project.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects with Filter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">All Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.key)}
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  className="h-full bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">
                    <span className="text-gray-600 group-hover:text-blue-600 font-semibold transition-colors">
                      Project Visual: {project.title}
                    </span>
                  </div>

                  {/* Client Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-blue-600 font-semibold">{project.client}</span>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results */}
                  <div className="border-t pt-4 mt-auto">
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      <strong>Impact:</strong> {project.results}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex justify-center space-x-6">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;