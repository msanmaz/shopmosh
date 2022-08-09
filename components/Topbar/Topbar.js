import React from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import Link from 'next/link'
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const endpoints = [
    {
        name: 'New Arrivals',
        slug: 'New In',
    },
    {
        name: 'Best Sellers',
        slug: 'Sale',

    },
    {
        name: 'Tshirt',
        slug: 'Tshirt & Longsleeves',

    },
    {
        name: 'Sweatshirt',
        slug: 'Sweatshirt & Hoodies',

    },
    {
        name: 'Jeanshosen',
        slug: 'Jeanshosen & Jogger',


    },
    {
        name: 'All',
        slug: 'All Products',
    },


]

const Topbar = ({isHome,isScrolled}) => {

    const router = useRouter()
    const [currentCategory, setCurrentCategory] = React.useState(router.query.id)

    const onCategoryClick = e => {
        console.log('click')
        // setCurrentCategory(e.target.id)
        // if(e.target.id === 'All'){
        //     router.push(`/men`, undefined, { shallow: true })
        // }
        // router.push(`/men/${e.target.id}`, undefined, { shallow: true })
    }

    const listItems = []

    const activeClass = 'border border-black'
    //memoized mapping for categories
    const categoryButtons = React.useMemo(
        () =>
            endpoints ? endpoints.map(({ name, slug, i }) => (

                <div
                    id={slug}
                    key={name}
                    onClick={onCategoryClick}

                    className={`bebas !font-[400] hover:border w-auto md:w-[35%] my-[0.1rem] overflow-hidden text-clip whitespace-nowrap hover:border-black flex justify-center text-gray-700 ${slug === currentCategory ? activeClass : ''}`}
                >
                    {name}
                </div>

            )) : null

            [currentCategory, listItems, endpoints]
    )



    categoryButtons.map((item, i) => {
        listItems.push(
            <SwiperSlide className={`max-w-[25%] mx-[0.5rem]`} key={`slide-${i}`}>
                {item}
            </SwiperSlide>
        )
    })
    return (
        <>

            <div className={`${isHome && !isScrolled ? 'opacity-0' : 'opacity-1'} transition-opacity pl-[1.1rem]   md:pl-[8rem] text-base z-[50] bg-white  !h-[3rem] w-full py-[0.7rem] items-center border-b border-gray-300`}>

               <Swiper
                        slidesPerView={'auto'}
                        grabCursor={true}
                    >
                        {listItems}

                    </Swiper>
            </div>
        </>
    )
}

export default Topbar