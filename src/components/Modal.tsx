'use Client'
import React, { SetStateAction } from 'react'
import tw, { css } from 'twin.macro'

interface IProps {
  show: boolean
  close: React.Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

const Modal = ({ show, close, children }: IProps) => {
  if (show) {
    return (
      <div
        css={tw`fixed left-0 top-0 right-0 bottom-0 [background-color: rgba(34,34,34,.5)] [z-index: 1010]`}
        onMouseDown={() => close(!show)}
      >
        <div
          css={tw`absolute w-[462px] h-auto py-0 px-8 [box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white`}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            css={tw`absolute top-[14px] right-[20px] decoration-0`}
            onClick={() => close(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              css={tw`w-8 h-8`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div>
            <p
              css={tw`text-center py-[18px] [font-size: 18px] [min-height: 60px] leading-[22px] [font-weight: 700] text-black [letter-spacing: -.15px]`}
            >
              배송 요청사항
            </p>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return <></>
}

export default Modal