import { Popover, Transition } from "@headlessui/react"
import repeat from "lib/utils/repeat"
import Thumbnail from "components/Thumbnail/thumb-nail"
import SkeletonProductPreview from "components/Skeletons/SkeletonProductPreview"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { chunk } from "lodash"

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
      slug: 'All',
  },


]


const DropdownMenu = ({ title, collection }) => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-full"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href="/shop" passHref>
              <a className="relative flex h-full">
                <Popover.Button
                  className={clsx(
                    "relative h-full flex futuraMedium uppercase items-center transition-all ease-out duration-200"
                  )}
                  onClick={() => push("/men")}
                >
                  {title}
                </Popover.Button>
              </a>
            </Link>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
              >
                <div className="relative bg-white py-8">
                  <div className="flex items-start content-container">
                    <div className="flex flex-col flex-1 max-w-[30%]">
                      <h3 className="text-base-semi text-gray-900 mb-4">
                        Collections
                      </h3>
                      <div className="flex items-start">
                      {endpoints &&
                          chunk(endpoints, 6).map((chunk, index) => {
                            return (
                              <ul
                                key={index}
                                className="min-w-[152px] max-w-[200px] pr-4"
                              >
                                {chunk.map((collection,index) => {
                                  return (
                                    <div key={index} className="pb-3">
                                      <Link
                                        href={`/men/${collection.slug}`}
                                      >
                                        <a onClick={() => setOpen(false)}>
                                          {collection.name}
                                        </a>
                                      </Link>
                                    </div>
                                  )
                                })}
                              </ul>
                            )
                          })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-4">
                        {collection ? collection.slice(0).reverse().map((item,index) => {
                          return <div key={index}>
                            <Thumbnail thumbnail={item.node.image.originalSrc}  size="full" />
                            <div className="text-base-regular mt-2">
                              <span>{item.node.title}</span>
                            </div>
                          </div>
                        }) : repeat(3).map((index) => (
                          <SkeletonProductPreview key={index} /> ))} 
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
