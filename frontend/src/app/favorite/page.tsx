'use client'
import React from 'react';
import Image from 'next/image';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Favourite = () => {
  const courses = [
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png',
      title: 'Marketing Strategies',
      description: 'Learn effective marketing strategies from industry leaders.',
      instructor: 'John Doe',
      rating: 4.5,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png',
      title: 'Illustration Techniques',
      description: 'Master illustration techniques with hands-on projects.',
      instructor: 'Jane Smith',
      rating: 4.8,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png',
      title: 'Web Development Fundamentals',
      description: 'Start your journey in web development with this beginner-friendly course.',
      instructor: 'Michael Johnson',
      rating: 4.7,
    },
    {
      imageUrl: '/frontend/src/image/make-a-logo-online.png',
      title: 'Photography Masterclass',
      description: 'Become a skilled photographer with expert tips and practical assignments.',
      instructor: 'Emily Brown',
      rating: 4.9,
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Favourite Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="course-card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  width={320}
                  height={200}
                  className="object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-purple-800">{course.title}</h3>
                    <p className="text-gray-700 mt-2">{course.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-gray-600">{course.instructor}</p>
                    <p className="text-yellow-500 font-bold">{course.rating} ★</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourite;
