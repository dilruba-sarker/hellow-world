import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div >
        <h1 className='text-xl font-bold'>This is Home</h1>
        <Link href='/blog'> Blog</Link>
        <Link href='/product'> Product</Link>
        <Link href='/articles/breaking-news-123?lang="en"'> English</Link>
        <Link href='/articles/breaking-news-123?lang="fr"'> French</Link>
        
         </div>
  )
}
