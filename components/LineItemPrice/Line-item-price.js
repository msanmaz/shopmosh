import clsx from "clsx"
import {formatter} from 'lib/helpers'


const LineItemPrice = ({
    price,
  style = "default",
}) => {
    

  return (
    <div className="flex flex-col text-gray-700 text-right">
      <span
        className={clsx("text-base-regular")}
      >
        {formatter.format(price)}
      </span>

    </div>
  )
}

export default LineItemPrice
