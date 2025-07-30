'use client'
import Script from 'next/script'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function PayPage() {
  const searchParams = useSearchParams()
  const amountParam = searchParams.get('amount')
  const amount = Number(amountParam) * 100 || 5000

  const handlePayment = () => {
    const options = {
      key: "rzp_test_gYvbvyS3hTKnSr",
      amount: amount,
      currency: 'INR',
      name: 'FanFund Donation',
      description: 'Support Sambhav',
      handler: function (response) {
        
       window.location.href = `/success?payment_id=${response.razorpay_payment_id}`;

      },
      prefill: {
        name: 'Sambhav Supporter',
        email: 'supporter@example.com',
      },
      theme: {
        color: '#3399cc'
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
        <h1 className="text-3xl font-bold mb-4">Pay ₹{amount / 100}</h1>
        <button
          onClick={handlePayment}
          className="bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Pay with Razorpay
        </button>
      </div>
    </>
  )
}
