import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Thumbnail from 'components/Thumbnail/thumb-nail'

export const MobileGallery = ({product}) => {
    const nextTwo = [product[0].node.originalSrc, product[1].node.originalSrc];

    const listItems = []
    nextTwo.map((item, i) => {
        listItems.push(
            <SwiperSlide className='swiperProduct' key={`slide-${i}`}>
               <Thumbnail size='full' thumbnail={item} className='px-4'/>
            </SwiperSlide>
        )
    })


    return (
        <div >
            <Swiper pagination={true} modules={[Pagination]} id='mobileswiper' className="mySwiper">
                    {listItems}
            </Swiper>
        </div>
    )
}