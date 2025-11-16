import { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard'; // Import new component
import OptimizedImage from '../components/OptimizedImage'; // Import optimized image

const About = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { 
      name: 'Alexander Chen', 
      role: 'CEO & Founder', 
      bio: '15+ years leading digital transformation initiatives across Fortune 500 companies',
      expertise: 'Strategic Planning, Business Development, Digital Transformation'
    },
    { 
      name: 'Dr. Sarah Mitchell', 
      role: 'CTO', 
      bio: 'PhD in Computer Science with cloud architecture specialization and 12+ years in tech leadership',
      expertise: 'Cloud Infrastructure, System Architecture, AI/ML Integration'
    },
    { 
      name: 'Marcus Rodriguez', 
      role: 'Lead Designer', 
      bio: 'Award-winning designer with focus on user-centered design and design system development',
      expertise: 'UI/UX Design, Design Systems, Product Strategy'
    },
    { 
      name: 'Emily Watson', 
      role: 'Project Director', 
      bio: 'PMP certified with extensive agile methodology experience and 10+ years in project management',
      expertise: 'Project Management, Agile Delivery, Client Relations'
    }
  ];

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      el.dataset.section = index;
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={(el) => addToRefs(el, 'hero')}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visibleSections['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-6xl font-black mb-8 text-gray-900">
              Building The Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Of Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We are a team of passionate innovators, engineers, and designers dedicated to 
              pushing the boundaries of what's possible in the digital realm.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={(el) => addToRefs(el, 'story')}
              className={`transition-all duration-1000 delay-200 ${
                visibleSections['story'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Journey</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2018, we began as a small team of visionaries determined to 
                  challenge the status quo in digital solutions. Our journey started with 
                  a simple belief: technology should empower, not complicate.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we've grown into a multidisciplinary agency serving clients 
                  across industries, but our core philosophy remains unchanged. We 
                  continue to deliver exceptional value through innovation, quality, 
                  and unwavering commitment to our clients' success.
                </p>
                <div className="flex space-x-4 pt-6">
                  <Button className="transform hover:scale-105 transition-transform duration-300">
                    Our Methodology
                  </Button>
                  <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white">
                    Download Company Profile
                  </Button>
                </div>
              </div>
            </div>
            
            <div 
              ref={(el) => addToRefs(el, 'visual')}
              className={`relative transition-all duration-1000 delay-400 ${
                visibleSections['visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Using OptimizedImage component */}
              <OptimizedImage
                src="/api/placeholder/600/400"
                alt="Our office and team"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                placeholderColor="bg-gradient-to-br from-blue-500 to-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div 
            ref={(el) => addToRefs(el, 'stats')}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${
              visibleSections['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '150+', label: 'Projects Delivered', suffix: '' },
              { number: '98', label: 'Client Satisfaction', suffix: '%' },
              { number: '45', label: 'Industry Awards', suffix: '+' },
              { number: '5', label: 'Global Offices', suffix: '' }
            ].map((stat, index) => (
              <div key={index} className="p-8 group">
                <div className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 group-hover:from-cyan-300 group-hover:to-blue-200 transition-all duration-500">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Using TeamMemberCard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={(el) => addToRefs(el, 'team-header')}
            className="text-center mb-16 transition-all duration-1000"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries and experts driving our mission forward
            </p>
          </div>

          {/* Using TeamMemberCard component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                member={member}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;