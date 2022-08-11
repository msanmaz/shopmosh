import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const Crumbs = () => {
    const router = useRouter()
    return (
        <>
            <div className='flex pt-[1rem] md:pt-[2rem] justify-center flex-col flex-wrap md:flex-row w-full md:justify-between px-[1.4rem] md:pl-[6.3rem] md:pr-[6rem]'>
                <div className='flex items-center justify-center'>
                    <div className="text-sm bebas text-[#A49D9B] uppercase breadcrumbs">
                        <ul>
                            <li ><Link href='/'>Home</Link></li>
                            {router.query?.id ? <> <li ><Link href='/men'>Men</Link></li><li >{router.query.id}</li></> : <li><Link href='/men'>Men</Link></li>}

                        </ul>
                    </div>
                </div>



                <div className='md:flex justify-end'>

                    <div className='md:flex hidden flex-row items-center md:pr-[7rem]'>
                        <div className='futureMedium text-[#4a4a4a] !leading-4 !font-[600]  px-4'>Sorting</div>
                        <select className="select select-sm !futuraMedium w-full rounded-none border-1 focus:outline-none text-gray-500 border-gray-400 max-w-sm">
                            <option disabled defaultValue={'Release Date'}>Release Date</option>
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                            <option>Popularity</option>

                        </select>

                    </div>

                    <div className='flex flex-row justify-end py-[1rem]'>
                        <div className='soft-font pr-4'><p className='text-sm text-gray-600 bebas py-[0.7rem]'>1 of 7</p></div>
                        <div className='hover:bg-gray-200 hover:rounded-lg p-2 text-black bebas'>Next Page</div>
                    </div>

                </div>




            </div>
        </>
    )
}

export default Crumbs