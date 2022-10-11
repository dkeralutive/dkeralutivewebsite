// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const reviews = [
  {
    name: 'John Moris',
    rating: 4,
    review_date: '12/08/2022',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.',
  },
  {
    name: 'Mary Thomps',
    rating: 5,
    review_date: '12/08/2022',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.',
  },
  {
    name: 'Isakar Ivan',
    rating: 5,
    review_date: '12/08/2022',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl, vitae nisl.',
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(reviews);
}
