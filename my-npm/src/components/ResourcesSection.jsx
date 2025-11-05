import { ArrowRight, Users, Heart, Mic, BookOpen } from 'lucide-react';



export default function ResourcesSection() {
  return (
    <div className="min-h-screen -mt-8 bg-[#051A23]  py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-amber-200">
            Built for the Real Postpartum Experience
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Whether you're a partner learning how to show up or a mom who needs support, 
            we're here with practical tools and honest conversations.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Partners Card */}
          <div className="bg-[#051A23] rounded-xl p-8 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E8C5A8] bg-opacity-20 flex items-center justify-center">
              <Users className="w-6 h-6" style={{ color: "black" }} />
            </div>
            <h3 className="text-2xl font-bold text-gray-200">
              For Partners Who Want to Show Up
            </h3>
            <p className="text-gray-200">
              You don't need to "fix" everything. You need to know what actually helps. 
              Our seminars give you the roadmap to support without hovering, connect without solving, 
              and lead your family with confidence.
            </p>
            <button className="flex items-center gap-2 text-[#E8C5A8] font-medium hover:gap-3 transition-all">
              Explore Partner Resources
              <ArrowRight className="w-4 h-4" style={{ color: "white" }} />
            </button>
          </div>

          {/* Moms Card */}
          <div className="bg-[#051A23] rounded-xl p-8 shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#E8C5A8] bg-opacity-20 flex items-center justify-center">
              <Heart className="w-6 h-6" style={{ color: "black" }} />
            </div>
            <h3 className="text-2xl font-bold text-gray-200">
              For Moms Who Need Their Partner to Get It
            </h3>
            <p className="text-gray-200">
              Sometimes the hardest part isn't your own struggle — it's helping your partner understand. 
              Our resources focus on communication, boundaries, and creating a postpartum plan that actually works.
            </p>
            <button className="flex items-center gap-2 text-[#E8C5A8] font-medium hover:gap-3 transition-all">
              Resources for Moms
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Full Width Cards */}
        <div className="space-y-6">
          {/* Podcast Card */}
          <div className="  rounded-xl p-8 text-white border-2 shadow-md hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <Mic className="w-6 h-6 text-[#E8C5A8]" />
                  <h3 className="text-2xl font-bold">Honest Conversations That Matter</h3>
                </div>
                <p className="text-white text-opacity-95">
                  Real talk about postpartum life — from mental health and sleep deprivation 
                  to relationship dynamics and identity shifts. No fluff, no judgment.
                </p>
              </div>
               <button className="px-6 py-3 border-2 border-[#E8C5A8] text-[#E8C5A8] font-medium rounded-md hover:bg-[#E8C5A8] hover:text-white transition whitespace-nowrap">
                Listen Now
              </button>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-[#051A23] border-2 border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#E8C5A8]" />
                  <h3 className="text-2xl font-bold text-gray-200">Evidence-Based Guidance You Can Trust</h3>
                </div>
                <p className="text-gray-200">
                  Every piece grounded in research, vetted by experts, filtered through lived experience. 
                  We cut through the noise to give you what actually works.
                </p>
              </div>
              <button className="px-6 py-3 border-2 border-[#E8C5A8] text-[#E8C5A8] font-medium rounded-md hover:bg-[#E8C5A8] hover:text-white transition whitespace-nowrap">
                Read the Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}