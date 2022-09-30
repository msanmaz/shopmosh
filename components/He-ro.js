import React from 'react';
import { useRouter } from 'next/router';


function HeroSecond() {
    const router = useRouter()
    let count = 0
    let slideInterval;
    const slideRef = React.useRef()
    const images = ['https://images.prismic.io/everpress/2198bc48-7036-491e-ab52-ccb701024693_homepagecrop2.jpg?auto=compress,format','https://images.prismic.io/everpress/6056d88d-01de-447c-9865-dfee9db268a2_ARTISTS+TO+WATCH_+POLLY+BROWN_+EVPERESS_+HOMEPAGE_2.jpg?auto=compress,format&rect=0,515,1779,1067&w=2000&h=1200']
    const [currentIndex,setCurrentIndex] = React.useState(0)

    const removeAnimation = () => {
        slideRef.current.classList.remove('_1GHbd')
    }
 
 
    
    React.useEffect(() => {
        slideRef.current.addEventListener('animationed', removeAnimation)
        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)

        slideInterval = setInterval(() => {
            nextClick()
        }, 7000);

        return () => {
            clearInterval(slideInterval)
        }
    },[])

    const startSlider = () => {
      slideInterval = setInterval(() => {
            nextClick()
        }, 7000);
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    const nextClick = () => {
        count = (count +1) % images.length
        setCurrentIndex(count)
        slideRef.current.classList.add('_1GHbd')
    }

 
   


    return (
        <>
            <div className='pb-[95%] h-0 relative bg-black flex flex-col justify-between md:h-[70vh] md:p-0'>
                <div className='z-10 pt-12'>
                    <div className='_3Rh31 _3HsKn w-full mx-auto px-2 md:px-5 max-w-[2000px]'>
                        <div className='w-full' style={{ maxWidth: '614px' }}>
                            <div className='py-3'>
                                <h1 className='heading px-[0.8rem] !bebas uppercase text-2xl md:text-xl lg:text-[3rem] md:leading-[1.15] text-white'>
                                    <span>real designs
                                        <br />
                                        by real artists for real people
                                    </span>
                                </h1>

                            </div>
                        </div>


                    </div>

                </div>


                            <div className={`mx-0 flex flex-col justify-end oVl3V absolute inset-0  pointer-events-none`}>
                                <div ref={slideRef} id='herob'  className='_2MKKw !opacity-50 bg-cover bg-center absolute inset-0' style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                                <div className=''>
                                    <div className='_3Rh31 _3HsKn w-full mx-auto px-2 md:px-[2rem] max-w-[2000px]'>
                                        <div className='py-2 sm:py-4 md:py-8'>
                                            <div className='w-full' style={{ maxWidth: '460px' }}>
                                                <h2 className='heading bebas text-m sm:text-l md:text-[2rem] text-white'>
                                                   MOSH
                                                </h2>
                                                <div className='flex items-end'>
                                                    <p className='text-sm bebas text-gray-300 inline pr-1'>
                                                        <span>Shop our curated edit of products we can&apos;t get enough of.</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


   

 



            </div>

        </>
    )
}

export default HeroSecond