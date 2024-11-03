import React, { useState, useEffect } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const testimonialsData = {
  title: "⭐ What Our Users Say ⭐",
  users: [
    {
        quote: "LifeVault has completely changed the way I manage my personal documents! The blockchain technology ensures my data is secure and accessible whenever I need it.",
        author: "Anjali Verma, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    },
    {
        quote: "I've stored important life events in LifeVault, and the AI features help me remember and relive those moments with ease. It's like having a digital memory box!",
        author: "Rajesh Kumar, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    },
    {
        quote: "With LifeVault, I feel in control of my personal information. The user-friendly interface and security features make it a must-have for everyone.",
        author: "Sita Devi, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    },
    {
        quote: "LifeVault has made storing sensitive documents hassle-free. I can share them securely with my family, ensuring everyone has access when needed.",
        author: "Amit Singh, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    },
    {
        quote: "The AI features in LifeVault are fantastic! They help me summarize my important life events and remind me of key moments effortlessly.",
        author: "Priya Rao, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    },
    {
        quote: "LifeVault has provided me with peace of mind knowing my important documents are securely stored and easily retrievable whenever I need them.",
        author: "Vikram Yadav, User",
        image: "https://th.bing.com/th/id/OIP.MnOHsqmDK0x6eSduQ6UjdwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
    }
  ]
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 1);
    };

    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % testimonialsData.users.length);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [slidesToShow, isHovered, testimonialsData.users.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % testimonialsData.users.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + testimonialsData.users.length) % testimonialsData.users.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center mb-10">{testimonialsData.title}</h2>
        <div className="testimonial-slider-container flex items-center justify-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            className="prev-arrow text-3xl text-blue-600 hover:text-blue-800 transition-transform duration-300"
            onClick={goToPrevious}
          >
            <BiChevronLeft />
          </button>
          <div className="flex overflow-hidden max-w-full">
            {testimonialsData.users.slice(currentIndex, currentIndex + slidesToShow).map((testimonial, index) => (
              <div
                key={index}
                className="testimonial mx-4 p-6 md:p-10 rounded-lg shadow-lg transition-transform duration-300 transform hover:shadow-2xl hover:scale-105"
                style={{
                  background: 'linear-gradient(180deg, rgba(228, 240, 229, 1) 0%, rgba(255, 255, 255, 1) 100%)', // Light blue gradient
                  border: '1px solid rgba(207, 230, 207, 0.5)', // Light blue border
                }}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.author}'s picture`}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 border-2 border-blue-400 transition-all duration-300 transform hover:scale-105"
                />
                <p className="text-lg md:text-xl italic mb-4 text-center text-blue-800">{testimonial.quote}</p>
                <h4 className="text-base md:text-lg text-blue-600 font-semibold text-center">- {testimonial.author}</h4>
              </div>
            ))}
          </div>
          <button
            className="next-arrow text-3xl text-blue-600 hover:text-blue-800 transition-transform duration-300"
            onClick={goToNext}
          >
            <BiChevronRight />
          </button>
        </div>
        <div className="dots flex justify-center mt-4">
          {testimonialsData.users.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full border border-blue-600 cursor-pointer ${index === currentIndex ? 'bg-blue-600' : 'bg-white'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
