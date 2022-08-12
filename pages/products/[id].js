import React from 'react'
import Layout from 'common/Layout/lay-out'
import { readCache } from 'lib/cache'
import { getProduct } from 'lib/shopify'
import Gallery from '../../components/Gallery/Gal-lery'
import { useRouter } from 'next/router'
import ProductForm from '../../components/Product-Form/ProductForm'
import { MobileGallery } from '../../components/MobileGallery.js/mobilegallery'
import Link from 'next/link'
import { useWindowSize } from '../../lib/hooks/useWindowSize'
import Head from 'next/head'



const ProductDetail = ({ products }) => {
    const router = useRouter()
    const [currentCategory, setCurrentCategory] = React.useState(router.query.id)
    const size = useWindowSize()
    const title = `RLVX | ${products.title}`
    return (
        <>
        <Head>
        <title>{title}</title>

        </Head>
            <div className='flex pt-[1rem] md:pt-[2rem] pb-[1rem] justify-center flex-col flex-wrap md:flex-row w-full md:justify-between px-[1.4rem] md:pl-[10.2rem] md:pr-[10.5rem]'>
                <div className='flex items-center justify-center'>
                    <div className="text-sm bebas text-[#A49D9B] uppercase breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/men'>Men</Link></li>
                            <li>{currentCategory}</li>
                        </ul>
                    </div>
                </div>

            </div>

            {size.width >= '768' ? <div className='px-[9.5rem] flex flex-row'>
                <div className='w-1/2'>
                    <Gallery product={products.images.edges} />
                </div>

                <div className='w-1/2'>
                    <ProductForm product={products} variants={products.variants.edges} />

                </div>
            </div>
                : <div className='flex pb-[2rem] flex-col w-full'>
                    <div className='px-[1rem]'>
                    <MobileGallery product={products.images.edges} />

                    </div>
                    <div className='justify-center'>
                        <ProductForm product={products} variants={products.variants.edges} />

                    </div>


                </div>
            }




        </>
    )
}


ProductDetail.getLayout = (page) => {
    return <Layout title={'Product'}>{page}</Layout>
}


export async function getStaticPaths() {
    const data = await readCache()
    const paths = data.products.products.edges.map(item => {
        const id = String(item.node.handle)

        return {
            params: { id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const products = await getProduct(params.id)
    const featured = await readCache()
    return {
        props: {
            featured,
            products,
        }
    }
}


export default ProductDetail
