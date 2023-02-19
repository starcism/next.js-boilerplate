'use client'

import React from 'react'
import tw from 'twin.macro'

export default function Home() {
  return (
    <main >
      <div>
        <h1 css={tw`text-red-500 [background-color: gray]`}>메인입니다</h1>
      </div>
    </main>
  )
}
