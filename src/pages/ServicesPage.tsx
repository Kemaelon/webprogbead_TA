import React from 'react';
import ServiceSlider from '../components/ServiceSlider';
import { Book, Video, Coffee, Wifi, Clock, Presentation, Database, Headphones } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the wide range of services and resources available at The Great Library
          </p>
        </div>
      </div>

      {/* Slider Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Services</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          </div>
          
          <ServiceSlider />
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">All Library Services</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to support your learning, 
              research, and enjoyment of literature and media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Book className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Book Borrowing</h3>
              <p className="text-gray-600">
                Borrow from our extensive collection of books, including fiction, non-fiction, 
                reference materials, and special collections.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Headphones className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Audiobooks & eBooks</h3>
              <p className="text-gray-600">
                Access our digital collection of audiobooks and eBooks through our online 
                platforms, available 24/7 from anywhere.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Video className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Media Collection</h3>
              <p className="text-gray-600">
                Browse and borrow from our collection of DVDs, CDs, and other multimedia resources.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Database className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Databases</h3>
              <p className="text-gray-600">
                Access premium research databases and scholarly resources that would otherwise 
                require expensive subscriptions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Wifi className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Wi-Fi & Computers</h3>
              <p className="text-gray-600">
                Enjoy high-speed internet access and use our public computers for research, 
                work, or personal tasks.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Presentation className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Events & Workshops</h3>
              <p className="text-gray-600">
                Participate in our regular events, including author talks, book clubs, 
                educational workshops, and children's activities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Coffee className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study Spaces</h3>
              <p className="text-gray-600">
                Use our quiet reading rooms, group study areas, and comfortable seating 
                areas throughout the library.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extended Hours</h3>
              <p className="text-gray-600">
                Take advantage of our extended opening hours, including evening and weekend 
                hours to accommodate various schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;