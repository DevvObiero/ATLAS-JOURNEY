import React from 'react';
import { BsPeopleFill, BsFillHeartFill } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';

// This array holds the card data, making it easy to manage.
const features = [
  {
    icon: <BsPeopleFill className="text-5xl text-[#1a2930]" />,
    title: "Partner-Focused First",
    description: "Most postpartum resources are written for moms. We flip the script by centering the partner's experience — because when partners are equipped, supported, and confident, the entire family thrives.",
  },
  {
    icon: <BsFillHeartFill className="text-5xl text-[#1a2930]" />,
    title: "Relationship-Centered",
    description: "We don't just focus on baby care tasks. We dig into the emotional, mental, and relational shifts that happen after birth — because your relationship is the foundation everything else is built on.",
  },
  {
    icon: <FaBookOpen className="text-5xl text-[#1a2930]" />,
    title: "Real Experience Meets Research",
    description: "Every resource combines evidence-based research with our lived experience navigating postpartum life. We've been there. We've felt that. And we know what actually works.",
  },
];

const HowWeAreDifferent = () => {
  return (
    <section className="bg-[#051A23] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <h2 className="text-3xl arisev md:text-5xl font-bold text-white text-center mb-12">
          How We're Different
        </h2>
        
        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#d7b195] p-8 rounded-xl shadow-lg text-center flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1a2930] mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-800 text-base">
                {feature.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HowWeAreDifferent;