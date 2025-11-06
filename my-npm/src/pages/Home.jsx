import CircularText from "../components/CircularText";

function Home() {
  return (
    <section className="min-h-screen body flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-16 gap-12">
      
      {/* LEFT TEXT */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h1
          className="manrope text-3xl md:text-4xl lg:text-5xl font-bold leading-tight blur-fade-in"
          style={{ color: "#E8C5A8" }}
        >
          The Fourth Trimester Doesn't Have to Break You
        </h1>

        <p className="text-gray-400 text-base md:text-lg">
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

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
          <button
            className="px-5 py-3 bg-[#051A23] border border-[#E8C5A8] text-[#E8C5A8] font-medium rounded-md hover:bg-[#E8C5A8] hover:text-white transition"
          >
            Get the Free Newborn Checklist
          </button>

          <button
            className="px-5 py-3 bg-[#051A23] text-white font-medium rounded-md hover:bg-[#d7b195] transition"
          >
            Listen to the Podcast
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[510px] lg:h-[520px]">
        <img
          src="./img1.jpg"
          alt="Postpartum support"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />

        <div className="absolute -bottom-10 -left-6 z-10">
          <CircularText
            text="BREATHE * REST * CONNECT *  "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>

    </section>
  );
}

export default Home;
w