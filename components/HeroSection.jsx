import React from 'react'
import Image from "next/image";



const uploadSteps = [
    {step:1, label:"Upload PDF", description:"Add your book file"},
    {step:2, label:"AI Processing", description:"We analyze the content"},
    {step:3, label:"Voice Chat", description:"Discuss with AI"},
]

const HeroSection = () => {
  return (
    <div className='wrapper mb-10'>
        <div className="library-hero-card">
            <div className="library-hero-content">
                {/* Left Part */}
                <div className="library-hero-text">
                    <h1 className="library-hero-title">Your Library</h1>
                    <p className="library-hero-description">
                        Convert your books into interactive AI conversations. 
                        Listen, learn, and discuss your favourite reads.
                    </p>

                    <button className="bg-white rounded-lg px-4 py-2 cursor-pointer">
                        + Add new book
                    </button>
                    
                </div>

                {/* Center Part */}
                <div className='library-hero-illustration'>
                    <Image src="/assets/Herosection_globe.png" alt="qbadcf" width={20} height={20} />
                </div>

                {/* Right Part */}
                <div className="library-steps-card">
                    {
                        uploadSteps.map( (step) => (
                            <div key={step.step} className="flex items-center gap-2 library-cta-primary">
                                <div className="library-step-number ">{step.step}</div>
                                <div>
                                    <h2 className="library-step-title">{step.label}</h2>
                                    <p className="library-step-description">{step.description}</p>
                                </div>
                            </div>
                        ) )
                    }

                </div>

            </div>


        </div>
      
    </div>
  )
}

export default HeroSection