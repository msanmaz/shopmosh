import React from 'react'
import Button from '../../common/button/CommonButton'

const Banner = () => {
    return (
        <>
        <div className='px-[2rem] bebasBold py-[2rem]'>
        <Button>See All Products</Button>

        </div>
            {/* bottom content */}
            <div className="md:px-[2.25rem] pl-[2.25rem] py-4 flex flex-row items-stretch justify-start md:flex-nowrap -ml-[2rem] flex-wrap">

                <div className='lg:w-[16rem] px-[2rem]'>
                    <div className='hidden lg:block'>
                        <div to='true'>
                            <div className='flex-grid flex-row justify-start -mx-0 flex-wrap'>
                                <div className='w-100 px-0'>
                                    <div className='mb-1'>
                                        <div className='bg-cover bg-center pb-[140%] h-0' style={{ backgroundImage: `url("https://d3fc22kf489ohb.cloudfront.net/assets/a92401f74905773f1eebada37cf3313f4337c98a/static/media/made-with-love.7c18d075.gif")` }}>

                                        </div>
                                    </div>

                                    <div className='w-100 px-0'>
                                        <div className='_3tExS h-100 flex flex-col justify-between'>
                                            <span className='heading uppercase text-xs'>
                                                Made with love in our IE production facility
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='w-full sm:w-full md:w-full lg:w-[83.33%] px-4 md:px-[2rem]'>
                    <div className='flex flex-row items-stretch justify-start -mx-2 flex-wrap'>
                        <div className=' sm:w-[41.6667%] px-2'>
                            <div className='pb-[2rem] sm:pb-0'>
                                <img alt='production facility' src="https://everpress.imgix.net/assets/a92401f74905773f1eebada37cf3313f4337c98a/static/media/mission.20307e52.jpg?w=826&h=1064&auto=format&bg=F7F8F9&fit=fill 1x,
            https://everpress.imgix.net/assets/a92401f74905773f1eebada37cf3313f4337c98a/static/media/mission.20307e52.jpg?w=826&h=1064&auto=format&bg=F7F8F9&fit=fill&q=80&dpr=2"/>
                            </div>
                        </div>
                        <div className='w-full sm:w-[58.33%] px-4 md:px-[2rem]'>

                            <div className='mb-[1rem] sm:mb-[2rem] md:mb-[3rem]'>
                                <span className='heading leading-none text-[2.5rem] sm:text-[2.66rem] bebasBold md:text-[2.66rem] lg:text-[7rem]'>WE&apos;RE CHANGING THE WAY THINGS GET MADE</span>
                            </div>

                            <div className='flex flex-row items-center justify-start -ml-[2rem] flex-wrap md:flex-nowrap'>
                                <div className='w-full sm:w-1/2 px-[2rem]'>
                                    <div className='mb-[2rem] sm:mb-0'>
                                        <div className='mb-[1rem] uppercase font-semibold text-[1.2rem] bebasBold md:text-[1.5rem]'>MISSION</div>
                                        <p className='text-[1rem] futuraMedium inline pr-1'>
                                            We&apos;re on a mission to empower creative independence in a commercial world.
                                        </p>
                                        <button className='p-1 uppercase text-center relative border-gray-400 border outline-none bg-transparent cursor-pointer rounded-md text-[0.55rem]'>
                                            more
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full sm:w-1/2 px-[2rem]'>
                                    <div className='mb-[2rem] sm:mb-0'>
                                        <div className='mb-[1rem]  uppercase font-semibold text-[1.2rem] bebasBold md:text-[1.5rem]'>SUSTAINABILITY</div>
                                        <p className='text-[1rem] pb-2 futuraMedium inline pr-1'>
                                            We&apos;re on a mission to empower creative independence in a commercial world.
                                        </p>
                                        <button className='p-1 uppercase text-center relative border border-gray-400 outline-none bg-transparent cursor-pointer rounded-md text-[0.55rem]'>
                                            more
                                        </button>

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

export default Banner