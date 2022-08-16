import useToggleState from "../lib/hooks/use-toggle-state"
import { createContext, useContext, useEffect, useState } from "react"

interface ModalDropDownContext {
  state: boolean
  open: () => void
  timedOpen: () => void
  close: () => void
}

export const ModalDropDownContext = createContext<ModalDropDownContext | null>(
  null
)

export const ModalProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { state, close, open } = useToggleState()
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  return (
    <ModalDropDownContext.Provider
      value={{ state, close, open: openAndCancel, timedOpen }}
    >
      {children}
    </ModalDropDownContext.Provider>
  )
}

export const useModalDropDown = () => {
  const context = useContext(ModalDropDownContext)

  if (context === null) {
    throw new Error(
      "useCartDropdown must be used within a CartDropdownProvider"
    )
  }

  return context
}
