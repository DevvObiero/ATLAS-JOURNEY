import React from 'react'

const Podcast = () => {
  return (
    <div>
       <div className="flex flex-col    w-full">

  {/* Hero Section */}
  <section className="bg-[#051B24] text-white py-30 px-6 text-center">
    <h1 className="text-5xl font-bold  text-[#E8C5A8]   mb-4">The Atlas Journey Podcast</h1>
    <p className="text-xl mb-6">Honest Conversations About Postpartum Life</p>
    <p className="text-gray-300 max-w-2xl mx-auto">
      Real talk for partners, moms, and families navigating the fourth trimester. No fluff, no perfection, just the truth.
    </p>
  </section>

  {/* About the Podcast */}
  <section className="bg-[#263940] text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-semibold text-[#E8C5A8] mb-6">About the Podcast</h2>
      <p className="text-gray-300 mb-6">
        The Atlas Journey Podcast is where we dive into the topics no one else wants to touch — postpartum mental health, relationship strain, identity loss, sleep deprivation, and the emotional weight of becoming a parent.
      </p>
      <p className="text-gray-300 mb-4 font-medium">Every episode combines:</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 text-left md:text-center">
        <li>Personal stories from our postpartum journey</li>
        <li>Evidence-based insights from research and experts</li>
        <li>Actionable strategies you can implement immediately</li>
        <li>Guest interviews with therapists, postpartum doulas, relationship coaches, and other parents</li>
      </ul>
      <p className="text-gray-300">New episodes drop every Tuesday.</p>
    </div>
  </section>

  {/* Featured Episodes */}
  <section className="bg-[#051B24] text-white py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-10 text-center">Featured Episodes</h2>

      {/* Episode 1 */}
      <div className="bg-[#E8C5A8] text-[#051B24] rounded-lg p-6 mb-6 md:flex md:justify-between md:items-center">
        <div>
          <h3 className="text-2xl font-bold mb-1">S1E1 • 38 min</h3>
          <p className="font-semibold mb-2">The Part No One Tells You About • The Fourth Trimester</p>
          <p className="mb-2">
            We share our postpartum story — the struggles, the breaking points, and what finally helped us get through.
          </p>
          <button className="mt-2 px-5 py-2 bg-[#263940] text-white rounded hover:bg-[#051B24] transition">
            Listen Now
          </button>
        </div>
      </div>

      {/* Episode 2 */}
      <div className="bg-[#263940] text-white rounded-lg p-6 mb-6 md:flex md:justify-between md:items-center">
        <div>
          <h3 className="text-2xl font-bold mb-1">S1E2 • 32 min</h3>
          <p className="font-semibold mb-2">Postpartum Depression Isn't What You Think • The Fourth Trimester</p>
          <p className="mb-2">
            PPD doesn't always look like sadness. Sometimes it's rage, numbness, or intrusive thoughts.
          </p>
          <button className="mt-2 px-5 py-2 bg-[#D4896E] text-[#051B24] rounded hover:bg-[#bf7c64] transition">
            Listen Now
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Available On */}
  <section className="bg-[#051B24] text-white py-20 px-6 text-center">
    <h2 className="text-4xl font-semibold mb-6">Also Available On:</h2>
    <div className="flex flex-wrap justify-center gap-6 text-xl font-medium">
      <span className="px-4 py-2 bg-[#263940] text-[#E8C5A8] rounded">Apple Podcasts</span>
      <span className="px-4 py-2 bg-[#263940]  text-[#E8C5A8]  rounded">Spotify</span>
      <span className="px-4 py-2 bg-[#263940] text-[#E8C5A8] rounded">Google Podcasts</span>
      <span className="px-4 py-2 bg-[#263940]  text-[#E8C5A8]  rounded">YouTube</span>
    </div>
  </section>
</div>

    </div>
  )
}

export default Podcast
