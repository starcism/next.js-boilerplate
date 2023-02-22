import { IUser } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";

const user_info= {
  "user_id": "example@gmail.com", 
  "user_name": "최상문",
  "user_phone": "010-0000-0000", 
  "user_shipping_address": "서울 중랑구 면목로 000-00", 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(user_info)
}