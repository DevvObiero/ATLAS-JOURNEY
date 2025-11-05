import { useState, useEffect } from 'react';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-6xl font-bold text-[#E8C5A8] mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

function PostpartumSection() {
  return (
    <section className="min-h-screen px-12 py-20" style={{ backgroundColor: '#263940' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#E8C5A8] mb-12 text-center">
          Why Most Postpartum Support Misses the Mark
        </h2>

        {/* Main Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-16">
          <p>
            Here's what no one tells you: postpartum preparation focuses almost entirely on mom and baby. 
            Classes teach you about feeding schedules and diaper changes. Books tell you about developmental milestones.
          </p>

          <p>
            But what about the partner who watches helplessly as their wife struggles with anxiety, touched-out 
            exhaustion, and identity loss? What about the couple whose communication completely breaks down under 
            sleep deprivation? What about the dad who feels invisible in his own home?
          </p>

          <p className="text-xl font-semibold text-white">
            The gap is massive. And it's crushing relationships.
          </p>

          <p>
            According to research, <span className="text-[#E8C5A8] font-semibold">1 in 10 fathers experience postpartum depression</span>, 
            yet only <span className="text-[#E8C5A8] font-semibold">1% seek help</span>. Partners often report feeling unprepared, 
            isolated, and unsure how to support their spouse. Meanwhile, relationship satisfaction plummets in the first year 
            after baby — not because couples don't love each other, but because no one prepared them for the emotional 
            earthquake of the fourth trimester.
          </p>

          <p className="text-xl font-semibold text-white">
            Atlas Journey exists to change that.
          </p>
        </div>

        {/* Statistics Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg">
            <Counter end={10} suffix="%" duration={2000} />
            <p className="text-gray-400 mt-4">
              Fathers experience postpartum depression
            </p>
          </div>

          <div className="text-center p-6  rounded-lg">
            <Counter end={1} suffix="%" duration={2000} />
            <p className="text-gray-400 mt-4">
              Actually seek help
            </p>
          </div>

          <div className="text-center p-6 bg-[#1a2930] rounded-lg">
            <Counter end={67} suffix="%" duration={2000} />
            <p className="text-gray-400 mt-4">
              Report feeling unprepared for postpartum
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#E8C5A8] text-white font-semibold text-lg rounded-md hover:bg-[#d7b195] transition shadow-lg">
            Learn How We're Different
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostpartumSection;