import React, { useMemo } from 'react'
import ProductCard from 'components/ProductCard'
import Head from 'next/head'
import { readCache } from 'lib/cache'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from 'components/NavBar'
const MenCategories = ({ cache }) => {
    return (
<>
        <NavBar/>
        <div className='w-full'>


            <div className='flex md:pt-[4rem] justify-center flex-col flex-wrap md:flex-row w-full md:justify-between px-[1.4rem] small:px-[5rem] large:px-[rem]  xlarge:px-[4rem]'>
                <div className='flex items-center justify-center'>
                <div className="text-sm bebas text-[#A49D9B] uppercase breadcrumbs">
                        <ul>
                            <li ><Link href='/'>Home</Link></li>
                            <li ><Link href='/men'>Men</Link></li>
                        </ul>
                    </div>
                </div>


               
                <div className='md:flex justify-end'>
                    <div className='md:flex hidden flex-row items-center md:pr-[7rem]'>
                        <div className='bebas px-4'>Sorting</div>
                        <select className="select select-sm w-full rounded-none border-1 focus:outline-none border-gray-400 max-w-sm">
                            <option disabled defaultValue={'Release Date'}>Release Date</option>
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                            <option>Popularity</option>

                        </select>

                    </div>

                    <div className='flex flex-row justify-end pt-[1rem]'>
                    <div className='soft-font pr-4'><p className='text-sm text-gray-600 bebas py-[0.7rem]'>1 of 7</p></div>
                    <div className='hover:bg-gray-200 hover:rounded-lg p-2 text-black bebas'>Next Page</div>

                </div>
                </div>




            </div>


            <div className="flex flex-wrap mx-[0.5rem] justify-center">
                {cache.products.edges.length >= 1 ?
                    cache.products.edges.map(product => (
                        <ProductCard height={27} key={product.node.id} product={product} />

                    )) : <div className='text-2xl bebas'>No Products Found</div>
                }

            </div>

        </div>
        </>
    )
}
export default MenCategories





export async function getStaticProps() {
    const cache = await readCache()

    return {
        props: {
            cache,
        }
    }
}
