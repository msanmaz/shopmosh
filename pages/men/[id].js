import React, { useMemo } from 'react'
import ProductCard from 'components/ProductCard/Product-Card'
import { readCache } from 'lib/cache'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from 'components/NavBar/Nav-Bar'
import Head from 'common/Head'


const MenCategories = ({ cache }) => {

    const data = cache.products.edges;
    const router = useRouter()

    console.log(router.query.id,'id')
    const categoryProducts = useMemo(() => {
        // if there aren't any products return an empty array, which in the rendering function will turn into 0 product divs
        if (!data) return []

        // if currentCategory is not set (if you forgot default value for example) return all products
        // also if currentCategory is 'all' skip filtering the products because we obviously return all of them
        if (!router.query.id) return data

        if (router.query.id === 'All') return data

        // here we return any product who's categories include one with the slug equaling the value of 'currentCategory'
        return data.filter(p => p.node.productType === router.query.id)

    }, [data,router.query.id])

    return (
<>
<Head
        title={router.query.id}
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
        <NavBar/>
        <div className='w-full'>


            <div className='flex pt-[6rem] md:pt-[9rem] justify-center flex-col flex-wrap md:flex-row w-full md:justify-between px-[1.4rem] tablet:px-[2rem] md:pl-[10.2rem] md:pr-[10.5rem]'>
                <div className='flex items-center justify-center'>
                <div className="text-sm bebas text-[#A49D9B] uppercase breadcrumbs">
                        <ul>
                            <li ><Link href='/'>Home</Link></li>
                            <li ><Link href='/men'>Men</Link></li>
                            <li >{router.query.id}</li>
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

                    <div className='flex flex-row justify-end py-[1rem]'>
                    <div className='soft-font pr-4'><p className='text-sm text-gray-600 bebas py-[0.7rem]'>1 of 7</p></div>
                    <div className='hover:bg-gray-200 hover:rounded-lg p-2 text-black bebas'>Next Page</div>

                </div>
                </div>




            </div>


            <div className="flex flex-wrap mx-[0.5rem]">
                {categoryProducts.length >= 1 ?
                    categoryProducts.map(product => (
                        <ProductCard height={27} key={product.node.id} product={product} />

                    )) : <div className='text-2xl bebas'>No Products Found</div>
                }

            </div>

        </div>
        </>
    )
}
export default MenCategories





export async function getStaticPaths() {
    const data = await readCache()
    const paths = data.products.edges.map(item => {
        const id = String(item.node.productType)

        return {
            params: { id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps() {
    const cache = await readCache()

    return {
        props: {
            cache,
        }
    }
}
