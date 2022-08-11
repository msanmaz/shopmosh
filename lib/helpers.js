import {updateCheckout} from 'lib/shopify'

export const formatter = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  export const repeat = (times) => {
    return Array.from(Array(times).keys())
  }
  

  
  export async function updateShopifyCheckout(updatedCart, checkoutId) {
    const lineItems = updatedCart.map(item => {
      return {
        variantId: item['variantId'],
        quantity: item['variantQuantity']
      }
    })
 const checkout =   await updateCheckout(checkoutId, lineItems)
 return checkout
  }