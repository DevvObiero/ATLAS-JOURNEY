import React from 'react'

const ForPartners = () => {
  return (
    <div className="bg-[#051B24] text-white px-6 py-16">
      
      {/* Hero Section */}
<section className="max-w-6xl mx-auto mb-16 py-10 px-6 md:flex md:items-center md:gap-10">
  {/* Left Side - Text */}
  <div className="md:w-1/2 text-left">
    <h1 className="text-4xl blur-fade-in md:text-5xl font-bold mb-4 text-[#D4896E]">
      You're Not Supposed to Have All the Answers
    </h1>
    <p className="text-gray-300 text-lg md:text-xl">
      But you do need the tools to show up, support, and lead your family through the fourth trimester. Here's where to start.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 mt-8 md:mt-0">
    <img
      src="https://babysittingagency.fkfbungoma.co.ke/assets/slide4_1762281365493-Bv0LyuBO.jpg" 
      alt="Partners supporting postpartum"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </div>
</section>


      {/* Why Postpartum Feels Impossible */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-[#D4896E] mb-4">
          Why Postpartum Feels Impossible for Partners
        </h2>
        <p className="text-gray-300 mb-6">
          Let's be honest: most postpartum resources treat partners like background characters. You're the "helper," the "support person," the one who "babysits" (even though it's your own kid). But here's the reality: postpartum is hard for partners too.
        </p>
        <p className="text-gray-300 mb-6">
          You're watching your spouse struggle — physically, mentally, emotionally — and every attempt to help seems to make things worse. You're exhausted from night shifts, stressed about finances, and maybe even dealing with your own postpartum anxiety or depression (yes, dads get it too — 1 in 10). Meanwhile, no one's checking in on you. Everyone asks about mom and baby. And you're left wondering if you're doing anything right.
        </p>
        <p className="text-gray-300 font-medium">
          Here's what we know:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
          <li>Partners who feel equipped are more confident, engaged, and supportive</li>
          <li>Relationships that prioritize communication and teamwork during postpartum are more resilient</li>
          <li>When partners understand the emotional and psychological shifts happening, they can respond more effectively</li>
        </ul>
      </section>

      {/* Core Resources Grid */}
      <section className="max-w-6xl mx-auto mb-16 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#263940] p-6 rounded-lg border-l-4 border-[#D4896E] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">The Prepared Partner Seminar</h3>
            <p className="text-gray-300 mb-4">
              The Complete Guide to Showing Up During Postpartum
            </p>
            <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
              <li>Understanding postpartum mood and anxiety disorders</li>
              <li>Communication strategies that actually work</li>
              <li>The 5 things your spouse needs most</li>
              <li>Navigating sleep deprivation and intimacy shifts</li>
              <li>How to support without hovering</li>
            </ul>
            <p className="text-gray-300 italic mb-4">Format: 3-email series with actionable strategies</p>
          </div>
          <button className="mt-auto px-4 py-2 bg-[#D4896E] text-[#051B24] rounded hover:bg-[#bf7c64] transition">
            Start the Seminar →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#051B24] p-6 rounded-lg border-l-4 border-[#D4896E] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Partner's Guide to Postpartum Mental Health</h3>
            <p className="text-gray-300 mb-4">
              What to Watch For and How to Help
            </p>
            <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
              <li>Difference between baby blues, PPD, and PPA</li>
              <li>Warning signs your partner may be struggling</li>
              <li>What NOT to say (and what to say instead)</li>
              <li>When to seek professional help</li>
              <li>Resources for partners with their own PPD</li>
            </ul>
            <p className="text-gray-300 italic mb-4">Format: Comprehensive guide with checklists</p>
          </div>
          <button className="mt-auto px-4 py-2 bg-[#D4896E] text-[#051B24] rounded hover:bg-[#bf7c64] transition">
            Download the Guide →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#263940] p-6 rounded-lg border-l-4 border-[#D4896E] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">The Postpartum Communication Toolkit</h3>
            <p className="text-gray-300 mb-4">
              How to Talk When Everything Feels Hard
            </p>
            <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
              <li>The 5-minute check-in framework</li>
              <li>Navigate conflict when you're both exhausted</li>
              <li>Express needs without blame</li>
              <li>Reconnect when you feel like roommates</li>
              <li>Build a postpartum plan together</li>
            </ul>
            <p className="text-gray-300 italic mb-4">Format: Downloadable PDF with templates</p>
          </div>
          <button className="mt-auto px-4 py-2 bg-[#D4896E] text-[#051B24] rounded hover:bg-[#bf7c64] transition">
            Get the Toolkit →
          </button>
        </div>
      </section>

      {/* 5 Things You Can Do Right Now */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-[#D4896E] mb-6">5 Things You Can Do Right Now</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-4">
          <li>Ask "What would feel most supportive right now?" instead of "What can I do?"</li>
          <li>Take one thing off her mental load completely.</li>
          <li>Validate feelings without trying to solve them.</li>
          <li>Protect her rest, even when she resists.</li>
          <li>Check in on your own mental health. Take 10 minutes today to assess how YOU'RE doing.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto text-center py-12 bg-[#263940] rounded-lg">
        <h2 className="text-3xl font-semibold text-[#D4896E] mb-6">
          You Don't Have to Figure This Out Alone
        </h2>
        <p className="text-gray-300 mb-6">
          Join thousands of partners who are navigating postpartum with confidence, clarity, and real support.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-[#D4896E] text-[#051B24] rounded hover:bg-[#bf7c64] transition">
            Download the Free Newborn Checklist
          </button>
          <button className="px-6 py-3 border border-[#D4896E] text-[#D4896E] rounded hover:bg-[#D4896E] hover:text-[#051B24] transition">
            Join the Newsletter
          </button>
        </div>
      </section>

    </div>
  )
}

export default ForPartners
