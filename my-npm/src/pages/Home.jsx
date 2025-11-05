import React from 'react';

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-between px-12 py-20">
      {/* Left Side Text */}
    <div className="max-w-lg space-y-6">
<h1 className="manrope text-4xl font-bold leading-tight" style={{ color: "#E8C5A8" }}>
  The Fourth Trimester Doesn't Have to Break You
</h1>

  <p className="text-gray-400 text-lg">
    Real support for partners navigating postpartum — because no one should feel unprepared.
  </p>

  <p className="text-gray-400">
    When Atlas arrived, we thought we were ready. We weren't. 
    Kevin watched Sammy struggle, feeling completely helpless.
  </p>

  <p className="text-gray-400">
    Atlas Journey gives you real tools and honest conversations. 
    Don't just survive the fourth trimester — navigate it together.
  </p>

  {/* Buttons */}
  <div className="flex gap-4 pt-4">
    <button
      className="px-5 py-3 bg-white border border-[#E8C5A8] text-[#E8C5A8] font-medium rounded-md hover:bg-[#E8C5A8] hover:text-white transition"
    >
      Get the Free Newborn Checklist
    </button>

    <button
      className="px-5 py-3 bg-[#E8C5A8] text-white font-medium rounded-md hover:bg-[#d7b195] transition"
    >
      Listen to the Podcast
    </button>
  </div>
</div>
      {/* Right Side Image */}
      <div className="w-[510px] h-[520px] rounded-xl overflow-hidden shadow-lg">
        <img
          src="./img1.jpg"
          alt="Postpartum support"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
