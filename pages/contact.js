import React from 'react'
import ContactForm from 'components/Contact/contact_form'
import Layout from 'common/Layout/lay-out'
import Image from 'next/image'
const Contact = () => {
  return (
<>
<div className='w-full flex flex-col md:flex-row'>
<div className='flex'>
<Image src='/contact.jpeg' alt='phone image' width={1000} height={500} className="bg-center object-contain" />
</div>

<div className='flex w-full px-[2rem] md:pr-[6rem] md:justify-end'>
<ContactForm/>
</div>

</div>

</>
    )
}

export default Contact

Contact.getLayout = (page) => {
    return <Layout>{page}</Layout>
  }
  