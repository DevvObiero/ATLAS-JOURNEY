import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20" style={{ backgroundColor: '#263940' }}>
      <div className="max-w-3xl space-y-6">
        <h2 className="text-5xl font-bold text-white">
          Our Story
        </h2>
        
        <h3 className="text-3xl font-bold" style={{ color: '#E8C5A8' }}>
          We Almost Didn't Make It Through
        </h3>
        
        <p className="text-gray-300 text-lg leading-relaxed">
          That's not dramatic — it's the truth. The first three months after Atlas was born nearly broke us. 
          Not because we didn't love him or each other, but because postpartum life exposed every crack in our 
          foundation that we didn't know existed.
        </p>
      </div>
    </div>
  )
}

export default About