import React from "react";

const ForMoms = () => {
  return (
    <div className="min-h-screen bg-[#051B24] text-white">
      {/* subtle grid background */}
      <div
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
      

        {/* HERO */}
        <section className="max-w-6xl  mx-auto px-6 py-32 md:flex md:items-center md:gap-10">
          {/* Left text */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4896E]">
              You're Not Asking Too Much
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              You deserve a partner who gets it, shows up, and shares the load. Here's how to make that happen.
            </p>

            <p className="text-gray-300 mb-6">
              Postpartum is hard. This page gives practical steps, language you can use, and simple frameworks to protect your
              recovery and mental health.
            </p>

            <div className="flex gap-4">
              <button className="px-5 py-3 bg-[#D4896E] text-[#051B24] rounded-md font-medium hover:bg-[#bf7c64] transition">
                Download the Free Checklist
              </button>
              <button className="px-5 py-3 border border-[#6B8264] text-[#6B8264] rounded-md hover:bg-[#6B8264] hover:text-[#051B24] transition">
                Join the Newsletter
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://babysittingagency.fkfbungoma.co.ke/assets/a-207_1762281839814-ckxJBhlJ.jpg"
              alt="Family laying on grass together with baby"
              className="w-full rounded-lg shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </section>

        {/* The Part No One Talks About */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-[#263940] rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-[#D4896E] mb-4">The Part No One Talks About</h2>
            <p className="text-gray-300 mb-4">
              Postpartum is hard enough without having to teach your partner how to support you while you're drowning.
            </p>
            <p className="text-gray-300 mb-4">
              You're recovering from birth, navigating feeding challenges, hormonal shifts, and sleep deprivation. You're
              mourning the loss of your old identity while falling in love with your baby.
            </p>
            <p className="text-gray-300 mb-4">
              On top of all that, you're managing the household, guiding your partner through tasks he should already know how
              to do, and carrying the mental load for the entire family. It's exhausting.
            </p>
            <p className="text-gray-300">
              This page is designed to give you tools to:
            </p>

            <ul className="list-disc list-inside text-gray-300 mt-4 grid gap-2 md:grid-cols-2">
              <li>Communicate what you need when you can't find the words</li>
              <li>Set boundaries that protect your recovery and mental health</li>
              <li>Build a postpartum plan with your partner BEFORE baby arrives</li>
              <li>Navigate relationship changes without guilt or resentment</li>
            </ul>
          </div>
        </section>

        {/* Core Resources Grid */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#D4896E] mb-6">Core Resources for Moms</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="bg-[#051B24] border border-gray-700 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">The Supported Mom Framework</h4>
                <p className="text-gray-300 mb-3">How to Get the Help You Actually Need</p>
                <ul className="text-gray-300 list-disc list-inside space-y-1 mb-3">
                  <li>Identifying your postpartum non-negotiables</li>
                  <li>Creating a communication plan with your partner</li>
                  <li>Setting boundaries without guilt</li>
                  <li>Asking for help when you're terrible at asking</li>
                  <li>Building your postpartum village</li>
                </ul>
                <p className="text-gray-400 italic">Format: 4-week email course with worksheets</p>
              </div>
              <button className="mt-6 px-4 py-2 bg-[#6B8264] text-[#051B24] rounded-md hover:bg-[#5f755f] transition">
                Start the Framework →
              </button>
            </article>

            {/* Card 2 */}
            <article className="bg-[#263940] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">Help Your Partner Help You</h4>
                <p className="text-gray-300 mb-3">What to Share With Your Spouse Before and After Baby</p>
                <ul className="text-gray-300 list-disc list-inside space-y-1 mb-3">
                  <li>What postpartum REALLY looks like</li>
                  <li>10 things partners need to know about PPD/PPA</li>
                  <li>How to ask for emotional support</li>
                  <li>Scripts for hard conversations</li>
                  <li>Creating a postpartum plan together</li>
                </ul>
                <p className="text-gray-400 italic">Format: Shareable guide for your partner</p>
              </div>
              <button className="mt-6 px-4 py-2 bg-[#D4896E] text-[#051B24] rounded-md hover:bg-[#bf7c64] transition">
                Download & Share →
              </button>
            </article>

            {/* Card 3 */}
            <article className="bg-[#051B24] border border-gray-700 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">Postpartum Mental Health Toolkit</h4>
                <p className="text-gray-300 mb-3">Resources for Anxiety, Depression, and Everything In Between</p>
                <ul className="text-gray-300 list-disc list-inside space-y-1 mb-3">
                  <li>Differentiating baby blues from PPD/PPA</li>
                  <li>Self-assessment tools</li>
                  <li>When to seek professional help</li>
                  <li>How to talk to your partner about it</li>
                  <li>Therapist finder and support groups</li>
                </ul>
                <p className="text-gray-400 italic">Format: Comprehensive resource guide</p>
              </div>
              <button className="mt-6 px-4 py-2 border border-[#D4896E] text-[#D4896E] rounded-md hover:bg-[#D4896E] hover:text-[#051B24] transition">
                Get the Toolkit →
              </button>
            </article>
          </div>
        </section>

        {/* 5 Things You Can Do Today (with image on right) */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-[#263940] rounded-lg p-8 md:grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-[#D4896E] mb-4">5 Things You Can Do Today</h4>
              <ol className="list-decimal list-inside text-gray-300 space-y-4">
                <li>
                  Name one thing you need right now and ask for it — rest, a shower, someone to hold the baby, or dinner.
                </li>
                <li>
                  Release the guilt about "not doing enough." You're keeping a human alive. That is enough.
                </li>
                <li>
                  Send your partner one resource from this page — forward the "For Partners" page or share a podcast episode.
                </li>
                <li>
                  Identify one boundary you need to set — visitor limits, no unsolicited advice — name it and protect it.
                </li>
                <li>
                  Check in with yourself: how are YOU really doing? Take 5 minutes to honestly assess your mental health.
                </li>
              </ol>
            </div>

            {/* image at the bottom-right area for this section */}
            <div className="mt-6 md:mt-0">
              <img
                src="https://babysittingagency.fkfbungoma.co.ke/assets/a-151_1761862394858-HM6tyArt.jpg"
                alt="Baby looking peaceful"
                className="w-full rounded-lg shadow-lg object-cover h-100px md:h-72"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="bg-[#051B24] border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#D4896E] mb-4">You Deserve Support Too</h3>
            <p className="text-gray-300 mb-6">
              Postpartum isn't just about baby. It's about you — your recovery, your mental health, your relationships, your identity.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4896E] text-[#051B24] rounded-md hover:bg-[#bf7c64] transition">
                Download the Free Checklist
              </button>
              <button className="px-6 py-3 border border-[#6B8264] text-[#6B8264] rounded-md hover:bg-[#6B8264] hover:text-[#051B24] transition">
                Join the Newsletter
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links & Footer */}
        <footer className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold text-[#D4896E] mb-3">Quick Links</h5>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">For Partners</a></li>
                <li><a href="#" className="hover:underline">For Moms</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-[#D4896E] mb-3">Resources</h5>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#" className="hover:underline">Free Newborn Checklist</a></li>
                <li><a href="#" className="hover:underline">Partner Seminars</a></li>
                <li><a href="#" className="hover:underline">Communication Toolkits</a></li>
                <li><a href="#" className="hover:underline">Mental Health Guides</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-[#D4896E] mb-3">Newsletter</h5>
              <p className="text-gray-300 mb-3">Weekly insights for partners and families navigating postpartum life.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-md bg-[#051B24] border border-gray-700 text-gray-200"
                />
                <button className="px-4 py-2 bg-[#D4896E] text-[#051B24] rounded-md">Subscribe</button>
              </form>
            </div>

            <div>
              <h5 className="font-semibold text-[#D4896E] mb-3">Connect With Us</h5>
              <p className="text-gray-300 mb-3">hello@atlasjourney.com</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">YouTube</a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            © 2025 Atlas Journey. All rights reserved. &nbsp; • &nbsp;
            <a href="#" className="hover:underline">Privacy Policy</a> &nbsp; • &nbsp;
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ForMoms;
