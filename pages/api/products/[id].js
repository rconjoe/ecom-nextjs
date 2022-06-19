import products from '../../../assets/products.json';

export default async function handler(req, res) {
  const { id } = req.query
  const product = products.find(product => product.id === id);
  res.json(product ? product : {})
}
