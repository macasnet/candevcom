// components/Footer.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-xl font-thin mb-4">Contact</h2>
          <hr className="border-gray-900 mb-4"/>
          <div className="flex justify-center space-x-12">
            <a href="https://www.instagram.com/mcannsk/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-4xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/mahmutcannsk" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-4xl">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/mahmut-can-şık-57a97b274/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-4xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
