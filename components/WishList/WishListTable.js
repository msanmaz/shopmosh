import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import { formatter } from 'lib/helpers'
import Thumbnail from '../Thumbnail/thumb-nail'


const WishListTable = ({ items }) => {
    const { wishList, setWishList } = useContext(CartContext)
    const [hasMounted, setHasMounted] = React.useState(false);
    const categoryProducts = React.useMemo(() => {
        if (wishList === 'undefined') return []
        if (!wishList?.items) return []
        return items.products.products.edges.filter(person => wishList?.items.includes(person.node.id))
    }, [wishList, items])

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }
    console.log(wishList)

    const removeAccount = (account) => {
        let accounts = wishList.items
        var index = accounts.indexOf(account)
        if (index !== -1) {
            accounts.splice(index, 1);
            setWishList({ items: accounts });
            localStorage.setItem('likes', JSON.stringify(wishList));
        }

    }

    return (
        <>
            <div className='w-full h-auto border border-gray-300'>
                {categoryProducts.length >= 1 ?
                    categoryProducts.map((product,i) => (
                        <div key={i} className='border-b md:px-[1rem]'>
                            <div className='flex flex-wrap wish-item md:flex-row w-full py-[1rem]'>
                                <div className='flex w-[80%] md:w-[70%] justify-start px-[1rem]'>
                                    <div className='border w-auto border-gray-300 py-[0.5rem] px-[0.5rem] max-h-[120px] '>
                                        <Thumbnail className='object-contain bg-center' size='xs'  thumbnail={product.node.images.edges[0].node.originalSrc} alt="Avatar Tailwind CSS Component" />
                                    </div>


                                    <div className='leading-6 w-full px-2 md:px-4'>
                                        <div className="bebasBold text-2xl">{product.node.title}</div>
                                        <div className="text-base leading-6 !font-[600] bebasLight">{product.node.productType}</div>
                                        <div className="text-base leading-6 !font-[600] bebasLight">Order Code: {product.node.handle}</div>
                                        <div className='text-[#161616] bebas'>Shipping after 2-3 days</div>

                                    </div>

                                </div>


                                <div className='w-[80%] mx-[7.4rem] md:mx-auto md:w-[20%]'>
                                    <div className='bebas text-xl text-[#161616]'>{formatter.format(product.node.priceRange.minVariantPrice.amount)}</div>

                                </div>


                                <div className='absolute md:relative top-[50%] right-[3rem]'>
                                    <button onClick={() => removeAccount(product.node.id)} className="btn btn-square btn-outline w-[2rem] !h-[2rem] !min-h-[2rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : <div className='bebas'>No Product!</div>}

            </div>
        </>
    )
}

export default WishListTable