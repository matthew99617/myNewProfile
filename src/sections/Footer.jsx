import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p className='text-white-500 flex gap-2'>Term & Conditions</p>
            <p> | </p>
            <p>Privacy Policy</p>
        </div>

        <p className='text-white-500'>
            &copy; 2024 Matthew. All rights reserved
        </p>
    </section>
  )
}

export default Footer