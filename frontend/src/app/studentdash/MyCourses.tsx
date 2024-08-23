"use client "


import  { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBook,
  faCircleQuestion,
  faSliders,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface Course {
  id: number;
  status: string;
  details: {
    title: string;
    category: string;
  };
}

const MyCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/enrollment/student/1");
        setCourses(response.data); // Extract courses from response data
        console.log(response.data); // Log the courses to see the structure
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "pending":
        return "text-yellow-600";
      case "accepted":
        return "text-green-600";
      case "rejected":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg mb-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#171a29]">
            <tr>
              <th className="py-3 px-4 text-center text-white">ID</th>
              <th className="py-3 px-4 text-center text-white">Course Title</th>
              <th className="py-3 px-4 text-center text-white">Category</th>
              <th className="py-3 px-4 text-center text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses && courses.map((elm) => {
              const details = Object.values(elm);
              console.log(details[6].category);

              return (
                <tr key={elm.id}>
                  <td className="py-3 px-4 text-center">{elm.id}</td>
                  <td className="py-3 px-4 text-center">{details[6].title}</td>
                  <td className="py-3 px-4 text-center">{details[6].category}</td>
                  <td className={`py-3 px-4 text-center ${getStatusColor(elm.status)}`}>
                    {elm.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
