export const formatter = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  export const repeat = (times) => {
    return Array.from(Array(times).keys())
  }
  

  