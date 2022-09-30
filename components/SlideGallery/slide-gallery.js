import React from "react"
import {Swiper,SwiperSlide} from "swiper/react"
import ProductCard from "../ProductCard/Product-Card";

import SwiperCore, { Navigation } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";




const SlideGallery = ({ products }) => {

    console.log(products)
    const swiperRef = React.useRef(null)
  
    return (
      <>

        <div className="flex w-full flex-col md:pl-0 pl-[1rem] my-[0.5rem] md:my-[2rem]">
  
          <div className="flex w-full">
  
            <div className="flex w-full md:px-[2rem] flex-col">
              <div className="text-xl bebasBold">Community Favourites</div>
              <div className="mb-4">Top picks from the shop</div>
            </div>
  

  
            {/* <div className="flex px-4">
              <IconButton id="previousButton" mr={2} rounded={'3xl'} icon={<ChevronLeftIcon />} onClick={() => swiperRef.current.swiper.slidePrev()} />
              <IconButton id="nextButton" rounded={'3xl'} icon={<ChevronRightIcon />} onClick={() => swiperRef.current.swiper.slideNext()} />
            </div> */}
  
          </div>
  
                <div className="max-w-full md:pl-[2rem]">
                <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            ref={swiperRef}
            grabCursor={true}
          >
            {products.products.products.edges.map(product => <SwiperSlide key={product.id}> <ProductCard product={product} key={product.id} /> </SwiperSlide>)}
  
  
          </Swiper>

                </div>

        </div>
  
      </>
    )
  }

  export default SlideGallery