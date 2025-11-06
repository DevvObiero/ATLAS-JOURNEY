import React from 'react';

export default function OurValues() {
  const values = [
    {
      title: "Honesty Over Perfection",
      description: "We don't sugarcoat postpartum life. We tell the truth about the hard parts because pretending it's all beautiful moments with your newborn helps no one."
    },
    {
      title: "Evidence-Based + Experience-Tested",
      description: "We combine research, expert guidance, and our lived experience to create resources that are both credible and practical."
    },
    {
      title: "Whole-Family Focus",
      description: "Postpartum affects everyone. We create content for partners, moms, and families because everyone deserves support."
    },
    {
      title: "Accessible, Judgment-Free Support",
      description: "No gatekeeping. No shaming. Just real, practical guidance that meets you where you are."
    }
  ];

  return (
    <div className="bg-[#263940] min-h-screen py-36 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F6F3EE] mb-12 text-center">
          Our Values
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-[#0a2833] rounded-lg p-8 hover:bg-[#0f3440] transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h2>
              <p className="text-[#E8C5A8] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}