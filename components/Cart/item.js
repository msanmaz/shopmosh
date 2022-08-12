import LineItemOptions from "components/Cart/line-item-options"
import LineItemPrice from "components/Cart/line-item-price"
import NativeSelect from "components/Cart/NativeSelect"
import Trash from "common/icons/trash"
import Thumbnail from "components/Thumbnail/thumb-nail"



const Item = ({ item }) => {
  console.log(item,'initem')
  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4">
      <div className="w-[122px]">
        <Thumbnail thumbnail={item.image} size="full" />
      </div>
      <div className="text-base-regular flex flex-col gap-y-8">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span>{item.title}</span>
            <LineItemOptions variant={item.variantTitle} />
          </div>
          <NativeSelect
            value={item.variantQuantity}
          
            className="max-h-[35px] w-[75px]"
          >
            {/* {Array.from([...Array(item.variant)].keys())
              .slice(0, 10)
              .map((i) => {
                const value = i + 1
                return (
                  <option value={value} key={i}>
                    {value}
                  </option>
                )
              })} */}
          </NativeSelect>
        </div>
        <div className="flex items-end justify-between text-small-regular flex-1">
          <div>
            <button
              className="flex items-center gap-x-1 text-gray-500"
              onClick={() => deleteItem(item.id)}
            >
              <Trash size={14} />
              <span>Remove</span>
            </button>
          </div>
          <div>
            <LineItemPrice
        price={item.variantPrice}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
