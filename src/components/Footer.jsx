import React from 'react'
import Link from 'next/link'
import { FaGithub , FaFacebook ,FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        Digital Coding School
      </div>
      <div className="links">
        <ul>
            <li>
                <Link href="/">Privacy</Link>
            </li>
            <li>
                <Link href="/">Terms</Link>
            </li>
            <li>
                <Link href="/">Contact</Link>
            </li>
            <li>
                <Link href="/">Refund</Link>
            </li>
            <li>
                <Link href="/">Shop</Link>
            </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
            <li>
            <Link href="/"><FaGithub /></Link>
            </li>
            <li>
            <Link href="/"><FaTwitter /></Link>
            </li>
            <li>
            <Link href="/"><FaInstagram /></Link>
            </li>
            <li>
            <Link href="/"><FaFacebook /></Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
