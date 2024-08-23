"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const TopCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showAll, setShowAll] = useState(false);
  const initialCourses = 3;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/course/getAllCourses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const visibleCourses = showAll ? courses : courses.slice(0, initialCourses);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-black">Recent Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleCourses.map(course => (
          <div key={course.id} className="bg-gray-100 shadow-md rounded-lg p-4 mb-4 w-full">
            {/* <div className="relative rounded-lg overflow-hidden mb-4" style={{ height: '150px' }}>
              <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
            </div> */}
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <div className="text-gray-600 mb-2 font-semibold">{course.category}</div>
            <p className="text-gray-500 mb-2">{course.description}</p>
            <div className="mt-2">
              <button
                className="bg-[#171a29] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#171A29] focus:outline-none"
                onClick={() => console.log(`Enrolling in course with ID: ${course.id}`)}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-4">
          <button
            className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
      {showAll && (
        <div className="mt-4">
          <button
            className="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none"
            onClick={handleSeeLess}
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default TopCourses;
