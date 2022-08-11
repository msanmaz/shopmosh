import Button from "common/button/CommonButton"
import Input from "common/Input/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"


const Register = ({setCurrentView}) => {
  const [authError, setAuthError] = useState(undefined)
  const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()



  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      <h1 className="text-large-semi uppercase mb-6">Become a Relavoux Member</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Create your Relavoux Member profile, and get access to an enhanced shopping
        experience.
      </p>
      <form className="w-full flex flex-col">
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
              These credentials do not match our records
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
        <Button className="mt-6">Join</Button>
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
