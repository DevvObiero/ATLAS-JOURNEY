import React from 'react'

const CTA = () => {
  return (
    // Main container with your requested background color
    <div style={{ backgroundColor: '#C0A9A9' }}>
      <div className="max-w-3xl mx-auto text-center py-20 px-6">
        
        {/* === HEADER === */}
        <h2 
          className="text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: '#FFFFFF' }} // Your requested font color
        >
          Start Your Postpartum Journey the Right Way
        </h2>
        
        {/* === PARAGRAPH === */}
        <p 
          className="text-lg lg:text-xl mb-10"
          style={{ color: '#FFFFFF' }} // Your requested font color
        >
          Whether you're preparing for baby's arrival or already in the thick 
          of the fourth trimester, we've got resources to help you navigate 
          this season with confidence, connection, and clarity.
        </p>

        {/* === BUTTONS CONTAINER === */}
        {/*
          - Stacks vertically on mobile (flex-col)
          - Sits side-by-side on small screens and up (sm:flex-row)
          - justify-center centers them
          - gap-4 adds space between them
        */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* --- PRIMARY BUTTON --- */}
          <button
            className="px-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-opacity duration-300"
            style={{ backgroundColor: '#607165' }} // Your requested button color
          >
            Download the Free Checklist
          </button>
          
          {/* --- ALTERNATE (SECONDARY) BUTTON --- */}
          <button
            className="px-8 py-3 rounded-full font-semibold bg-white hover:opacity-90 transition-opacity duration-300"
            style={{ color: '#607165' }} // Your button color used as text
          >
            Join Our Newsletter
          </button>

        </div>
      </div>
    </div>
  )
}

export default CTA