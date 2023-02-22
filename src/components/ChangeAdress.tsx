'use Client'

import { SetStateAction } from 'react'
import tw from 'twin.macro'

interface IProps {
  close: React.Dispatch<SetStateAction<boolean>>
}

const ChangeAdress = ({ close }: IProps) => {
  return (
    <div css={tw`flex bg-white`}>
      <div css={tw`flex`}>
        <h1>주소변경창</h1>
      </div>
    </div>
  )
}

export default ChangeAdress
