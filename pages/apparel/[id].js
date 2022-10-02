import React, { useMemo } from 'react'
import ProductCard from 'components/ProductCard/Product-Card'
import { readCache } from 'lib/cache'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from 'common/Layout/lay-out'
import Crumbs from '../../common/Crumbs/crumbs-filter'
import Head from 'next/head'

const MenCategories = ({ cache }) => {

    const data = cache.products.products.edges;
    const router = useRouter()

    const categoryProducts = useMemo(() => {
        // if there aren't any products return an empty array, which in the rendering function will turn into 0 product divs
        if (!data) return []

        // if currentCategory is not set (if you forgot default value for example) return all products
        // also if currentCategory is 'all' skip filtering the products because we obviously return all of them
        if (!router.query.id) return data

        if (router.query.id === 'All') return data
        
        if (router.query.id === 'Sale') return data

        if (router.query.id === 'New In') return data
        // here we return any product who's categories include one with the slug equaling the value of 'currentCategory'
        return data.filter(p => p.node.productType === router.query.id)

    }, [data, router.query.id])

    const name = router.query.id

    return (
        <>
        <Head>
        <title>RLVX | {name}</title>

        </Head>
        <Crumbs/>
            <div className='w-full'>
                <div className="flex flex-wrap justify-center ">
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

MenCategories.getLayout = (page) => {
    return <Layout title={'MEN'}>{page}</Layout>
}


export async function getServerSideProps() {
    const cache = await readCache()

    return {
        props: {
            cache,
        }
    }
}
