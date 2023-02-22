'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
//import Bootpay from '@bootpay/client-js'
import ShippingOptions from '@/components/ShippingOptions'
import tw from 'twin.macro'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import imagesrc from '@/utils/1.png'
import Modal from '@/components/Modal'
import { IProduct } from '@/types/types'
import getProductInfo from '@/libs/getAxios'
import ChangeAdress from '@/components/ChangeAdress'

export default function Page() {
  const { register } = useForm()
  const [isChangeAdressModal, setIsChangeAdressModal] = useState(false)
  const [isShippingOptionsModal, setIsShippingOptionsModal] = useState(false)
  const [productInfo, setProductInfo] = useState<null | IProduct>(null)
  const [shippingOption, setShippingOption] = useState<string>()
  useEffect(() => {
    getProductInfo().then((data) => setProductInfo(data))
  }, [])

  const handleShippingOption = (option: string) => {
    setShippingOption(option)
  }
  // const payment = async () => {
  //   //const res = await Bootpay.requestPayment(data);
  // }

  return (
    <div css={tw`w-screen h-screen bg-[#fafafa]`}>
      {/* 회색 배경 */}
      <div css={tw`[margin: 0 auto] [padding: 20px 40px 160px] [max-width: 780px]`}>
        {/* 컨테이너 */}
        {/* --- 상품 정보 --- */}
        <div css={tw`w-full [padding: 32px] [border: 8px solid #fafafa] bg-white `}>
          <div css={tw`flex bg-white items-center`}>
            <div css={tw`[background-color: rgb(246, 238, 237)] pt-0 w-20 h-20 shrink-0 [border-radius: 10px] overflow-hidden relative`}>
              <Image alt="" src={imagesrc} css={tw`w-full h-auto`} />
            </div>
            <div css={tw`overflow-hidden flex-1 pl-[16px]`}>
              {productInfo ? (
                <>
                  <strong
                    css={tw`block [line-height: 17px] [font-size: 14px] overflow-hidden [text-overflow: ellipsis] [white-space: nowrap] [font-weight: bold]`}
                  >
                    {productInfo.product_id}
                  </strong>
                  <p css={tw`block p-0 m-0 mt-[1px] [line-height: 17px] [font-size: 14px] overflow-hidden [text-overflow: ellipsis] [white-space: nowrap]`}>
                    {productInfo.product_name_eng}
                  </p>
                  <p
                    css={tw`block p-0 m-0 mt-[2px] [line-height: 16px] [font-size: 13px] [letter-spacing: -.05px] overflow-hidden [text-overflow: ellipsis] [white-space: nowrap] [color: rgba(34,34,34,.5)]`}
                  >
                    {productInfo.product_name_kor}
                  </p>
                  <div css={tw`flex items-start justify-between p-0 m-0 mt-[7px]`}>
                    <p css={tw`p-0 m-0 [line-height: 17px] [font-size: 14px] [font-weight: 700] [letter-spacing: 0]`}>{productInfo.size}</p>
                  </div>
                </>
              ) : (
                <>
                  <strong css={tw`bg-gray-500 w-20 h-4`}></strong>
                  <p css={tw`bg-gray-500 w-20 h-3`}></p>
                  <p css={tw`bg-gray-500 w-20 h-3`}></p>
                  <div>
                    <p css={tw`bg-gray-500 w-20 h-3`}></p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* --- 상품 정보 --- */}
        {/* --- 배송 주소 섹션 --- */}
        <section css={tw`w-full [padding: 32px] [border: 8px solid #fafafa] bg-white`}>
          <div>
            <div css={tw`flex items-center pb-3`}>
              <h3 css={tw`[line-height: 22px] [font-size: 18px] [font-weight: 700] [letter-spacing: -.15px]`}>배송 주소</h3>
              <Link
                href="/"
                css={tw`ml-auto pl-0.5 [font-size: 13px] [text-decoration: none] [letter-spacing: -.07px] [color: rgba(34,34,34,.5)] cursor-pointer`}
              >
                +새 주소 추가
              </Link>
            </div>
            <div>
              <div css={tw`relative pr-20`}>
                <div>
                  <dl>
                    <div css={tw`overflow-hidden [line-height: 17px] [letter-spacing: -.15px]`}>
                      <dt css={tw`float-left [min-width: 80px] [font-size: 13px] [letter-spacing: -.07px] [color: rgba(34,34,34,.5)]`}>받는 분</dt>
                      <dd css={tw`overflow-hidden [font-size: 14px] [letter-spacing: -.21px] [margin-inline-start: 40px]`}>최**</dd>
                    </div>
                    <div css={tw`overflow-hidden [line-height: 17px] [letter-spacing: -.15px] mt-1.5`}>
                      <dt css={tw`float-left [min-width: 80px] [font-size: 13px] [letter-spacing: -.07px] [color: rgba(34,34,34,.5)]`}>연락처</dt>
                      <dd css={tw`overflow-hidden [font-size: 14px] [letter-spacing: -.21px] [margin-inline-start: 40px]`}>010-0***-**00</dd>
                    </div>
                    <div css={tw`overflow-hidden [line-height: 17px] [letter-spacing: -.15px] mt-1.5`}>
                      <dt css={tw`float-left [min-width: 80px] [font-size: 13px] [letter-spacing: -.07px] [color: rgba(34,34,34,.5)]`}>배송 주소</dt>
                      <dd css={tw`overflow-hidden [font-size: 14px] [letter-spacing: -.21px] [margin-inline-start: 40px]`}>서울 중랑구 면목로 000-00</dd>
                    </div>
                  </dl>
                </div>
                <button
                  type="button"
                  onClick={() => setIsChangeAdressModal(true)}
                  css={tw`inline-flex justify-center cursor-pointer bg-white [text-decoration: none] items-center absolute top-1/2 [margin-top: -17px] right-0 [border: 1px solid #d3d3d3] [color: rgba(34,34,34,.8)] [font-size: 12px] [letter-spacing: -.06px] [padding: 0 14px] h-[34px] [border-radius: 10px]`}
                >
                  <span css={tw`m-0 p-0`}>변경</span>
                </button>
                {isChangeAdressModal && (
                  <Modal show={isChangeAdressModal} close={setIsChangeAdressModal}>
                    {<ChangeAdress close={setIsChangeAdressModal} />}
                  </Modal>
                )}
              </div>
              {/* --- 요청 사항 --- */}
              <div css={tw`relative mt-3`}>
                <button
                  type="button"
                  onClick={() => setIsShippingOptionsModal(true)}
                  css={tw`w-full text-left [font-size: 14px] h-12 py-[14px] px-[12px] [border: 1px solid #ebebeb] [border-radius: 10px] cursor-pointer [line-height: normal] [text-indent: 0px] [letter-spacing: normal] inline-block [background: none] bg-transparent`}
                >
                  {shippingOption ? (
                    <span css={tw`inline-block [max-width: calc(100% - 20px)] [color: #222] [text-overflow: ellipsis] [white-space: nowrap] overflow-hidden `}>
                      {shippingOption}
                    </span>
                  ) : (
                    <span css={tw`[color: rgba(34,34,34,.3)]`}>배송 시 요청사항을 선택하세요.</span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    css={tw`h-[18px] w-[18px] [font-size: 14px] float-right right-[8px] top-[13px] overflow-hidden`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                {isShippingOptionsModal && (
                  <Modal show={isShippingOptionsModal} close={setIsShippingOptionsModal}>
                    {<ShippingOptions close={setIsShippingOptionsModal} setOption={handleShippingOption} />}
                  </Modal>
                )}
              </div>
            </div>
          </div>
          {/* --- 요청 사항 --- */}
        </section>
        {/* --- 배송 주소 섹션 --- */}
        <form className="flex flex-col">
          <div className="flex items-center justify-center">
            <input
              className="text-center border-2 my-2 text-gray-600 border-gray-500 hover:border-blue-500 hover:text-gray-800 shadow-sm rounded-lg w-40 h-8 bg-white"
              type="text"
              value="가격"
            ></input>
          </div>
          <div className="flex items-center justify-end">
            <input
              className="flex border-2 items-center justify-center h-8 w-8 my-2 ml-2 text-gray-600 border-gray-500 hover:border-blue-500 hover:text-gray-800 shadow-sm rounded-lg bg-white"
              type="button"
              value="+"
            ></input>
            <input
              className="flex border-2 items-center justify-center h-8 w-8 my-2 ml-2 text-gray-600 border-gray-500 hover:border-blue-500 hover:text-gray-800 shadow-sm rounded-lg bg-white"
              type="button"
              value="-"
            ></input>
          </div>
        </form>
      </div>
    </div>
  )
}
