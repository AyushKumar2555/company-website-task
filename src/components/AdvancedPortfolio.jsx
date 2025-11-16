import { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const AdvancedPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [animationStage, setAnimationStage] = useState('idle'); // idle, fading-out, fading-in

  const projects = [
    {
      id: 1,
      title: 'Global E-commerce Platform',
      description: 'Enterprise-scale online marketplace serving 50+ countries with real-time inventory and multi-currency support',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis'],
      client: 'Fortune 500 Retailer',
      results: '300% revenue growth in first year',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial data visualization platform for investment firms with predictive analytics',
      category: 'web',
      tech: ['Vue.js', 'Python', 'D3.js', 'WebSocket', 'Docker'],
      client: 'Investment Bank',
      results: '40% reduction in analysis time',
      featured: true
    },
    {
      id: 3,
      title: 'Healthcare Mobile Application',
      description: 'Patient management and telemedicine platform with HIPAA compliance and secure messaging',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Twilio', 'Node.js'],
      client: 'Healthcare Provider',
      results: '50k+ active users monthly',
      featured: false
    },
    {
      id: 4,
      title: 'Supply Chain Management System',
      description: 'End-to-end supply chain optimization platform with IoT integration and predictive logistics',
      category: 'web',
      tech: ['Angular', 'Java', 'PostgreSQL', 'Azure', 'IoT'],
      client: 'Logistics Company',
      results: '25% cost reduction in logistics',
      featured: false
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      description: 'Interactive learning management system with AI-powered personalized learning paths',
      category: 'web',
      tech: ['Next.js', 'Python', 'ML', 'PostgreSQL', 'AWS'],
      client: 'Education Technology',
      results: '95% student satisfaction rate',
      featured: true
    },
    {
      id: 6,
      title: 'Real Estate Virtual Tours',
      description: 'Immersive virtual reality platform for property viewings with 3D modeling and AR features',
      category: 'mobile',
      tech: ['Unity', 'ARKit', 'ARCore', 'Three.js', 'Node.js'],
      client: 'Real Estate Agency',
      results: '3x increase in property inquiries',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Applications', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Solutions', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length }
  ];

  useEffect(() => {
    setDisplayedProjects(projects);
  }, []);

  const handleFilterChange = async (filterKey) => {
    setAnimationStage('fading-out');
    
    // Wait for fade out animation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setActiveFilter(filterKey);
    
    const filtered = filterKey === 'all' 
      ? projects 
      : filterKey === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === filterKey);
    
    setDisplayedProjects(filtered);
    setAnimationStage('fading-in');
    
    // Reset animation stage
    setTimeout(() => setAnimationStage('idle'), 500);
  };

  const getFilteredProjects = () => {
    return activeFilter === 'all' 
      ? projects 
      : activeFilter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === activeFilter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black mb-6 text-gray-900">
              Our Portfolio of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Excellence
              </span>
            </h1>
          </div>

          {/* Animated Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange(filter.key)}
                className="relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">
                  {filter.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeFilter === filter.key 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {filter.count}
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            ))}
          </div>

          {/* Animated Projects Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
            animationStage === 'fading-out' ? 'opacity-0 scale-95' : 
            animationStage === 'fading-in' ? 'opacity-100 scale-100' : 
            'opacity-100 scale-100'
          }`}>
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-500 ${
                  animationStage === 'idle' ? 'animate-fade-in-up' : ''
                }`}
                style={{ 
                  animationDelay: animationStage === 'idle' ? `${index * 100}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  className="h-full bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-blue-600 font-semibold">{project.client}</span>
                    {project.featured && (
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded transform group-hover:scale-110 transition-transform duration-300">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    <span className="text-gray-600 group-hover:text-blue-600 font-semibold transition-colors relative z-10">
                      {project.title}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300 transform group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded transform group-hover:scale-105 transition-all duration-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Results with Progress Bar Animation */}
                  <div className="border-t pt-4 mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Impact:</span>
                      <span className="text-sm text-green-600 font-bold">{project.results}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-green-500 group-hover:to-green-700"
                        style={{ 
                          width: '0%',
                          animation: 'growWidth 1s ease-out forwards',
                          animationDelay: `${index * 200 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Action Button */}
                  <div className="absolute bottom-4 right-4 transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button size="sm" className="shadow-lg">
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {displayedProjects.length === 0 && animationStage === 'idle' && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500">Try selecting a different filter category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdvancedPortfolio;