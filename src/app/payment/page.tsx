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
import buy_npay from '@/utils/buy_npay.png'
import buy_kakaopay from '@/utils/buy_kakaopay.png'

export default function Page() {
  const { register } = useForm()
  const [isChangeAdressModal, setIsChangeAdressModal] = useState(false)
  const [isShippingOptionsModal, setIsShippingOptionsModal] = useState(false)
  const [productInfo, setProductInfo] = useState<null | IProduct>(null)
  const [shippingOption, setShippingOption] = useState<string>()
  const [payOption, setPayOption] = useState<string>()
  const [paymentDisabled, setPaymentDisabled] = useState<boolean>(false)

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
        <div css={tw`w-full [padding: 32px] [border-top: 8px solid #fafafa] bg-white `}>
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
        <section css={tw`w-full [padding: 32px] [border-top: 8px solid #fafafa] bg-white`}>
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
        {/* --- 결제 섹션 --- */}
        <section css={tw`w-full [padding: 32px] [border-top: 8px solid #fafafa] bg-white`}>
          <div>
            <h3 css={tw`[line-height: 22px] [font-size: 18px] [font-weight: 700] [letter-spacing: -.15px]`}>결제 방법</h3>
          </div>
          <div css={tw`pt-[7px]`}>
            <h4 css={tw`flex items-center [padding: 16px 0 13px]`}>
              <div css={tw`[font-size: 15px] [letter-spacing: -.15px] [font-weight: 400]`}>
                <strong css={tw`[font-weight: 600]`}>일반 결제</strong>
                <span css={tw`pl-[5px] [font-size: 12px] [letter-spacing: -.06px] [font-weight: 350] [color: rgba(34,34,34,.5)]`}>일시불・할부</span>
              </div>
            </h4>
          </div>
          <div css={tw`flex [flex-flow: row wrap] [grid-gap: 6px] [gap: 6px]`}>
            <div onClick={() => setPayOption('creditcard')} css={tw`flex [flex-basis: calc(33.3333% - 4px)] flex-col cursor-pointer`}>
              <div
                css={[
                  tw`flex [border-radius: 10px] [border: 1px solid #ebebeb] items-center h-[60px] [padding: 7px 7px 8px 11px]`,
                  payOption === 'creditcard' && tw`[border: 1px solid #222]`,
                ]}
              >
                <div css={tw`pr-[8px]`}>
                  <p css={[tw`[font-size: 14px] [letter-spacing: -.21px]`, payOption === 'creditcard' && tw`[font-weight: 700]`]}>신용카드</p>
                </div>
              </div>
            </div>
            <div onClick={() => setPayOption('naverpay')} css={tw`flex [flex-basis: calc(33.3333% - 4px)] flex-col cursor-pointer`}>
              <div
                css={[
                  tw`flex [border-radius: 10px] [border: 1px solid #ebebeb] items-center h-[60px] [padding: 7px 7px 8px 11px]`,
                  payOption === 'naverpay' && tw`[border: 1px solid #222]`,
                ]}
              >
                <div css={tw`pr-[8px]`}>
                  <p css={[tw`[font-size: 14px] [letter-spacing: -.21px]`, payOption === 'naverpay' && tw`[font-weight: 700]`]}>네이버페이</p>
                </div>
                <Image alt="네이버페이" src={buy_npay} width={40} height={40} css={tw`ml-auto border-0 cursor-pointer`} />
              </div>
            </div>
            <div onClick={() => setPayOption('kakaopay')} css={tw`flex [flex-basis: calc(33.3333% - 4px)] flex-col cursor-pointer`}>
              <div
                css={[
                  tw`flex [border-radius: 10px] [border: 1px solid #ebebeb] items-center h-[60px] [padding: 7px 7px 8px 11px]`,
                  payOption === 'kakaopay' && tw`[border: 1px solid #222]`,
                ]}
              >
                <div css={tw`pr-[8px]`}>
                  <p css={[tw`[font-size: 14px] [letter-spacing: -.21px]`, payOption === 'kakaopay' && tw`[font-weight: 700]`]}>카카오페이</p>
                </div>
                <Image alt="카카오페이" src={buy_kakaopay} width={40} height={40} css={tw`ml-auto border-0 cursor-pointer`} />
              </div>
            </div>
          </div>
        </section>
        {/* --- 결제 섹션 --- */}
        <section css={tw`w-full [padding: 32px] [border-top: 8px solid #fafafa] bg-white`}>
          <div>
            <ul css={tw`pt-[32px] pl-[32px] pr-[32px] pb-[16px] [list-style: none]`}>
              <li css={tw`[border-top: 1px solid #ebebeb] [font-weight: 700] [padding: 19px 0 20px]`}>
                <Link href="/payment" css={tw`flex items-center [text-decoration: none] `}>
                  <div css={tw`mr-[20px] [word-break: break-all] [word-wrap: break-word]`}>
                    <p css={tw`[line-height: 18px] [font-size: 15px]`}>구매 조건을 모두 확인하였으며, 거래 진행에 동의합니다.</p>
                  </div>
                  <div onClick={() => setPaymentDisabled(!paymentDisabled)} css={tw`ml-auto relative`}>ㅇ</div>
                </Link>
              </li>
            </ul>
          </div>
          <div css={tw`[padding: 0 32px 32px]`}>
            <div css={tw`pt-[16px] pb-[12px]`}>
              <dl css={tw`flex justify-between items-center`}>
                <dt css={tw`[line-height: 18px] [font-size: 15px] [font-weight: 700]`}>총 결제금액</dt>
                <dd css={tw`flex items-center [color: #f15746]`}>
                  <span css={tw`[line-height: 26px] [font-style: italic] [font-size: 20px] [font-weight: 500] [letter-spacing: normal]`}>1,000,000</span>
                  <span css={tw`[line-height: 26px] [font-size: 20px] [font-weight: 600] [word-spacing: -.15px]`}>원</span>
                </dd>
              </dl>
            </div>
            <div>
              <Link
                href={`${payOption}`}
                css={[
                  tw`inline-flex items-center [vertical-align: middle] justify-center [font-weight: 600] h-[52px] w-full [font-size: 16px] [letter-spacing: -.16px] [border-radius: 12px] [color: white] [background-color: #ebebeb] cursor-default`, paymentDisabled && tw`[background-color: #ef6253] cursor-pointer`]}
              >
                결제하기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
