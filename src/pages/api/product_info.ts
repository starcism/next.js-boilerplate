import { IProduct } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";

const product_info = {
  "product_id": "AA3834-101",
  "product_name_eng": "Jordan 1 x Off-White Retro High Chicago The Ten", 
  "product_name_kor": "조던 1 x 오프화이트 레트로 하이 시카고 더 텐",
  "product_img_url": "utils/p_11274_0_9cf1cedd81d846bbbbdf7ab94d898210.webp",
  "size": 280,
  "price": 7099000,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(product_info)
}