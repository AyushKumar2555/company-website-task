import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ mobile = false, className = '' }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  const baseStyles = mobile 
    ? 'flex flex-col space-y-4' 
    : 'flex items-center space-x-8';

  return (
    <nav className={`${baseStyles} ${className}`}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-medium transition-colors duration-300 ${
            location.pathname === item.path
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;