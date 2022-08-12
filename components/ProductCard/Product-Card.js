import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '/lib/helpers'
import { GiHearts } from 'react-icons/gi'
import { BsEyeFill } from 'react-icons/bs'
import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/shopContext'
import Thumbnail from '../Thumbnail'
import { useEffect, useCallback } from 'react'
import { TiTick } from 'react-icons/ti'
import { IconContext } from "react-icons";

const ProductCard = ({ product }) => {
  const { wishList, setWishList, } = useContext(CartContext)

  const { handle, title } = product.node
  const { altText, originalSrc } = product.node.images.edges[0].node
  const originalSrc_Second = product.node.images.edges[1]?.node
  const price = product.node.priceRange.minVariantPrice.amount
  const [isHovering, setIsHovered] = useState(() => { return false });
  const [isHovering1, setIsHovered1] = useState(() => { return true });
  const [added, setAdded] = useState(() => { return { message: 'Speichern!', show: false } });

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setWishList(prevState => {
      return { ...prevState, items: prevState.items.concat(product.node.id) }
    });
    setAdded({ message: 'Added', show: true })
    setTimeout(() => {
      setAdded({ message: "Speichern!", show: false });
    }, 2000);
  }, [wishList]);



  const onMouseEnter = () => { setIsHovered1(false), setIsHovered(true) };
  const onMouseLeave = () => { setIsHovered1(true), setIsHovered(false) };

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(wishList));
  }, [wishList]);


  return (

    <a className="group w-full md:w-[33%] lg:w-[30%] px-4 pt-4">
    <div className="w-full bg-gray-200 rounded-none overflow-hidden">
      <div className={`relative  cursor-pointer h-[26rem] max-h-[26rem] md:h-[30rem] md:max-h-[30rem]`} onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>

        <Transition
          show={isHovering1}
          enter="ease duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
         <Thumbnail images={originalSrc} size='full'/>
  </Transition>


        <Transition show={isHovering}>
          <Transition.Child
            enter="ease-in-out duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
        <Thumbnail images={originalSrc_Second?.originalSrc} size='full'/>

          </Transition.Child>
          <div className='absolute bottom-0 w-full '>
            <Transition.Child
              show={isHovering}
              enter="transition-[2rem] ease duration-300"
              enterFrom="translate-y-full"
              enterTo="-translate-y-0"
              leave="transition-[2rem] ease duration-300"
              leaveFrom="-translate-y-0"
              leaveTo="translate-y-full"
              className={'bg-[rgba(255,255,255,0.5)]'}
            >
              <div className='flex flex-row h-[3rem] w-full'>
                <div className='w-1/2 px-4 justify-start flex flex-row items-center'>
                  <BsEyeFill size={20} />
                  <div className='bebas text-gray-500 px-4'>Schnellansicht</div>
                </div>
                <IconContext.Provider value={{ color: `${added.show ? 'green' : 'black'}`}}>
                  <div onClick={handleClick} className='w-1/2 justify-end px-2 flex flex-row items-center'>
                    {added.show ? <TiTick size={20} /> : <GiHearts size={20} />}
                    <div className={`${added.show ? 'text-green-700 bebas px-2' : 'text-gray-500 bebas px-4'}  `}>{added.message}</div>

                  </div>

                </IconContext.Provider>
              </div>




            </Transition.Child>
          </div>
        </Transition>

      </div>
    </div>

    <Link href={`/products/${product.node.handle}`}>
      <div className='flex flex-col justify-center items-center'>
        <h3 className="mt-4 md:text-base font-medium text-gray-700 bebeasBook uppercase product-title">{title}</h3>
        <p className="mt-1 bebas text-lg">{formatter.format(price)}</p>
      </div>
    </Link>


  </a>

  )
}

export default React.memo(ProductCard)