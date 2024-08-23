"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import jwtDecode from "jwt-decode"; // Import jwt-decode library
import {
  faTrashAlt,
  faCamera,
  faUser,
  faEnvelope,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface FormData {
  profileImage: string | File;
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const Settings: React.FC = () => {
  const token =localStorage.getItem('token')
  const userInfo = jwtDecode(token)
  setUser(userInfo.user)// Decode the JWT token
  const [user, setUser] = useState<any>(userInfo.user); // Set user state with decoded user data

  const [formData, setFormData] = useState<FormData>({
    profileImage: "",
    name: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/user/1"); 
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    try {
      const formDataCopy = { ...formData };
      if (formData.profileImage instanceof File) {
        const imageData = new FormData();
        imageData.append("profileImage", formData.profileImage);
        const imageResponse = await axios.post("http://127.0.0.1:5000/api/upload", imageData);
        formDataCopy.profileImage = imageResponse.data.filePath;
      }
      const response = await axios.put("http://127.0.0.1:5000/api/user/1", formDataCopy); 
      console.log("Form data submitted:", response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete("http://127.0.0.1:5000/api/student/deleteAccount");
      console.log("Account deletion requested");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="p-6 w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <div className="relative w-16 h-16">
              {formData.profileImage ? (
                <img
                  src={
                    formData.profileImage instanceof File
                      ? URL.createObjectURL(formData.profileImage)
                      : formData.profileImage
                  }
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-300 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCamera} className="text-white" />
                </div>
              )}
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-gray-700 font-semibold">
                Profile Image
              </label>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Name</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Username</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 mr-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-400 mr-3" />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#171a29] text-white rounded-md transition duration-200"
          >
            Save Changes
          </button>
        </form>
        <Link href="/" className="w-full py-2 px-4 bg-[#171a29] text-white rounded-md transition duration-200 flex items-center justify-center mt-6">
          <FontAwesomeIcon icon={faTrashAlt} className="h-5 mr-2" onClick={handleDeleteAccount} />
          Delete Account
        </Link>
      </div>
    </div>
  );
};

export default Settings;
