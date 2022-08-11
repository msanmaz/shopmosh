import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import {useRouter } from 'next/router'
import { getCustomerInfo } from 'lib/shopify'
import Layout from '../../common/Layout/lay-out'

export async function getServerSideProps(context) {
  const user = await getCustomerInfo(context.query.id)

  return {
      props: {
          user,
      }
  }
}




const Profile = ({user}) => {
  const { accessToken, customerInfo,setCustomerInfo,SetAccessToken,getCustInfo } = useContext(CartContext)
  const router = useRouter()
  const [isSSR, setIsSSR] = React.useState(true);
  console.log(customerInfo,'infoid')

  React.useEffect(() => {
    setIsSSR(false);
    const fetchCats = async () => {
      await getCustInfo(accessToken.accessToken)
    }
    fetchCats()
  }, []);

  const handleClick = () => {
    localStorage.removeItem('user')   
   localStorage.removeItem('customer')
   setCustomerInfo('')
   SetAccessToken('')
   setTimeout(() => {
   router.push('/')
  }, 1000);
  }

  
  if (!isSSR & !accessToken) {
    router.push('/account/login')
  }

    return (
      <>
        <div className='py-[5rem]'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-black bebas text-4xl py-2'>{user && `Welcome ${user.firstName}`}</p>
            <button onClick={handleClick} className='btn btn-ghost'>Logout</button>
          </div>
        </div>
      </>
    )
  }


export default Profile

Profile.getLayout = (page) => {
  return <Layout title={'Account'}>{page}</Layout>
}
