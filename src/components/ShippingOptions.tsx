import React, { SetStateAction, useState } from 'react'
import tw, { css } from 'twin.macro'

interface IProps {
  close: React.Dispatch<SetStateAction<boolean>>
  setOption: (option: string) => void
}

const ShippingOptions = ({ close, setOption }: IProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number>(0)
  const [textareaValue, setTextareaValue] = useState('')
  const [message, setMessage] = useState([
    '요청사항 없음',
    '문 앞에 놓아주세요',
    '경비실에 맡겨 주세요',
    '파손 위험 상품입니다. 배송 시 주의해주세요',
  ])
  const handleOptionClick = (index: number) => {
    setCheckedIndex(index)
  }
  const handleSetOption = (option: string) => {
    setOption(option)
    close(false)
  }

  return (
    <div css={tw`flex flex-col`}>
      <div
        css={[
          tw`flex justify-between cursor-pointer py-4`,
          checkedIndex === 0 && tw`[font-weight: 700]`,
          css`
            font-size: 15px;
            border-bottom: 1px solid rgba(34, 34, 34, 0.05);
          `,
        ]}
        onClick={() => handleOptionClick(0)}
      >
        <p className="">{message[0]}</p>
        {checkedIndex === 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <div
        css={[
          tw`flex justify-between cursor-pointer py-4`,
          checkedIndex === 1 && tw`[font-weight: 700]`,
          css`
            font-size: 15px;
            border-bottom: 1px solid rgba(34, 34, 34, 0.05);
          `,
        ]}
        onClick={() => handleOptionClick(1)}
      >
        <p className="">{message[1]}</p>
        {checkedIndex === 1 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <div
        css={[
          tw`flex justify-between cursor-pointer py-4`,
          checkedIndex === 2 && tw`[font-weight: 700]`,
          css`
            font-size: 15px;
            border-bottom: 1px solid rgba(34, 34, 34, 0.05);
          `,
        ]}
        onClick={() => handleOptionClick(2)}
      >
        <p className="">{message[2]}</p>
        {checkedIndex === 2 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <div
        css={[
          tw`flex justify-between cursor-pointer py-4`,
          checkedIndex === 3 && tw`[font-weight: 700]`,
          css`
            font-size: 15px;
            border-bottom: 1px solid rgba(34, 34, 34, 0.05);
          `,
        ]}
        onClick={() => handleOptionClick(3)}
      >
        <p className="">{message[3]}</p>
        {checkedIndex === 3 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <div css={tw`flex flex-col`}>
        <div
          css={[
            tw`flex justify-between cursor-pointer py-4`,
            checkedIndex === 4 && tw`[font-weight: 700]`,
            css`
              font-size: 15px;
            `,
          ]}
          onClick={() => handleOptionClick(4)}
        >
          <p className="">직접 입력</p>
          {checkedIndex === 4 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </div>
        {checkedIndex === 4 && (
          <div>
            <textarea
              css={[
                tw`w-full h-16 resize-none bg-transparent placeholder:text-gray-300 [font-weight: 400]`,
                css`
                  border: 1px solid #ebebeb;
                  border-radius: 10px;
                  padding: 14px 12px;
                  font-size: 14px;
                  &:focus {
                    border-color: #ebebeb;
                    outline: none;
                    box-shadow: none;
                  }
                `,
              ]}
              placeholder="내용을 입력해주세요.(최대 40자)"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            ></textarea>
          </div>
        )}
      </div>
      <div css={tw`text-center pt-[65px] pb-[32px] px-0`}>
        <button
          css={tw`inline-flex justify-center items-center bg-white px-[18px] [vertical-align: middle] w-[120px] h-[42px] [border-radius: 12px] [font-size: 14px] [border: 1px solid #d3d3d3] [color: rgba(34,34,34,.8)] [letter-spacing: -.14px] cursor-pointer`}
          onClick={() => close(false)}
        >
          취소
        </button>
        <button
          css={[
            tw`inline-flex justify-center items-center px-[18px] ml-2 [vertical-align: middle] w-[120px] h-[42px] [border-radius: 12px] [font-size: 14px] [color: rgba(34,34,34,.8)] [letter-spacing: -.14px] cursor-pointer`,
            checkedIndex === 4 && !textareaValue
              ? tw`text-white [background-color: #ebebeb] cursor-default`
              : tw`text-white [background-color: #222]`,
          ]}
          onClick={() =>
            checkedIndex === 4
              ? handleSetOption(textareaValue)
              : handleSetOption(message[checkedIndex])
          }
        >
          적용하기
        </button>
      </div>
    </div>
  )
}

export default ShippingOptions
