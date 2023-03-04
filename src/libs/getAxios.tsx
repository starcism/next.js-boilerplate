import axios from 'axios'

export default async function getProductInfo() {
  const { data } = await axios.get('/api/product_info')
  return data
}