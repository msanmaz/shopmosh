import EmptyCartMessage from "../components/Cart/emptyCart"
import ItemsTemplate from "../components/Cart/items"
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import {formatter} from 'lib/helpers'
import Link from 'next/link'
import Button from 'common/button/CommonButton'
import Layout from "../common/Layout/lay-out"

const CartTemplate = () => {
    const { cart,checkoutUrl  } = useContext(CartContext)
    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })
  
    let cartTotal = 0
    cart.map(item => {
      cartTotal += item?.variantPrice * item?.variantQuantity
    })
   

    function per(num, amount){
        return num*amount/100;
      }

      

    if (!cart || !cart?.length) {
        return <EmptyCartMessage/>
    }

    return (
        <div className="bg-gray-50 md:py-12">
            <div className="content-container !px-0 md:!px-8">
                {cart.length ? (
                    <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
                        <div className="flex flex-col bg-white p-6 gap-y-6">
                            <ItemsTemplate items={cart} />
                        </div>
                        <div className="relative">
                            <div className="flex flex-col gap-y-8 sticky top-[7rem]">
                                {cart && (
                                    <>
                                        <div className="bg-white p-6">
                                            <div className="grid grid-cols-1 gap-y-6">
                                                <div>
                                                    <div className="text-small-regular text-gray-700">
                                                        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
                                                            <span>Subtotal</span>
                                                            <span>{formatter.format(cartTotal)}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-y-1">
                                                            <div className="flex items-center justify-between">
                                                                <span>Shipping</span>
                                                                <span>Calculated On Checkout</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span>Taxes</span>
                                                                <span>23%</span>
                                                            </div>
                                                        </div>
                                                        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
                                                        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
                                                            <span>Total</span>
                                                            <span>{formatter.format(per(23,cartTotal)+ cartTotal)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href={checkoutUrl}>
                                                    <a>
                                                        <Button>Go to checkout</Button>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>

                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <EmptyCartMessage />
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartTemplate


CartTemplate.getLayout = (page) => {
    return <Layout>{page}</Layout>
  }
  