import React, { useState } from 'react'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Our Story Section */}
      <div className="flex items-center justify-center px-6 py-30" style={{ backgroundColor: '#263940' }}>
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

      {/* Kevin's Story Section */}
      <div className="px-6 py-20" style={{ backgroundColor: '#051A23' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1">
           <div className="w-full h-[650px] bg-gray-700 rounded-lg overflow-hidden">
  <img
    src="./img2.jpg"
    alt="Kevin with Atlas"
    className="w-full h-full object-cover"
  />
</div>

            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-white">
                From Kevin: The Partner Who Felt Helpless
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  I thought I was prepared. I'm a problem-solver by nature. Give me a challenge, and I'll figure it out. 
                  But watching Sammy struggle with postpartum anxiety while I stood on the sidelines feeling completely useless? 
                  That was a different kind of hard.
                </p>
                
                <p className="font-semibold" style={{ color: '#E8C5A8' }}>
                  The breaking point came around week 8.
                </p>
                
                <p>
                  Sammy was crying in the nursery at 3 AM — not because Atlas was crying, but because she couldn't calm him 
                  and felt like she was failing. I tried to help. I tried to fix it. I tried to take over. And every single 
                  thing I did made it worse.
                </p>

                {isExpanded && (
                  <>
                    <p>
                      I remember standing in our hallway, furious at myself for being so ineffective. I'd read all the books 
                      about swaddling and wake windows and safe sleep. But none of them told me what to do when my wife was 
                      drowning and I was making it worse by trying to save her.
                    </p>
                    
                    <p className="font-semibold" style={{ color: '#E8C5A8' }}>
                      That's when I realized: we were solving the wrong problem.
                    </p>
                    
                    <p>
                      Postpartum isn't a logistics problem. It's an emotional, psychological, and relational challenge that 
                      requires a completely different toolkit. And partners — especially dads — are given almost zero guidance 
                      on how to navigate it.
                    </p>
                    
                    <p>
                      So I went looking for resources. Partner-focused content. Evidence-based strategies for supporting a 
                      postpartum spouse. Real talk from other dads about what this season is actually like.
                    </p>
                    
                    <p className="font-semibold text-white">
                      And I found almost nothing.
                    </p>
                    
                    <p className="text-xl font-semibold" style={{ color: '#E8C5A8' }}>
                      That's why we built Atlas Journey.
                    </p>
                  </>
                )}
                
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#E8C5A8] font-medium hover:underline"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="bg-[#263940] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            From Sammy: The Mom Who Needed More Than "You've Got This"
          </h2>
          
          <div className="space-y-4 text-gray-200">
            <p>
              I thought I knew what postpartum would be like. I'm a researcher. I read every book, 
              followed every expert, and created detailed plans for breastfeeding, sleep schedules, 
              and recovery.
            </p>
            
            <p>
              But no one prepared me for the rage. The bone-deep exhaustion that made me feel like 
              a shell of myself. The anxiety that convinced me something terrible was about to 
              happen at any moment.
            </p>
            
            <p className="font-semibold text-lg">
              That's the gap Atlas Journey fills.
            </p>
          </div>
          
          <button className="text-white underline hover:text-gray-300 transition-colors font-medium">
            Read More →
          </button>
        </div>
        
        {/* Image Placeholder */}
      <img 
  src="https://babysittingagency.fkfbungoma.co.ke/assets/sammy_optimized-WD1uULLr.jpg" 
  alt="Sammy's photo" 
  className="rounded-lg w-full h-1009x object-cover"
/>
      </div>
    </div>

    </div>
  )
}

export default About