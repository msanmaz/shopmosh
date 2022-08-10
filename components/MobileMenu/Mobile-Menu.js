import ChevronDown from "common/icons/chevron-down";
import X from "common/icons/x";
import Link from "next/link"
import { useMobileMenu } from "context/mobile-menu-context"

import {ReactCountryFlag} from 'react-country-flag'
import Container from "common/Container";
const MainMenu = () => {

let customer;

let collections
  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")
  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()
  return (
    <Container>
    <div className="flex md flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 py-4 px-6">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            </button>
          </div>
        <div>
          <h1 className="text-xl-semi uppercase">Acme</h1>
        </div>
        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
          <X size={20}/>

          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4">
              <Link href="/store">
                <a>
                  <button
                    className="flex items-center justify-between w-full"
                  >
                    <span className="sr-only">Go to Store</span>
                    <span>Store</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </a>
              </Link>
            </li>
            {collections ? (
              <>
                {collections.map((collection) => (
                  <li key={collection.id} className="bg-gray-50 p-4">
                    <Link href={`/collections/${collection.id}`}>
                      <a>
                        <button
                          className="flex items-center justify-between w-full"
                        >
                          <span className="sr-only">
                            Go to {collection.title} collection
                          </span>
                          <span>{collection.title}</span>
                          <ChevronDown className="-rotate-90" />

                        </button>
                      </a>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {!customer ? (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <a>
                    <button
                      className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    >
                      <span className="sr-only">Go to sign in page</span>
                      <span className="normal-case">Sign in</span>
                      <ChevronDown className="-rotate-90" />

                    </button>
                  </a>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <a>
                    <button
                      className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    >
                      <span className="sr-only">Go to account page</span>
                      <span className="normal-case">{customer}</span>
                    </button>
                  </a>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Delivery</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">
                  Click to select shipping country
                </span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={"ie"} svg />
                  <span className="normal-case">
                    Shipping to{" "}
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default MainMenu
