import { Popover, Transition } from "@headlessui/react"
import { useModalDropDown } from "context/modal-context"
import LineItemOptions from "../LineItemOptions/line-item-options"
import LineItemPrice from "../LineItemPrice/Line-item-price"
import Trash from "../../common/icons/trash"
import Link from "next/link"
import { useContext, useMemo } from 'react'
import { CartContext } from '../../context/shopContext'
import { Fragment } from "react"
import { formatter } from '../../lib/helpers'
import Button from 'common/button/CommonButton'
import Thumbnail from "components/Thumbnail/thumb-nail"



const Modal = () => {
  const { state, open, close, timedOpen } = useModalDropDown()
  const { cart, updateCartItemQuantity } = useContext(CartContext)
  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  let cartTotal = 0
  cart.map(item => {
    cartTotal += item?.variantPrice * item?.variantQuantity
  })

  const items = useMemo(() => {
    return cart.map((item, i, { length }) => {
      if (i + 1 === length) {
        return(
  <div
          className="grid grid-cols-[103px_1fr] gap-x-4"
          key={i}
        >
          <div className="w-[80px]">
            <Thumbnail thumbnail={item.image} size="xs" />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]">
                    <Link
                      href={`/products/${item.id}`}
                    >
                      <a>{item.title}</a>
                    </Link>
                  </h3>
                  <LineItemOptions variant={item.variantTitle} />
                  <span>Quantity: {item.variantQuantity}</span>
                </div>
                <div className="flex justify-end">
                  <LineItemPrice
                    quantity={item.variantQuantity}
                    price={item.variantPrice}
                    style="tight"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between text-small-regular flex-1">
            </div>
          </div>
        </div>
        )
      
      }

    });
  })


  return (
    <div className="h-full z-50">
      <Popover className="relative h-full">
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="small:block absolute top-[calc(100%+1px)] itemodal right-0 bg-white border-x border-b border-gray-200 w-[382px] text-gray-900"
          >
            <div className="p-4 flex items-center justify-center">
              <h3 className="text-large-semi">Shopping Bag</h3>
            </div>
            {cart ? (
              <>
                <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar">
              {items}
                </div>
                <div className="p-4 flex flex-col gap-y-4 text-small-regular">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">
                      Subtotal{" "}
                      <span className="font-normal">(incl. taxes)</span>
                    </span>
                    <span className="text-large-semi">
                      {formatter.format(cartTotal)}
                    </span>
                  </div>
                  <div className="w-full flex flex-row">
                  <div className="w-1/2">
                  <Link href="/cart" passHref>
                    <a>
                      <Button>Go to bag</Button>
                    </a>
                  </Link>
                  </div>
                  <div className="w-1/2 px-[0.5rem]">
                    <a>
                      <Button>Close</Button>
                    </a>
                  </div>
                  </div>

                </div>
              </>
            ) : (
              <div>
                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                  <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                    <span>0</span>
                  </div>
                  <span>Your shopping bag is empty.</span>
                  <div>
                    <Link href="/store">
                      <a>
                        <span className="sr-only">Go to all products page</span>
                        <Button onClick={close}>Explore products</Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Modal
