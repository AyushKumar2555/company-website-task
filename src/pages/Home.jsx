import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-black mb-8 leading-tight">
            Digital Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Meets Excellence
            </span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            We craft digital experiences that transform businesses and captivate audiences.
            From concept to deployment, we deliver solutions that drive real results.
          </p>
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Button size="lg" className="transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white-100 hover:text-blue-900 transition-all duration-300">
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We combine technical expertise with creative vision to deliver solutions
              that exceed expectations and drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Accelerated Delivery",
                description: "Leverage our agile methodology to bring your ideas to market faster without compromising quality or performance.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Enterprise Grade Quality",
                description: "Every project undergoes rigorous testing and quality assurance to ensure reliability and scalability at enterprise level.",
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                title: "Continuous Innovation",
                description: "Stay ahead of the curve with cutting-edge technologies and forward-thinking solutions that evolve with your business.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-transparent"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss how we can help you achieve your business objectives with our proven digital solutions.
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              className="
    bg-gradient-to-r 
    from-blue-600 
    to-purple-600
    text-white
    font-semibold
    shadow-2xl
    hover:shadow-3xl
    hover:from-blue-700 
    hover:to-purple-700
    transform 
    hover:scale-105
    active:scale-95
    transition-all 
    duration-500 
    ease-out
    hover:-translate-y-1
    relative
    overflow-hidden
    group
  "
            >
              {/* Pulse Effect */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>

              <span className="relative z-10 flex items-center justify-center">
                Schedule Consultation
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
            <Button
              size="lg"
              className="
    bg-gradient-to-r 
    from-blue-600 
    to-purple-600
    text-white
    font-semibold
    shadow-2xl
    hover:shadow-3xl
    hover:from-blue-700 
    hover:to-purple-700
    transform 
    hover:scale-105
    active:scale-95
    transition-all 
    duration-500 
    ease-out
    hover:-translate-y-1
    relative
    overflow-hidden
    group
  "
            >
              {/* Pulse Effect */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>

              <span className="relative z-10 flex items-center justify-center">
                DownLoad Voucher
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-blue-500 via-transparent to-purple-500 opacity-10 animate-spin-slow"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;