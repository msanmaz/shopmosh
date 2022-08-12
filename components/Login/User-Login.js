import React from 'react'
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { CartContext } from '/context/shopContext'
import Input from 'common/Input/input'
import Button from 'common/button/CommonButton'
import { createCustomerAccessToken } from '../../lib/shopify'
import Spinner from '../../common/icons/spinner'

const Login = ({ setCurrentView }) => {


  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [error, SetError] = React.useState({ status: false, message: '' })
  const [loading, SetLoading] = React.useState(false)
  const { accessToken, SetAccessToken,customerInfo,getCustInfo,setCustomerInfo} = useContext(CartContext)

  const onFormSubmit = handleSubmit(async (data, event) => {
    SetLoading(true)
    const token = {
      email: data.email,
      password: data.password
    }
    await createCustomerAccessToken(token).then((user) => {
      if (user.data.customerAccessTokenCreate.customerAccessToken !== null) {
        const access = user.data.customerAccessTokenCreate.customerAccessToken
        localStorage.setItem('user', JSON.stringify(access));
        SetAccessToken(access)
        SetLoading(false)
        setTimeout(() => {
         const key = window.localStorage.getItem('customer');
         const data = JSON.parse(key)
         console.log(data,'afterusb')
          router.push(`/account/${data[0].firstName}`)
        }, 2500);
      } else if (user.data?.customerAccessTokenCreate.customerUserErrors.length >= 1) {
        SetError({ status: true, message: 'Wrong Credentials' })
        SetLoading(false)
      }
    }).catch(console.log(error))



  })

  React.useEffect(()=> {
    const fetchCats = async () => {
      const data = await getCustInfo(accessToken.accessToken)
      setCustomerInfo(data)
     }
     fetchCats()
  },[accessToken])

  return (
    <>
      <div className="max-w-sm w-full flex flex-col items-center">
        <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
        <p className="text-center text-base-regular text-gray-700 mb-8">
          Sign in to access an enhanced shopping experience.
        </p>
        <form className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col w-full gap-y-2">
            <Input
              label="Email"
              {...register("email", { required: "Email is required" })}
              autoComplete="email"
              errors={errors}
            />
            <Input
              label="Password"
              {...register("password", { required: "Password is required" })}
              type="password"
              autoComplete="current-password"
              errors={errors}
            />
          </div>
          {error.status && (
            <div>
              <span className="text-rose-500 w-full text-small-regular">
                These credentials do not match our records
              </span>
            </div>
          )}
          <Button type='submit' className="mt-6">                                    {accessToken ? (
            'Successful ✔️'
          ) : loading ? (
            <Spinner/>
          ) : (
            `Login`
          )}</Button>
        </form>
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Not a member?{" "}
          <button
            onClick={() => setCurrentView('Register')}
            className="underline"
          >
            Join us
          </button>
          .
        </span>
      </div>


    </>
  )
}

export default Login