import React from 'react'

function About() {
  return (
    <div className='w-full  px-2 py-20 rounded-2xl bg-[#CDEA68] text-black'>
        <div>
          {["Ochi is a strategic partner for fast-growing tech","businesses that need to raise funds, sell products,","ex­plain com­plex ideas, and hire great people."].map((item,index)=>{
            return <h1 className='px-10 text-[4vw] leading-none font-["Neue_Montreal] font-light'>{item}</h1>
          })}
        </div>
        <div className='w-full mt-10 border-t-2 border-[#a1b562] flex'>
          <p className='py-5 px-10 font-light font-[Neue_Montreal]'>What you can expect:</p>
          <div className='font-light py-5 font-[Neue_Montreal] w-[300px] ml-[500px] '>
             <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
             <p className='mt-10'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
             
          </div>
          <div className='font-light py-10 ml-[150px] mt-20'>
                {["S:","Instagram","Behance","Facebook","Linkedin"].map((item,index)=>{
                  return <div>
                    <a key={index} className={` capitalize font-light ${index==1 &&"mt-32"}`}>{item}</a>
                  </div>
                })}
          </div>

        </div>
        <div className=' w-full border-t-2 border-[#a1b562] mt-[50px] flex gap-5'>
                <div className=' w-1/2 py-[10px] ml-10 font-["Neue_Montreal"]'>
                  <h1 className='text-6xl font-lighter  ' >Our approach:</h1>
                  <button className='uppercase px-10 py-6 mt-[20px] rounded-full bg-zinc-900 text-white flex gap-5 justify-between items-center '>Read more
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                  </button>
                </div>
                <div className='w-[600px] h-[70vh] bg-[#b0c859] mt-[20px] rounded-3xl' ></div>

        </div>
    </div>
  )
}

export default About;