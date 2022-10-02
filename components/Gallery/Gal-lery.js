import Image from 'next/image'
import React from 'react'
import { Transition } from '@headlessui/react'
import Thumbnail from '../Thumbnail/thumb-nail'

const Gallery = ({ product }) => {


    const isClick = React.useRef(true)
    const secondPhoto = React.useRef(false)
    const [x, Setx] = React.useState(false)
    const nextTwo = [product[0].node.originalSrc, product[1].node.originalSrc];



    const handler = () => {
        isClick.current = !isClick.current
        secondPhoto.current = !secondPhoto.current

        Setx(Math.random());

    }

    const handlerTwo = () => {
        secondPhoto.current = !secondPhoto.current
        isClick.current = !isClick.current

        Setx(Math.random());
    }






    return (
        <div className='parent'>

            <div className='div1' onClick={handler} > <Image src={nextTwo[0]}  alt='product-image' width={150} className='object-contain' height={150} /></div>
            <div className='div2' onClick={handlerTwo}  > <Image src={nextTwo[1]} alt='product-image' width={150} height={150} className='object-contain' /></div>
            <div className='div3'  > <Image src={nextTwo[0]} alt='product-image' width={150} height={150} className='object-contain' /></div>

            <div className='h-full px-4 w-full div4'>

                    <Transition
                                            as='div'

                        show={isClick.current}
                        className={`w-full h-full relative ${isClick.current === true ? '' : 'hidden'}`}

                        enter="ease duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease duration-700"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Thumbnail size='full' bg={'bg-gray-200'}  thumbnail={nextTwo[0]} />
                    </Transition>
                    <Transition
                        as='div'
                        className={`w-full h-full relative ${secondPhoto.current === true ? '' : 'hidden'}`}
                        show={secondPhoto.current}
                        enter="ease duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease duration-700"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Thumbnail size='full' bg={'bg-gray-200'} thumbnail={nextTwo[1]} />
                    </Transition>


</div>

        </div>
    )
}

export default React.memo(Gallery)