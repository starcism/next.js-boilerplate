'use client'

import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

export default function Home() {
  return (
    <main >
      <div>
        <h3 css={tw``}>Home</h3>
        <Link href='/payment/' css={tw`flex items-center justify-center [text-decoration: none] text-blue-500`}>결제하러 가기</Link>
      </div>
    </main>
  )
}