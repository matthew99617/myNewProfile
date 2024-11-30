import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const fromRef = useRef();

    const [loading, setLoading] = useState(false)
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
      };

const SERVICE_ID = 'service_tkzxnh8';
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true);

        try{
            emailjs.send(SERVICE_ID, 'template_cjlnhah', {
                from_name: form.name,
                to_name: 'Matthew',
                from_email: form.email,
                to_email: 'matthewtai0617@gmail.com',
                message: form.message
            }, '-sl3dgqnAmMvP6G_c')

            setLoading(false)

            alert("Your message has been sent. I will get back to you as soon as possible.")
        } catch (error) {
            console.error(error);
        }

        
    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className='background-contact-container relative min-h-screen flex items-center justify-center flex-col'>
                <div className='contact-container'>
                    <h3 className='head-text'>
                        Let's get in touch
                    </h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form ref={fromRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Enter your name'/>
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='enteryouremail@gmail.com'/>
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Your message here....'/>
                        </label>

                        <button className='field-btn' type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact