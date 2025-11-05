import React from 'react'

// I've stored the review data in an array.
// This makes it much easier to add more testimonials later!
const reviews = [
  {
    quote: "I wish I had found Atlas Journey before our baby was born. Kevin's insights on what partners can actually DO during postpartum saved our relationship. No exaggeration.",
    author: "Marcus T., father of 2"
  },
  {
    quote: "Finally, resources that don't treat dads like clueless babysitters. This is the real, practical support we needed.",
    author: "David K., new father"
  }
  // You can add a new object here to add a third review
  // {
  //   quote: "Another amazing quote.",
  //   author: "Jane D., new mother"
  // },
];

// This is a small helper component just for this file
// It makes the main 'return' statement cleaner to read.
const TestimonialCard = ({ quote, author }) => (
  <div className="bg-[#0E2935] p-8 rounded-xl border border-[#E8C5A8]/30 flex flex-col">
    {/* - The 'flex-grow' class pushes the author name to the bottom,
        so all cards have their author names aligned, even with
        different length quotes.
    */}
    <p className="text-gray-300 text-lg italic mb-6 flex-grow">
      "{quote}"
    </p>
    <p className="font-semibold text-[#E8C5A8]">
      — {author}
    </p>
  </div>
);


const Testimonials = () => {
  return (
    // We use the same background and padding as the Gallery section
    <div className='bg-[#051A23]   py-50 px-6'>
      <div className="max-w-6xl mx-auto">
        
        {/* === SECTION HEADER === */}
        <h2 
          className="text-4xl lg:text-5xl font-bold mb-12 text-center" 
          style={{ color: '#E8C5A8' }} // Your accent color
        >
          What People Are Saying
        </h2>
        
        {/* === TESTIMONIALS GRID === */}
        {/*
          - This grid is 1 column on mobile (grid-cols-1)
          - And 2 columns on medium screens and up (md:grid-cols-2)
          - 'gap-8' adds space between the cards
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* We map over the 'reviews' array to automatically create
            a card for each review.
          */}
          {reviews.map((review, index) => (
            <TestimonialCard 
              key={index} 
              quote={review.quote} 
              author={review.author} 
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Testimonials