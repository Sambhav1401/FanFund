'use client'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'
export default function DonateForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    amount: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleDonate = e => {
    e.preventDefault();

    if (!form.name || !form.amount || !form.message) {
      setError('Please fill all fields before donating.');
      return;
    }

    
  const query = new URLSearchParams(form).toString();
router.push(`/Donate?${query}`);
   
  
  };


  return (
    <>
  
    <div
  className="cover"
  style={{ height: "70vh", width: "100%", overflow: "hidden" }}
>
  <img
    src="/guthib.png"
    alt=""
    style={{
      height: "100%",
      width: "100%",
      objectFit: "fill",
      marginTop: "-10px",
     
    }}
  />
</div>
<div
  className="text-white font-bold text-3xl text-center mt-5 bg-blue-900 border w-[30%] ml-[35%] border-black px-4 py-2 rounded-lg cursor-pointer"
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
>
  Support @Sambhav
</div>

  <h6 className='text-sm p-4 ml-[29%] text-white'>Support @Sambhav by making a donation. Your contribution will help them achieve their goals.</h6>
<div className="payment container mx-auto m-4 flex gap-3 w-[80%]">
    <div className="supporters w-1/2 bg-slate-900 p-4 rounded-lg text-white" >
    <h2 className='text-lg mb-4 font-bold'>Supporters</h2>
<ul >
    <li>Khushi donated ₹30 with a message " Very Good! Keep it up!" </li>
    <li>Sanjay donated ₹30 with a message " Keep going!" </li>
   <li>Bhavna donated ₹30 with a message " Amazing work!" </li>

</ul>
    </div>
    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white">
    <h2 className='text-lg p-4 font-bold'>Make a Payment</h2>
 
   <form className="flex flex-col gap-4 p-4" onSubmit={handleDonate}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="p-2 rounded-lg bg-slate-800 border border-slate-700"
      />
      <input
  type="number"
  name="amount"
  placeholder="Amount"
  value={form.amount}
  onChange={handleChange}
  className="p-2 rounded-lg bg-slate-800 border border-slate-700"
/>

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="p-2 rounded-lg bg-slate-800 border border-slate-700"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Donate
        </button>
      </div>
    </form>
    <div className="right-0">
      <div className='text-sm p-4'>By clicking Donate, you agree to our <a
  href="https://www.termsfeed.com/live/ce29d554-33d6-4836-80f5-6e60a800658c"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 cursor-pointer"
>
  Terms of Service & Privacy Policy
</a>

       <div className='text-sm '>Powered by RazorPay.</div></div>
    
    </div>
    </div>
</div>
    </>
  )

}