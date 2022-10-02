import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
   <>
   <footer className="footer mt-6 md:align-middle border-t md:justify-items-center p-10 text-base-content">
  <div>
    <span className="footer-title bebas">Services</span> 
    <Link href='/login'><div className="link text-xs uppercase futuraMedium text-[#333333] link-hover">My Account</div></Link> 
    <a className="link  futuraMedium text-[#333333] text-xs  uppercase link-hover">Marketing</a> 
    <a className="link  futuraMedium text-[#333333] text-xs  uppercase link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title bebas">Company</span> 
    <Link href='/aboutus'>
    <div className="link  futuraMedium text-[#333333] text-xs uppercase link-hover">About us</div>
    </Link>
    <Link href='/contact'>
    <div className="link  futuraMedium text-[#333333] text-xs  uppercase link-hover">Contact</div> 
    </Link>
  </div> 
  <div>
    <span className="footer-title bebas">Legal</span> 
    <Link href='/returnpolicy'>
       <div className="link futuraMedium text-[#333333] text-xs  uppercase link-hover"> Return Policy</div>
     </Link>
     <Link href='/privacypolicy'>
       <div className="link futuraMedium text-[#333333] text-xs  uppercase link-hover"> Privacy Policy</div>
     </Link>
  </div> 
  <div>
    <span className="footer-title bebas">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-xs futuraMedium uppercase text-[#333333]">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary font-light absolute bg-black top-0 right-0 bebas border-black rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
   
   
   
   </>
  )
}

export default Footer