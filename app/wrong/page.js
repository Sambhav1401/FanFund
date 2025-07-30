import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-extrabold mb-4 text-red-500">Access Denied</h1>
        <p className="text-lg text-gray-300 mb-6">
          Please <span className="font-semibold text-white">Login first</span> to access this page.
        </p>
        <Link href="/login">
          <button
            className="relative inline-flex items-center justify-center p-2 px-6 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group
              bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative">Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
