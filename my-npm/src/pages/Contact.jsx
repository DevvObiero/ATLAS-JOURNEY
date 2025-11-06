import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Shield, BookOpen } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen py-30  bg-[#051B24] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D4896E] to-white bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? Want to share your story? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-[#263940] rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-8 h-8 text-[#D4896E]" />
              <h2 className="text-3xl font-bold">Send Us a Message</h2>
            </div>
            <p className="text-gray-300 mb-8">
              Fill out the form below and we'll get back to you within 24-48 hours.
            </p>

            {submitted ? (
              <div className="bg-[#D4896E] bg-opacity-20 border-2 border-[#D4896E] rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#051B24] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4896E] text-white placeholder-gray-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#051B24] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4896E] text-white placeholder-gray-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Subject <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-[#051B24] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4896E] text-white placeholder-gray-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    className="w-full px-4 py-3 bg-[#051B24] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4896E] text-white placeholder-gray-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#D4896E] hover:bg-opacity-90 text-white font-semibold py-4 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-[#0B2732] rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Email Us Directly</h3>
              </div>
              <a 
                href="mailto:hello@atlasjourney.com"
                className="text-2xl font-mono hover:underline inline-block"
              >
                hello@atlasjourney.com
              </a>
            </div>

            <div className="bg-[#263940] rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#D4896E] flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    We typically respond within 24-48 hours
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-[#D4896E] flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    All messages are read by Kevin or Sammy personally
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#D4896E] flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Your information is kept private and never shared
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#263940] rounded-2xl p-8 shadow-2xl border-2 border-[#D4896E] border-opacity-30">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-7 h-7 text-[#D4896E]" />
                <h3 className="text-2xl font-bold">Looking for Resources?</h3>
              </div>
              <p className="text-gray-300 mb-6">
                If you need immediate support, check out our free resources page for guides, checklists, and more.
              </p>
              <button className="bg-[#051B24] hover:bg-opacity-80 text-[#D4896E] font-semibold px-6 py-3 rounded-lg transition border border-[#D4896E]">
                View Resources →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}