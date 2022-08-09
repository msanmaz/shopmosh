import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-full pt-[3rem] md:pt-[4rem] max-w-full" >


            <section className='flex flex-row flex-wrap gap-[0.2rem] min-h-[86vh]'>


                <div className='w-full rounded-none relative bg-overlay flex flex-row md:flex-col md:flex-1 bg-blend-darken object-cover bg-cover  bg-center' style={{backgroundImage:` url('/male_bg.jpg')`, '--overlay-colors': 'rgba(39,62,84,0.3), rgba(39,62,84,0.3)'}} >
                    <Link href='/men/New In'>
                    <button className='p-2 btn-outline border-white border-[3px] px-[2rem] text-white rounded-md absolute centerlayer'>Men</button>
                    </Link>
                </div>

                <div className='w-full rounded-none relative bg-overlay flex flex-row md:flex-col md:flex-1 bg-blend-darken object-cover bg-cover  bg-center' style={{backgroundImage:` url('/female_bg.jpg')`, '--overlay-colors': 'rgba(39,62,84,0.3), rgba(39,62,84,0.3)'}} >
                    
                <button className='p-2 btn-outline border-white border-[3px] px-[2rem] text-white rounded-md absolute centerlayer'>Women</button>


                </div>








            </section>





        </div>
    )
}

export default Hero