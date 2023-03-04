'use Client'

import { SetStateAction } from 'react'
import tw from 'twin.macro'

interface IProps {
  close: React.Dispatch<SetStateAction<boolean>>
}

const ChangeAdress = ({ close }: IProps) => {
  return (
    <div css={tw`flex flex-col bg-white`}>
      <div>
        <h1>주소변경창</h1>
        <div><h1>1</h1></div>
      </div>
    </div>
  )
}

export default ChangeAdress
