// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const products = [
  {
    id: 1,
    title: 'Anit-Aging Reguvenating Facial Moisturizer ',
    img: 'prod1.png',
    price: 40,
    old_price: 47,
    rating: 4,
    slug: 'product1',
    description:
      'Lorem ipsum dolor sit amet, consectetur at, scelerisque ut sapien, posuere non. Faucibus egestas',
  },
  {
    id: 2,
    title: 'Anit-Aging Reguvenating Facial Moisturizer ',
    img: 'prod2.png',
    price: 55,
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur at, scelerisque ut sapien, posuere non. Faucibus egestas',
    slug: 'product2',
  },
  {
    id: 3,
    title: 'Anit-Aging Reguvenating Facial Moisturizer ',
    img: 'prod3.png',
    price: 50,
    old_price: 54,
    rating: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur at, scelerisque ut sapien, posuere non. Faucibus egestas',
    slug: 'product3',
  },
  {
    id: 4,
    title: 'Anit-Aging Reguvenating Facial Moisturizer ',
    img: 'prod3.png',
    price: 50,
    old_price: 54,
    rating: 4,
    slug: 'product4',
    description:
      'Lorem ipsum dolor sit amet, consectetur at, scelerisque ut sapien, posuere non. Faucibus egestas',
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
