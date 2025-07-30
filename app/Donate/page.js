'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export default function DonatePage() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name');
  const amount = searchParams.get('amount');
  const message = searchParams.get('message');

  return (
 <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
  <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
    Donation Details
  </h1>

  <div className="space-y-4 text-gray-800 dark:text-gray-300">
    <div>
      <h2 className="text-lg font-semibold">Name</h2>
      <p className="mt-1 text-lg">{name || 'N/A'}</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Amount</h2>
      <p className="mt-1 text-lg">₹{amount || 'N/A'}</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Message</h2>
      <p className="mt-1 text-lg">{message || 'No message provided'}</p>
    </div>
    <Link href={`/pay?amount=${amount}`} passHref>
      <button
        type="button"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Pay ₹{amount || '0'}
      </button>
    </Link>
  </div>
</div>

  );
}
