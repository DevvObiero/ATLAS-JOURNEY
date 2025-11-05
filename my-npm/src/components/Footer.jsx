import React from 'react'
// You might want to install react-icons for social media
// import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F6F3EE' }}>
      <div className="max-w-6xl mx-auto py-20 px-6">
        
        {/* === TOP SECTION: LINKS GRID === */}
        {/*
          - 1 column on mobile
          - 2 columns on tablet (md)
          - 4 columns on desktop (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-700">
          
          {/* --- COLUMN 1: QUICK LINKS --- */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-gray-900 hover:underline">Home</a>
              <a href="#" className="hover:text-gray-900 hover:underline">About</a>
              <a href="#" className="hover:text-gray-900 hover:underline">For Partners</a>
              <a href="#" className="hover:text-gray-900 hover:underline">For Moms</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Blog</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Podcast</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Contact</a>
            </div>
          </div>
          
          {/* --- COLUMN 2: RESOURCES --- */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-gray-900 hover:underline">Free Newborn Checklist</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Partner Seminars</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Communication Toolkits</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Mental Health Guides</a>
            </div>
          </div>
          
          {/* --- COLUMN 3: NEWSLETTER --- */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm">
              Weekly insights for partners and families navigating postpartum life.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#607165]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-r-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#607165' }} // Your brand button color
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
          {/* --- COLUMN 4: CONNECT WITH US --- */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <a 
              href="mailto:hello@atlasjourney.com" 
              className="hover:text-gray-900 hover:underline"
            >
              hello@atlasjourney.com
            </a>
            <p className="mt-4">Follow us:</p>
            {/*
              Add social icons here. Example:
              <div className="flex gap-4 mt-2">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            */}
          </div>
          
        </div>

        {/* === BOTTOM SECTION: COPYRIGHT & LEGAL === */}
        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 Atlas Journey. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 hover:underline">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer