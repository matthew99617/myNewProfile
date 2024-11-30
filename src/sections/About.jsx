import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    alert("Copied to clipboard")
    navigator.clipboard.writeText('matthewtai0617@gmail.com');

    setHasCopied(true)

    setTimeout(() => { 
      setHasCopied(false) 
    }, 2000)

  }



  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className="col-span-1 xl:row-span-3">
          <div className='grid-container'>
            <img src='assets/grid1.png' alt="grid-1" className='w-full sm:h-[276px] h0fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi, I'm Matthew</p>
              <p className='grid-subtext'>With 2 years of experience, I have honed my skills in frontend and backend development, with a focus on building responsive and user-friendly websites and android applications.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='assets/grid2.png' alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />

            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>I specialize in Kotlin, Javascript and Node.js with a focus on Android Development and Web Development. </p>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpicity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely across most timezones.
              </p>
              <p className='grid-subtext'>
                I'm based in Hong Kong, with remote work available.
              </p>
              <Button name="Get In Touch" disable isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src="assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

            <div>
              <p className='grid-headtext'>
                My Passion for Coding
              </p>
              <p className='grid-subtext'>
                Completing a project brings an incredible sense of achievement. This feeling of accomplishment fuels my passion and motivates me to tackle new challenges. Each milestone reinforces my dedication, driving me to continue learning and growing in my field.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2' >
          <div className='grid-container'>
            <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

            <div className='space-y-2'>
              <div className='copy-container' onClick={handleCopy}>
                <p className='grid-subtext text-center'>Contact me</p>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" className='w-6 h-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About