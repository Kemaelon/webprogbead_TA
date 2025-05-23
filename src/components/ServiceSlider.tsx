import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    title: "Book & Media Collection",
    description: "Browse our extensive catalog of books, e-books, audiobooks, and more.",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Study & Work Spaces",
    description: "Enjoy quiet reading areas, group study rooms, and free Wi-Fi.",
    image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Events & Programs",
    description: "Join book clubs, author talks, workshops, and activities for all ages.",
    image: "https://images.pexels.com/photos/7942538/pexels-photo-7942538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Digital Resources",
    description: "Access online databases, research tools, and language-learning platforms.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ServiceSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      <div className="h-[500px] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-48 md:h-full">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{slide.title}</h3>
                <p className="text-lg text-gray-700">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-500 w-6' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;