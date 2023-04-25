import React, { useState } from 'react'

const ContactForm = () =>
{
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [sucessMsg, setSucessMsg] = useState("");


    const emailValidation = () =>
    {
        return String(email)
            .toLocaleLowerCase()
        .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    }

    
    const handleSand = (e) =>
    {
        e.preventDefault()
        if (username === "") {
            setErrMsg('Username is required')
        } else if (phone === "")
        {
            setErrMsg('Phone Number is required')
        }else if (subject === "")
        {
            setErrMsg('Email is required')
        }else if (message === "")
        {
            setErrMsg('Subject is required')
        }else if (email === "")
        {
            setErrMsg('Message is required')
        } else
        {
            setSucessMsg("Your Message sent Successfully");
            setErrMsg('')
            setUsername('')
            setEmail('')
            setPhone('')
            setSubject('')
            setMessage('')
            console.log(username,email,phone,subject,message);
        }
    }
    

  return (
      <form className='w-full flex flex-col gap-6 py-2'>
          {errMsg && (
              <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
          )}
          {sucessMsg && (
            <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{sucessMsg}</p>
        )}
          <div className='w-full flex gap-10'>
              <div className='w-1/2 flex flex-col gape-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                  <input type='text' className={`${errMsg === "Username is required" && username.length === 0 ? "outline-designColor" : "outline=none"} contactInput`} onChange={(e) =>setUsername(e.target.value)} value={username} />
              </div>
              <div className='w-1/2 flex flex-col gape-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                  <input type='text' className={`${errMsg === "Phone Number is required" && phone.length === 0 ? "outline-designColor" : "outline=none"} contactInput`} onChange={(e) =>setPhone(e.target.value)} value={phone} />
              </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Email</p>
            <input type='email' className={`${errMsg === "Email is required" && email.length === 0 ? "outline-designColor" : "outline=none"} contactInput`} onChange={(e) =>setEmail(e.target.value)} value={email} />
        </div>
        <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
            <input type='text' className={`${errMsg === "Subject is required'" && subject.length === 0 ? "outline-designColor" : "outline=none"} contactInput`} onChange={(e) =>setSubject(e.target.value)} value={subject} />
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-sm text-gray-400 uppercase tracking-wide'>Messagel</p>
            <textarea cols='30' rows="9" className={`${errMsg === "Message is required" && message.length === 0 ? "outline-designColor" : "outline=none"} contactInput`} onChange={(e) =>setMessage(e.target.value)} value={message}></textarea>
        </div>
          <div>
              <button onClick={handleSand} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
          </div>
          {errMsg && (
            <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
          )}
          {sucessMsg && (
            <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{sucessMsg}</p>
        )}
      </form>
  )
}

export default ContactForm