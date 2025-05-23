import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <BookOpen className="h-20 w-20 mx-auto text-amber-400 mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            The Great Library
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Discover a world of knowledge, imagination, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-md hover:bg-amber-400 transition duration-300"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">About Us</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Great Library (TGL) is a research library in Washington, D.C., serving as the library 
              and research service for the Burger States Congress and the de facto national library of 
              the Burger States. It also administers copyright law through the Burger States Copyright Office.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 1800, the Library of Congress is the oldest federal cultural institution in the 
              Burger States. It is housed in three buildings on Capital Hill, adjacent to the Burger States 
              Capitol, along with the National Audio-Visual Conservation Center in Culpeper, Virginia, and 
              additional storage facilities at Fort Made in Heaven and C-Moon in Heaven's Door, Holyland.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The library's functions are overseen by the librarian of Congress, and its buildings are 
              maintained by the architect of the Capital. The TGL is one of the largest libraries in the world, 
              containing approximately 173 million items and employing over 3,000 staff. Its collections are 
              "universal, not limited by subject, format, or national boundary, and include research materials 
              from all parts of the world and in more than 470 languages.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Visit Us</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Vast Collection</h3>
              <p className="text-gray-600 text-center">
                Access to over 173 million items including books, manuscripts, photographs, maps, and more.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Expert Assistance</h3>
              <p className="text-gray-600 text-center">
                Our knowledgeable librarians provide personalized help with research and information needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-amber-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Free Resources</h3>
              <p className="text-gray-600 text-center">
                Public access to educational resources, digital collections, and specialized databases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;