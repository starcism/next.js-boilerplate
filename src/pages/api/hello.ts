// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface User {
  id: string;
  username: string;
  phone: string;
  email: string;
}

interface Item {
  id: string;
  name: string;
  qty: number;
  price: number;
}

interface Extra {
  open_type: string;
  card_quota: string;
  escrow: boolean;
}

interface Payment {
  application_id: string;
  price: number;
  order_name: string;
  order_id: string;
  pg: string;
  method: string;
  tax_free: number;
  user: User;
  items: Item[];
  extra: Extra;
}

const unknown_user: Payment[] = [
  {
    application_id: "59a4d323396fa607cbe75de4",
    price: 0,
    order_name: "테스트결제",
    order_id: "TEST_ORDER_ID",
    pg: "nicepay",
    method: "kakaopay",
    tax_free: 0,
    user: {
      id: "회원아이디",
      username: "회원이름",
      phone: "01000000000",
      email: "test@test.com"
    },
    items: [
      {
        id: "아이디",
        name: "이름",
        qty: 1,
        price: 0
      }
    ],
    extra: {
      open_type: "iframe",
      card_quota: "0,2,3",
      escrow: false
    }
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Payment[]>
) {
  res.status(200).json(unknown_user)
}
