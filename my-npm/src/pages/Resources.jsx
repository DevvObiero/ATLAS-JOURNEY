import React, { useState } from 'react';
import { CheckSquare, Video, FileText, Download, Mail, ArrowRight } from 'lucide-react';

export default function Resources() {
  const [selectedType, setSelectedType] = useState('all');

  const resourceTypes = [
    {
      id: 'checklists',
      icon: CheckSquare,
      title: 'Checklists',
      description: 'Practical, actionable checklists for preparing for baby, postpartum recovery, and mental health monitoring.',
      color: '#D4896E'
    },
    {
      id: 'seminars',
      icon: Video,
      title: 'Seminars',
      description: 'Email-based courses with video content, expert insights, and step-by-step guidance for partners and moms.',
      color: '#D4896E'
    },
    {
      id: 'toolkits',
      icon: FileText,
      title: 'Toolkits',
      description: 'Downloadable PDFs with worksheets, conversation scripts, and frameworks for communication and planning.',
      color: '#D4896E'
    }
  ];

  const allResources = [
    {
      id: 1,
      title: 'The Prepared Partner Seminar',
      type: 'seminars',
      audience: 'partners',
      subtitle: 'The Complete Guide to Showing Up During Postpartum',
      format: '3-email series',
      featured: true
    },
    {
      id: 2,
      title: 'Free Newborn Checklist',
      type: 'checklists',
      audience: 'All',
      subtitle: 'The essentials that actually matter in those first few months',
      format: 'PDF download',
      featured: true
    }
  ];

  const filteredResources = selectedType === 'all' 
    ? allResources 
    : allResources.filter(r => r.type === selectedType);

  return (
    <div className="min-h-screen bg-[#051B24]    text-white">
      {/* Hero Section */}
            <div
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="bg-gradient-to-b from-[#263940] to-[#051B24] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl py-10 mt-5 md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D4896E] to-white bg-clip-text text-transparent">
            Free Resources for the Fourth Trimester
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Evidence-based guides, checklists, and toolkits to help you navigate postpartum life with confidence.
          </p>
        </div>
      </div>

      {/* Resource Types Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Resources by Type</h2>
        <p className="text-gray-400 text-center mb-12">Choose the format that works best for you</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resourceTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.id}
                className="bg-[#263940] rounded-xl p-8 hover:bg-opacity-80 transition cursor-pointer border-2 border-transparent hover:border-[#D4896E]"
                onClick={() => setSelectedType(type.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#D4896E] bg-opacity-20 p-3 rounded-lg">
                    <Icon className="w-8 h-8 text-[black]" />
                  </div>
                  <h3 className="text-2xl font-bold">{type.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Browse All Resources Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Browse All Resources</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedType === 'all'
                    ? 'bg-[#D4896E] text-white'
                    : 'bg-[#263940] text-gray-300 hover:bg-opacity-80'
                }`}
              >
                All
              </button>
              {resourceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedType === type.id
                      ? 'bg-[#D4896E] text-white'
                      : 'bg-[#263940] text-gray-300 hover:bg-opacity-80'
                  }`}
                >
                  {type.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-[#263940] rounded-xl p-8 hover:shadow-2xl transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="inline-block bg-[#D4896E] bg-opacity-20 text-[black] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {resource.type}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">{resource.audience}</div>
                    <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.subtitle}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                      <FileText className="w-4 h-4 text-black" />
                      <span>Format: {resource.format}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#D4896E]  cursor-pointer   hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 group-hover:gap-3">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#C0A9A9] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're constantly adding new resources based on what our community needs. Let us know what would be helpful.
          </p>
          <button className="bg-[#D4896E] cursor-pointer hover:text-black text-white font-semibold py-4 px-8 rounded-lg transition inline-flex items-center gap-2 text-lg">
            <Mail className="w-5 h-5" />
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}