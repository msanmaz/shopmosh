import Item from "components/Cart/item"
import SkeletonLineItem from "./skeleton-line-item"


const ItemsTemplate = ({ items }) => {
  return (
    <div>
      <div className="border-b border-gray-200 pb-3 flex items-center">
        <h1 className="text-xl-semi">Shopping Bag</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-8 py-8">
        {items
          ? items.map((item,index) => {
                return <Item key={index} item={item} />
              })
          : Array.from(Array(5).keys()).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
      </div>
    </div>
  )
}

export default ItemsTemplate
