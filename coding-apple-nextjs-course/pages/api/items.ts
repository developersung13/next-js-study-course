import { connectDB } from '@/util/database/dbConnection';
import { NextApiRequest, NextApiResponse } from 'next';

interface Item {
  _id: string;
  name: string;
  price: number;
}

export default async function Items(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  const db = (await connectDB).db('shop');
  const result = await db.collection('items').find().toArray();

  switch (req.method) {
    case 'POST':
      break;
    case 'GET':
      const items: Item[] = result.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        price: item.price,
      }));
      res.status(200).json(items);
      break;
    default:
      return;
  }
}
