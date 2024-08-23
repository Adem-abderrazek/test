"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Page = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const categories = ['All', 'Math', 'Economy', 'Management', 'Science', 'History&Geography', 'Art&Literature'];
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/course/getAllCourses');
      setCourses(response.data); 
      setFilteredCourses(response.data); // Initially set all courses as filtered courses
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterCourses(category);
  };

  const filterCourses = (category) => {
    if (category === 'All') {
      setFilteredCourses(courses); // Show all courses if 'All' category selected
    } else {
      const filtered = courses.filter(course => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  const handleExplore = (courseId) => {
    // Implement explore action as needed
    console.log(`Explore course ${courseId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero section */}
      <div className="bg-[#171a29] py-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          {/* Category filter */}
          <div className="flex items-center justify-center space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`py-2 px-4 rounded-md font-semibold text-sm focus:outline-none ${
                  activeCategory === category ? 'bg-[#171a29] text-white' : 'bg-gray-200 text-gray-700'
                } `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={course.image} // Assuming course.image is the URL of the course image
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">{course.title}</h3>
                <Link href="/" className="w-full py-2 px-4 bg-[#171a29] text-white rounded-md transition duration-200 flex items-center justify-center mt-6">
         
        
         Explore </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
