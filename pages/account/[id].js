import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import {useRouter } from 'next/router'
import { getCustomerInfo } from 'lib/shopify'



export async function getServerSideProps(context) {
  console.log(context)
  const user = await getCustomerInfo(context.query.id)

  return {
      props: {
          user,
      }
  }
}



const Profile = ({user}) => {
  const { accessToken, customerInfo,setCustomerInfo,SetAccessToken } = useContext(CartContext)
  const router = useRouter()
  const [isSSR, setIsSSR] = React.useState(true);

  React.useEffect(() => {
    setIsSSR(false);
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
    return <p className='bebas justify-center flex py-[5rem]'>Not logged in!</p>
  }

    return (
      <>
        <div className='py-[5rem]'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-black bebas text-4xl py-2'>{user ? `Welcome ${user.firstName}!` : ''}</p>
            <button onClick={handleClick} className='btn btn-ghost'>Logout</button>
          </div>
        </div>
      </>
    )
  }


export default Profile
