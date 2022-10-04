import React, { useMemo } from 'react'
import ProductCard from 'components/ProductCard/Product-Card'
import { readCache } from 'lib/cache'
import Link from 'next/link'
import Layout from 'common/Layout/lay-out'
import Crumbs from '../../common/Crumbs/crumbs-filter'
import Head from 'next/head'
const MenCategories = ({ cache }) => {
    console.log(cache)
    return (
        <>
        <Head>
        <title>RLVX | MEN</title>

        </Head>
            <div className='w-full'>

                <Crumbs />
                <div className="flex flex-wrap mx-[0.5rem] justify-center">
                    {cache.products.products.edges?.length >= 1 ?
                        cache.products.products.edges.map(product => (
                            <ProductCard height={24} key={product.node.id} product={product} />

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



export async function getStaticProps() {
    const cache = await readCache()

    return {
        props: {
            cache,
        }
    }
}
