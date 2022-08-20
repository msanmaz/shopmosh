import React from 'react'
import Button from "common/button/CommonButton"
import Input from "common/Input/input"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import clsx from 'clsx'
const ContactForm = () => {
    const [authError, setAuthError] = useState(undefined)
    const [loading, SetLoading] = useState(false)
    const [success, SetSuccess] = useState({message:'',status:false})
    const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div className="max-w-full flex flex-col items-center mt-12 mb-4">

    <div className='text-center text-2xl bebas text-gray-700 mb-4'>
        Contact Us
    </div>
    <p className="text-center text-base-regular text-gray-700 mb-4">
      Create your Relavoux Member profile, and get access to an enhanced shopping
      experience.
    </p>
    <form className="w-full flex flex-col">
      <div className="flex flex-col w-full gap-y-2">
      <div className='flex-row gap-x-[2rem] flex w-full'>
      <div className='w-1/2'>
      <Input
          label="First name"
          {...register("first_name", { required: "First name is required" })}
          autoComplete="given-name"
          errors={errors}
          
        />
      </div>

        <div className='w-1/2'>
        <Input
          label="Last name"
          {...register("last_name", { required: "Last name is required" })}
          autoComplete="family-name"
          errors={errors}
        />
        </div>

      </div>

 <div className='flex-row gap-x-[2rem] flex w-full'>
    <div className='w-1/2'>
    <Input
          label="Email"
          {...register("email", { required: "Email is required" })}
          autoComplete="email"
          errors={errors}
        />
    </div>
    <div className='w-1/2'>
    <Input
          label="Phone"
          {...register("phone")}
          autoComplete="tel"
          errors={errors}
        />
    </div>

 </div>

 <textarea
                    name="Message"
                    placeholder="Message"
                    className={clsx(
                      "pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    )}
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
        By sending a message, you agree to Relavoux&apos;s{" "}
        <Link href="/content/privacy-policy">
          <a className="underline">Privacy Policy</a>
        </Link>{" "}
        and{" "}
        <Link href="/content/terms-of-use">
          <a className="underline">Terms of Use</a>
        </Link>
        .
      </span>
      <Button className="mt-6" type="submit" disabled={success.status}>Submit</Button>
    </form>
  </div>
    )
}

export default ContactForm