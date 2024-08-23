"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBook,
  faBookmark,
  faCircleQuestion,
  faSliders,
  faBars,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../image/dash-logo.png";
import WhiteLogo from "../../image/white-logo.png";
import ProfileCard from "./ProfileCard";
import TopCourses from "./TopCourses";
import Link from "next/link";
import HelpSection from "./HelpSection";
import MyCourses from "./MyCourses";
import Settings from "./Settings";

const Page = () => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  


  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="bg-white p-8 rounded-lg mb-8 text-[#171a29] ">
            <div className="flex items-center space-x-4">
              <div className="flex-2">
                <h2 className="text-4xl font-bold">
                  Welcome to <span className="text-primary font-bold">Eduquest</span>, Yosr!
                </h2>
                <p className="mt-2 text-lg font-semibold text-[#171a29]">
                  We’re excited to have you here. Dive into your{" "}
                  <span className="text-primary">courses</span>, explore new{" "}
                  <span className="text-primary">projects</span>, and join our{" "}
                  <span className="text-primary">live sessions</span>. Remember,
                  every step you take is a step closer to mastering new{" "}
                  <span className="text-primary">skills</span>. Let's get started!
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center px-10 py-2 bg-[#171a29] text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 animate-bounce">
                Explore
              </button>
            </div>
            <TopCourses />
          </div>
        );
      case "classes":
        return (
          <div className="bg-white rounded-lg  text-[#171a29]">
            <h2 className="text-2xl font-bold mb-4 text-[#171a29] text-center">My Courses</h2>
            <MyCourses />
          </div>
        );
      case "savedClasses":
        return (
          <div className="bg-white p-8 rounded-lg mb-8 text-[#171a29]">
            {/* Add your saved classes content here */}
          </div>
        );
      case "help":
        return (
          <div className="bg-white p-8 rounded-lg mb-8 text-[#171a29]">
            <HelpSection />
          </div>
        );
      case "settings":
        return (
          <div className="bg-white p-8 rounded-lg mb-8  text-[#171a29]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#171a29]">Account Settings</h2>

            <Settings />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Sidebar */}
      <div className="">
        <div className="container relative w-full">
          <div
            className={
              !active
                ? "navigation active fixed w-64 h-full bg-[#171a29]"
                : "navigation fixed w-64 h-full bg-[#171a29]"
            }
          >
            <ul className="absolute top-0 left-0 w-full">
              <li className="relative w-full">
                <a href="#" className="relative block w-full text-[#fff]">
                  <span className="icon">
                    <Image
                      src={!active ? Logo : WhiteLogo}
                      alt=""
                      className={
                        !active
                          ? "mt-8 w-16"
                          : "mt-10 w-36 flex items-center justify-center"
                      }
                    />
                  </span>
                </a>
              </li>
              <FontAwesomeIcon
                icon={!active ? faBars : faCircleXmark}
                className={
                  !active
                    ? "h-7 ml-5 m-2 cursor-pointer text-[#fff]"
                    : "close-icon h-7 absolute ml-48 m-2 cursor-pointer text-[#fff]"
                }
                onClick={() => setActive(!active)}
              />
              <li className="relative w-full">
                <a
                  href="#"
                  className="relative block w-full text-[#fff]"
                  onClick={() => setActiveTab("dashboard")}
                >
                  <span className="icon relative">
                    <FontAwesomeIcon icon={faHouseUser} className="h-7" />
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li className="relative w-full">
                <a
                  href="#"
                  className="relative block w-full text-[#fff]"
                  onClick={() => setActiveTab("classes")}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faBook} className="h-7" />
                  </span>
                  <span className="title">My courses</span>
                </a>
              </li>
              <li className="relative w-full">
                <a
                  href="#"
                  className="relative block w-full text-[#fff]"
                  onClick={() => setActiveTab("savedClasses")}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faBookmark} className="h-7" />
                  </span>
                  <span className="title">Saved Classes</span>
                </a>
              </li>
              <li className="relative w-full">
                <a
                  href="#"
                  className="relative block w-full text-[#fff]"
                  onClick={() => setActiveTab("help")}
                >
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="h-7"
                    />
                  </span>
                  <span className="title">Help</span>
                </a>
              </li>
              <li className="relative w-full">
                <a
                  href="#"
                  className="relative block w-full text-[#fff]"
                  onClick={() => setActiveTab("settings")}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faSliders} className="h-7" />
                  </span>
                  <span className="title">Settings</span>
                </a>
              </li>
              <li className="relative w-full">
                <a href="#" className="relative block w-full text-[#fff]">
                  <span className="icon">
                    <FontAwesomeIcon icon={faCircleXmark} className="h-7" />
                  </span>
                  <span className="title">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8 ml-${active ? "64" : "20"}`}>
        {renderContent()}
      </div>

      {/* Profile Card Section */}
      {activeTab === "dashboard" && (
        <div className="flex-basis p-4 ml-8 bg-gray-200 rounded-lg shadow-md h-full mt-9 mr-2">
          <ProfileCard />
        </div>
      )}
    </div>
  );
};

export default Page;
