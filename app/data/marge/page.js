import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Jefred',
  description: '...',
}
export default async function page() {
    const res = await fetch("http://127.0.0.1:5000/question", {
      cache: "no-store",
    })
    const data = await res.json()
    console.log(data)
  return (
    <div className='mt-20'>
      <h1>bangla</h1>
    {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-md p-4 mb-4">
          <Link href={`/data/marge/${item._id}`}>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          </Link>
          <div className="text-gray-500 text-sm">প্রশ্ন করেছেনঃ</div>
          {item.content && <p className="mt-2">{item.content}</p>}
          {/* Render content only if it's not empty */}
        </div>
      ))}
    </div>
  )
}
