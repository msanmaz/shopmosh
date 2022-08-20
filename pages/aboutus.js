import React from 'react'
import RightSide from 'components/AboutUs/right_side'
import Layout from 'common/Layout/lay-out'
import LeftSide from '../components/AboutUs/left_side'

const AboutUs = () => {
  return (
    <>
    <div className='flex w-full flex-col md:flex-row'>
    <div className='w-full md:w-1/2'>
    <RightSide/>

    </div>
    <div className='md:w-1/2 w-full'>
    <LeftSide/>

    </div>
    </div>
    </>
  )
}

export default AboutUs


AboutUs.getLayout = (page) => {
    return <Layout>{page}</Layout>
  }
  