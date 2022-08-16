import Button from "common/button/CommonButton"
import Input from "common/Input/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { createCustomer } from "../../lib/shopify"

const Register = ({setCurrentView}) => {
  const [authError, setAuthError] = useState(undefined)
  const [loading, SetLoading] = useState(false)
  const [success, SetSuccess] = useState({message:'',status:false})
  const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onFormSubmit = async (data, e) => {
    e.preventDefault();
    const signUp = {
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
        phone: data.phone,
        password: data.password,
    }
    SetLoading(true)
    //Validation
    if (!signUp.email || !signUp.email.includes('@') || !signUp.password) {
      setAuthError('Invalid details');
        return;
    }

    const resp = await createCustomer(signUp)
    console.log(resp)
    if (resp.data.customerCreate?.customerUserErrors.length !== 0) {
        setAuthError(resp.data.customerCreate?.customerUserErrors[0].message)
        SetLoading(false)
    }if(resp.data.customerCreate === null){
      setAuthError('Unexpected Error Please Try Again')
    }
    if(resp.errors){
      setAuthError(resp.errors[0].message)
        SetLoading(false)
    }
    if(resp.data.customerCreate?.customer.firstName){
        SetSuccess({status:true, message:'Succesfully Created Please Check Your Email'})
        SetLoading(false)
    }
};

console.log(authError)
  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">Become a Relavoux Member</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Create your Relavoux Member profile, and get access to an enhanced shopping
        experience.
      </p>
      <form className="w-full flex flex-col" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            {...register("first_name", { required: "First name is required" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Last name"
            {...register("last_name", { required: "Last name is required" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Phone"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
             {authError}
            </span>
          </div>
        )}
                {success.message && (
          <div>
            <span className="text-green-500 w-full text-small-regular">
             {success.message}
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          By creating an account, you agree to Relavoux&apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">Privacy Policy</a>
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">Terms of Use</a>
          </Link>
          .
        </span>
        <Button className="mt-6" type="submit" disabled={success.status}>{success.status ? 'Created!' : 'Login'}</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView('Login')}
          className="underline"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
