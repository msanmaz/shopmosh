import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductCard from "../ProductCard/Product-Card";



// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";




const SlideGallery = ({ products }) => {


  const listItems = []
  products.products.products.edges.map((product, i) => {
    listItems.push(
      <SwiperSlide key={`slider-${i}`} id='gallery-items' > <ProductCard height={['14rem']} product={product} /> </SwiperSlide>
    )
  })


  return (
    <>

      <div className="flex w-full flex-col md:pl-0 pl-[1rem] my-[0.5rem] md:my-[2rem]">

        <div className="flex w-full">

          <div className="flex w-full md:px-[2rem] flex-col">
            <div className="text-xl bebasBold">Community Favourites</div>
            <div className="mb-4 py-2">Top picks from the shop</div>
          </div>
        </div>

        <div className="max-w-full md:pl-[2rem]">
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}

            grabCursor={true}
          >
{listItems}


          </Swiper>

        </div>

      </div>

    </>
  )
}

export default SlideGallery