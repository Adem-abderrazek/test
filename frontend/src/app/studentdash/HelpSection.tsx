import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBook,
  faVideo,
  faComments,
  faEnvelope,
  faPhoneAlt,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface Question {
  question: string;
  answer: string;
}

const Help: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const questions: Question[] = [
    {
      question: "How do I update my profile?",
      answer:
        "To reset your password, go to the setting page and click update your profile there.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of the current billing cycle.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team via email or phone. Our support email is support@yourcompany.com. For immediate assistance, call us at +1-800-123-4567.",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Help & Support</h2>

      <div className="max-w-3xl mx-auto">
        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">FAQ</h3>
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full p-4 focus:outline-none"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-2xl text-[#171a29] mr-4"
                  />
                  <h4 className="text-lg font-semibold">{item.question}</h4>
                </div>
                <FontAwesomeIcon
                  icon={expandedIndex === index ? faChevronUp : faChevronDown}
                  className="text-gray-400"
                />
              </button>
              {expandedIndex === index && (
                <div className="p-4 bg-gray-100">
                  <p className="text-gray-600 font-semibold">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Support</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <h4 className="text-lg font-semibold">Email Support</h4>
            </div>
            <p className="text-gray-600 mb-4 font-semibold">
              If you need further assistance, please contact our support team
              via email.
            </p>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#171a29] mr-2"
              />
              <span className="text-gray">support@Eduquest.com</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex items-center mb-4">
              <h4 className="text-lg font-semibold">Phone Support</h4>
            </div>
            <p className="text-gray-600 mb-4">
              For immediate assistance, call our support team during business
              hours.
            </p>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="text-[#171a29] mr-2"
              />
              <span className="text-gray">+216 99 855 238</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
