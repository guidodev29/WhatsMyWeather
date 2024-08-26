import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-sm">
        &copy; 2024 - All rights reserved 
      </div>
      <div>
        <a href="https://github.com/guidodev29" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;



