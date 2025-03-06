import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbSection = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;

  const pathSegments = currentPath.split('/').filter(Boolean); 

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    ...pathSegments.map((segment, index) => {
      const link = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return { label: segment.charAt(0).toUpperCase() + segment.slice(1), link };
    }),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="xl:text-xl text-lg mb-8"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.link}>
          <Link to={breadcrumb.link} className="hover:underline">
            {breadcrumb.label}
          </Link>
          {/* Add separator only if it's not the last breadcrumb */}
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))}
    </motion.div>
  );
};

export default BreadcrumbSection;
