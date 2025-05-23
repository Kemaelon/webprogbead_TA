import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center">
              <Clock className="h-5 w-5 mr-2" /> Library Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-medium mr-2">Monday–Friday:</span> 9 AM – 8 PM
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Saturday:</span> 10 AM – 6 PM
              </li>
              <li className="flex items-center">
                <span className="font-medium mr-2">Sunday:</span> Closed
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mb-4">Need help finding a book or have a question? Our friendly librarians are here to assist you!</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>101 Independence Ave., S.E., Washington, D.C., U.S.</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+123456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>thegreatlibrary@library.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} The Great Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;