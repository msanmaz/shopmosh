import clsx from "clsx"
import {formatter} from '../../lib/helpers'


const LineItemPrice = ({
  hasReducedPrice,
  price
}) => {

  return (
    <div className="flex flex-col text-gray-700 text-right">
      <span
        className={clsx("text-base-regular", {
          "text-rose-600": hasReducedPrice,
        })}
      >
        {formatter.format(price)}
      </span>

    </div>
  )
}

export default LineItemPrice
