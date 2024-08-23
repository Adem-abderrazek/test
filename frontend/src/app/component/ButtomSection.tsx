"use client";
import { useState } from "react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  release_date: string;
  price: number;
}

interface FAQ {
  question: string;
  answer: string;
}

const ButtonSection: React.FC = () => {
  const courses: Course[] = [
    {
      id: 0,
      title: "Cyberpunk 2077",
      description: "An open-world, action-adventure story set in Night City.",
      price: 59.99,
      release_date: "2020-12-10",
      image:
        "https://products.eneba.games/resized-products/sUy2lsKaBsQQG87bW_irtBrEf7JShOf_tFNqj1qeizE_350x200_2x-0.jpg",
      category: "",
      rating: 3.5,
    },
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      description:
        "An open-world RPG that sets a new standard for storytelling, player choice, and game world.",
      price: 39.99,
      release_date: "2015-05-18",
      image:
        "https://products.eneba.games/resized-products/0c87248bbfac2866d434aad19334b24b_350x200_2x-0.jpg",
      category:
        " Action role-playing game, Fighting game, Action-adventure game, Nonlinear gameplay",
      rating: 4.7,
    },
    {
      id: 2,
      title: "DOOM Eternal",
      description:
        "Rip and tear your way through a power fantasy first-person shooter.",
      price: 49.99,
      release_date: "2020-03-20",
      image:
        "https://products.eneba.games/resized-products/asKelmBbx6x70SFMifmV1k0Q8qycggLp3R2JXe10TFQ_350x200_2x-0.jpeg",
      category: "First-person shooter, Platform game, Adventure game",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Hades",
      description:
        "A rogue-like dungeon crawler where you defy the god of the dead.",
      price: 24.99,
      release_date: "2020-09-17",
      image:
        "https://products.eneba.games/resized-products/UpqufFUviXIZ1mP1NCApahiYi0bQAdpzFwdaD_iN19Y_350x200_2x-0.jpg",
      category:
        "Roguelike, Action role-playing game, Fighting game, Shooter Video Game",
      rating: 4.6,
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What is the process for purchasing a game?",
      answer:
        "Purchasing a game on our website is simple and straightforward:Browse or search for the game you want to buy.      Click on the game to view its details, and then click Add to Cart.Once you're ready, go to your cart and click Checkout.Enter your payment details and complete the purchase. You'll receive a confirmation email with your order details, and the game will be added to your account for download once the payment is processed.",
    },
    {
      question: "Can I track my order status?",
      answer:
        "Yes, Skillshare offers a free trial period for new users to explore the platform and access a limited selection of courses.",
    },
    {
      question: "Can I request a specific game to be added?",
      answer:
        "We value our community's input and are always looking to expand our offerings. Simply visit our Request a Game page, fill out the form with the game's details, and our team will review your request. While we can't guarantee that every game will be added, we take all requests into consideration.",
    },
    {
      question: "How do I download the games I purchased?",
      answer:
        "Yes, Skillshare allows you to download courses on mobile devices for offline viewing. Simply click on the download icon next to the course you wish to save.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 ${
              activeCategory === "All" ? "bg-[#e1aeff]" : "bg-white"
            } text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${
              activeCategory === "Marketing" ? "bg-[#e1aeff]" : "bg-white"
            } text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory("Marketing")}
          >
            Adventure
          </button>
          <button
            className={`px-4 py-2 ${
              activeCategory === "Illustration" ? "bg-[#e1aeff]" : "bg-white"
            } text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory("Illustration")}
          >
            Shooter
          </button>
          <button
            className={`px-4 py-2 ${
              activeCategory === "Web Development" ? "bg-[#e1aeff]" : "bg-white"
            } text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory("Web Development")}
          >
            RPG
          </button>
          <button
            className={`px-4 py-2 ${
              activeCategory === "Photography" ? "bg-[#e1aeff]" : "bg-white"
            } text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none`}
            onClick={() => setActiveCategory("Photography")}
          >
            Action
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg">
              <Image
                src={course.image}
                alt={course.title}
                width={320}
                height={400}
                className="object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
              <p className="text-gray-600 mt-2">· {course.rating} ★</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Gaming Excellence at Your Fingertips
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700">
                <span className="text-primary font-semibold">Thousands</span> of
                games. From indie gems to AAA titles.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700">
                Expert{" "}
                <span className="text-primary font-semibold">reviews</span> and
                community-driven content.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700">
                <span className="text-primary font-semibold">
                  Personalized recommendations
                </span>{" "}
                to help you find your next favorite game.
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-primary font-bold">✓</div>
              <p className="text-gray-700">
                <span className="text-primary font-semibold">Achievements</span>{" "}
                to showcase your gaming milestones.
              </p>
            </div>
          </div>
        </div>  

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-primary shadow-md rounded-lg">
                <button
                  className=" text-white text-lg font-semibold mb-2 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                {expandedIndex === index && (
                  <p className="text-base text-white mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonSection;
