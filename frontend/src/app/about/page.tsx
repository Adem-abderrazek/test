import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';
import Image from 'next/image';
// import aboutImage from '../../image/video-game-platform.png'; // Adjust path to your image

const About: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-lg overflow-hidden h-96">
             <img src='https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_1920,c_limit/100-best-games-hp-b.jpg'></img>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Welcome to GameHub</h1>
              <p className="text-lg text-gray-700 mb-6">
                GameHub is more than just a gaming platform; it's a vibrant community where gamers come together to experience the best in interactive entertainment. Here, every game tells a story, and every player finds a home.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to bring gamers closer to their favorite titles and each other. Whether you're an avid player, a game developer, or an enthusiastic gamer, GameHub offers a world of endless possibilities.
              </p>
              <p className="text-lg text-gray-700">
                Join us on this adventure where every click leads to new gaming experiences, every game sparks excitement, and every interaction builds a stronger gaming community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faGamepad} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Gamers</h3>
              <p className="text-lg text-gray-700 text-center">
                Explore a diverse library of games, from classic hits to the latest releases. Connect with fellow gamers, join exciting communities, and level up your gaming experience.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faTrophy} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Developers</h3>
              <p className="text-lg text-gray-700 text-center">
                Showcase your games to a global audience. Engage with gamers, get feedback, and collaborate with other developers to create groundbreaking experiences.
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">For Communities</h3>
              <p className="text-lg text-gray-700 text-center">
                Build and nurture your gaming communities. Organize events, share tips, and celebrate achievements with others who share your passion for gaming.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">Join the GameHub Revolution</h2>
            <p className="text-lg text-gray-700 mb-4 sm:mb-5">
              Dive into the GameHub universe and redefine your gaming journey. Connect, compete, and conquer with a platform designed to elevate every aspect of your gaming life.
            </p>
            <p className="text-lg text-gray-700 mb-4 sm:mb-5">
              Whether you’re here to discover new games, build your network, or find new ways to enjoy your favorite hobby, GameHub welcomes you with excitement and open arms.
            </p>
            <p className="text-lg text-gray-700">
              Together, let’s create a dynamic and inclusive gaming community where every player’s dream can become a reality.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
