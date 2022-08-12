import EmptyCartMessage from "../components/Cart/emptyCart"
import ItemsTemplate from "../components/Cart/items"
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import {formatter} from 'lib/helpers'
import Link from 'next/link'
import Button from 'common/button/CommonButton'
import Layout from "../common/Layout/lay-out"

const CartTemplate = () => {
    const { cart, updateCartItemQuantity  } = useContext(CartContext)
    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })
  
    let cartTotal = 0
    cart.map(item => {
      cartTotal += item?.variantPrice * item?.variantQuantity
    })
    console.log(cart)

    if (!cart || !cart?.length) {
        return <p>....Loading</p>
    }

    return (
        <div className="bg-gray-50 py-12">
            <div className="content-container">
                {cart.length ? (
                    <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
                        <div className="flex flex-col bg-white p-6 gap-y-6">
                            <ItemsTemplate  items={cart} />
                        </div>
                        <div className="relative">
                            <div className="flex flex-col gap-y-8 sticky top-12">
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
                                                                <span>10</span>
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span>Taxes</span>
                                                                <span>10</span>
                                                            </div>
                                                        </div>
                                                        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
                                                        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
                                                            <span>Total</span>
                                                            <span>50</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link href="/checkout">
                                                    <a>
                                                        <Button>Go to checkout</Button>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6">

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
    return <Layout title={'HOME'}>{page}</Layout>
  }
  