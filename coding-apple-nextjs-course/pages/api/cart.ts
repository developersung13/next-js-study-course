import { connectDB } from '@/util/database/dbConnection';
import { NextApiRequest, NextApiResponse } from 'next';

interface Item {
  _id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  size: number;
  orderNo: number;
  orderStatus: string;
  orderedDate: string;
}

export default async function Cart(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  const db = (await connectDB).db('shop');
  const result = await db.collection('orders').find().toArray();

  switch (req.method) {
    case 'POST':
      break;
    case 'GET':
      const items: Item[] = result.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        size: item.size,
        orderNo: item.orderNo,
        orderStatus: item.orderStatus,
        orderedDate: item.orderedDate,
      }));
      res.status(200).json(items);
      break;
    default:
      return;
  }
}
