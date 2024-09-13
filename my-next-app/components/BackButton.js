//component/BackButton.js
'use client'

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      ← Back
    </button>
  );
}