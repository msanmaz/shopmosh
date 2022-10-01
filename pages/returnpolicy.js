import React from 'react'
import Layout from '/common/Layout/lay-out'

const ReturnPolicy = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col px-2 md:px-[4rem]'>

        <div className='flex justify-center md:pt-[4rem] futuraMedium font-semibold text-4xl'>Shipping & Return</div>
        {dat.map((item, index) => {
          return (
            <div key={item.id} className='flex flex-col justify-center px-[1.5rem] md:px-[10rem]'>
              <h1 className='futuraMedium text-lg py-[2rem]'>{index + item.id}</h1>
              <p className='futura text-center md:text-start'>{item.desc}</p>
            </div>
          )
        }

        )}


      </div>

    </>
  )
}

ReturnPolicy.getLayout = (page) => {
  return <Layout>{page}</Layout>
}


export default ReturnPolicy


const dat = [{ "id": ".Adding Item To Cart", "desc": 'Select the products you want to order by clicking the "Add to Cart" button. This places your selection in the shopping cart. You can change this selection at any time before submitting your order by changing the number of products, deleting the selection by clicking on the "Remove" box or canceling the order process. By clicking on the "Checkout" button, you will be taken to the next order step.' }, { "id": ".Check shipping address / select shipping method", "desc": "Now check your shipping address and enter your desired shipping. By clicking on the Continue button, you will be taken to the next order step.Shipping within IE/UK costs €4.90. Shipping within the EU costs €9.90, €25 internationally and €21.55 to Switzerland." }, { "id": ".Complete the ordering process / general terms and conditions and data protection", "desc": "You will receive an overview of your order: the selected products, the shipping and billing address and your contact details. Check whether all the information is correct and please read the  General Terms  and Conditions and the  cancellation policy  carefully. You can only continue with the order if you agree to the terms and conditions and the cancellation policy (tick the box). By clicking the button Buy now you send your order to us. You hereby make a legally binding offer." }, { "id": '.Returns / Withdrawal', "desc": "MOSH guarantees a refund provided all items are returned in the condition in which they were received. This means that the items must not be damaged, soiled, washed, altered or worn (except for the fitting). In addition, all tags and labels must be intact and in their original condition. If the label has been removed, the exchange is not guaranteed. As mentioned above, the cost of sending the goods to the customer will not be reimbursed under any circumstances. Since underwear, face masks and swimwear are hygiene items, they cannot be exchanged. If the goods are nevertheless returned, WORST BEHAVIOR will send the goods back to the customer and invoice this shipping again. " }, { "id": '.Wrong Address', "desc": "If you or your end customer provide an address that is considered insufficient by the courier, the shipment will be returned and disposed of safely. Should you want to submit a new order with an updated address, you will be liable for the costs of the new order. The address for returns is: Mosh Rowans Road Wedgewood 17 D16XC52 Dublin Ireland" }]
