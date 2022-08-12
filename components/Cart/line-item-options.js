
const LineItemOptions = ({ variant }) => {
  return (
    <div className="text-small-regular text-gray-700">

          <div>
            <span>
              {variant}: {variant.value}
            </span>
          </div>

    </div>
  )
}

export default LineItemOptions
