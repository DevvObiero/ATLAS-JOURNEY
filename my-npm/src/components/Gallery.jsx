import React from 'react'
import CardSwap, { Card } from '../components/CardSwap'

const Gallery = () => {
  return (
    <div className='bg-[#051A23] py-20 px-6'>
      {/* This is the new Flexbox container.
        - 'flex' activates Flexbox.
        - 'flex-col' stacks items vertically (on mobile by default).
        - 'md:flex-row' makes them side-by-side on medium screens and up.
        - 'items-center' vertically aligns the text and cards.
        - 'gap-12' adds space between the items.
        - 'max-w-6xl mx-auto' limits the width on large screens.
      */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
        
        {/* === 1. LEFT: TEXT CONTENT === */}
        {/*
          - 'md:w-1/2' makes this take up half the width on medium screens.
          - 'text-center md:text-left' centers text on mobile, aligns left on desktop.
        */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4" 
            style={{ color: '#E8C5A8' }} // Your requested header color
          >
          Navigating Postpartum, Together
          </h2>
          <p className="text-lg text-gray-300">
       The Atlas Journey Podcast brings you real talk about postpartum 
            life — from mental health and sleep deprivation to relationship 
            dynamics and identity shifts. No fluff, no judgment, 
            just the truth about what it's really like.
          </p>
          {/* Optional Button */}
          <button className="mt-8 px-6 py-3 border-2 border-[#E8C5A8] text-[#E8C5A8] rounded-full font-semibold hover:bg-[#E8C5A8] hover:text-[#051A23] transition-colors duration-300">
            Listen Now
          </button>
        </div>

        {/* === 2. RIGHT: CARD SWAP === */}
        {/*
          - 'md:w-1/2' makes this take up the other half of the width.
          - The original div with height and position is kept as it's needed for CardSwap.
        */}
        <div className="md:w-1/2 w-full" style={{ height: '500px', position: 'relative' }}>
          <CardSwap
            cardDistance={90}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <img 
                src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg" // <-- Remember to change this
                alt="Couple listening to a podcast" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </Card>
            <Card>
              <img 
                src="https://babysittingagency.fkfbungoma.co.ke/assets/a-131_1761862132502_1762261801879-CcZj2CEn.jpg" // <-- Remember to change this
                alt="Father holding a newborn baby" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </Card>
            <Card>
              <img 
                src="https://babysittingagency.fkfbungoma.co.ke/assets/a-133_1761862132500_1762261801877-FZj1YbnM.jpg" // <-- Remember to change this
                alt="Two parents smiling" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  )
}

export default Gallery