'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const paymentId = searchParams.get('payment_id')

  const handleGoHome = () => {
    router.replace('/') 
  }

  return (
    <div className="mt-28 flex flex-col items-center justify-center px-4">
      <div className="bg-green-50 border border-green-200 shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <svg
          className="mx-auto mb-4 w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4 -4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-green-700 mb-2">Payment Successful</h1>
        <p className="text-gray-700 mb-4">Thank you for your support!</p>
        <div className="bg-gray-100 rounded-lg py-2 px-4 text-sm text-gray-800 break-all">
          Payment ID: <span className="font-mono">{paymentId}</span>
        </div>
      </div>

      <button
        onClick={handleGoHome}
        className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Proceed to Home page
        </span>
      </button>
    </div>
  )
}
