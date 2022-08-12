import clsx from "clsx"



const LineItemPrice = ({
  variant,
  style = "default",
}) => {
  const hasReducedPrice = variant.calculated_price < variant.original_price

  return (
    <div className="flex flex-col text-gray-700 text-right">
      <span
        className={clsx("text-base-regular", {
          "text-rose-600": hasReducedPrice,
        })}
      >
        50
      </span>

    </div>
  )
}

export default LineItemPrice
