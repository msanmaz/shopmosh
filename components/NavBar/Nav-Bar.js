import { useMobileMenu } from "context/mobile-menu-context"
import Hamburger from "common/Hamburger"
import DropdownMenu from "components/DropDownMenu/drop-down-menu"
import MobileMenu from "../MobileMenu/Mobile-Menu"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Topbar from "../Topbar/Topbar"
import CartDropdown from "../CartDropdown/cart-dropdown"
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import { repeat } from "../../lib/helpers"
import SkeletonProductPreview from "../Skeletons/SkeletonProductPreview"
import Modal from "../purchaseModal/purchase_modal"

const Nav = () => {
  const { accessToken, collection,wishList,customerInfo } = useContext(CartContext)
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const wishListLength = !wishList ? 0 : wishList?.items.length
  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])



  const { toggle } = useMobileMenu()


  return (
    <>
      <div
        className={clsx("sticky top-0 inset-x-0 z-50 group", {
          "!fixed": isHome,
        })}
      >
        <header
          className={clsx(
            "relative h-16 px-8 !bg-white !border-gray-200 mx-auto transition-colors bg-transparent border-b border-transparent duration-200",
            {
              "!bg-white !border-gray-200": !isHome || isScrolled,
            }
          )}
        >
          <nav
            className={clsx(
              "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200"
            )}
          >
            <div className="flex-1 justify-between md:justify-start basis-0 h-full flex items-center">
              <div className="block small:hidden">
                <Hamburger setOpen={toggle} />
              </div>
              <div className="md:flex hidden items-center h-full">
                <Link href="/">
                  <a className="text-xl-semi bebasBold uppercase">MOSH</a>
                </Link>
              </div>


              <div className="hidden pl-[3rem] small:block h-full">
                <DropdownMenu title={'Collection'} collection={collection} />
              </div>

            </div>


            <div className="flex md:hidden items-center h-full">
              <Link href="/">
                <a className="text-xl-semi bebasBold uppercase">MOSH</a>
              </Link>
            </div>


            <div className="flex items-center futuraMedium uppercase md:gap-x-6 h-full flex-1 basis-0 justify-end">

              {/* <div className="hidden small:flex items-center gap-x-6 h-full">

                <Link href='/account/login'>
                  <a>Account</a>
                </Link>
              </div> */}

              <div className="hidden small:flex items-center md:gap-x-6  h-full">

                <Link href='/wishlist'>
                {`Wish List (${wishListLength})`}
                </Link>
              </div>

              <CartDropdown />
              <Modal/>
            </div>
          </nav>
          <MobileMenu customer={customerInfo} accessToken={accessToken} />
        </header>
        <Topbar isHome={isHome} isScrolled={isScrolled} />
      </div>
    </>

  )
}

export default Nav
