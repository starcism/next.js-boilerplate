export interface IUser {
  user_id: string;
  user_name: string;
  user_phone: string;
  user_shipping_address: string;
}

export interface IProduct {
  product_id: string;
  product_name_eng: string;
  product_name_kor: string;
  product_img_url: string;
  size: number;
  price: number;
}