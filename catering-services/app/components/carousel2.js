"use client";

import Link from 'next/link';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CarouselItems() {
  const carouselRef = useRef(null);

  const carouselItems = [
    {
      image: '/corporate_catering.avif',
      title: 'Corporate Catering',
      description: 'Professional food service for meetings, conferences, and corporate events delivered on time, every time. ',
      link: '/properties',
    },
    {
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Catering',
      description: 'Elegant food presentations and customized menus to make your special day truly memorable.',
      link: '/properties',
    },
    {
      image: 'https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Buffet Service',
      description: 'Diverse food stations and self-service options perfect for large gatherings and networking events.',
      link: '/properties',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1676651531871-db789264f848?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpdmF0ZSUyMGNoZWZ8ZW58MHx8MHx8fDA%3D',
      title: 'Private Chef Experience',
      description: 'Personalized in-home dining experiences with professional chefs creating customized menus.',
      link: '/properties',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1683141398969-4ce2f7ec9c78?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Food Truck Catering',
      description: 'Mobile food service bringing unique cuisine options directly to your event location.',
      link: '/properties',
    },
    {
      image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Dietary Specialized Catering',
      description: 'Accommodating vegan, gluten-free, allergen-free, and other dietary needs with delicious options.',
      link: '/properties',
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -384, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-black py-8">
      <div className="relative px-8">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-[#333333] p-2 rounded-full hover:bg-[#A8B5A2] transition-colors duration-200"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 pb-4"
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex-none w-96 snap-center bg-[#F9FAFB] text-[#333333] rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base">{item.description}</p>
                <Link href={item.link}>
                  <button className="px-4 py-2 bg-yellow-400 text-[#333333] rounded-lg hover:bg-[#A8B5A2] transition-colors duration-200">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}