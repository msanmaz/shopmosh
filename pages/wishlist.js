import React from 'react'
import Layout from 'common/Layout/lay-out'
import Link from 'next/link'
import { readCache } from 'lib/cache'
import WishListTable from 'components/WishList/WishListTable'
import Head from 'next/head'
const WishList = ({cache}) => {
    return (
        <>
        <Head>
        <title>MOSH | WishList</title>
        </Head>
        <div className='w-full px-[1.5rem] md:px-[10rem]'>
            <div className='flex pt-[1rem] md:pt-[2rem] pb-[1rem] w-full'>
                <div className='flex items-center justify-center'>
                <div className="text-sm bebas text-[#A49D9B] uppercase breadcrumbs">
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/note'>Wish List</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='flex flex-col pb-[1.5rem]'>
                <h1 className='text-5xl bebasBold'>Wish List</h1>
                <p className='futuraMedium py-2 text-[#4a4a4a] font-medium'>Save your personal favorits until your next visit!</p>
                <p className='futuraMedium text-[#4a4a4a] font-medium'>Simply add your desired product to the wish list and RELAVOUX will save it for you. Thus you are able to call up your selected products the next time you visit our online shop.</p>
            </div>

            <WishListTable items={cache} />
            </div>
        </>
    )
}


export async function getStaticProps() {
  
    const cache = await readCache()

    return {
        props: { cache }
    }
  }
  



export default WishList


WishList.getLayout = (page) => {
    return <Layout title={'HOME'}>{page}</Layout>
  }
  