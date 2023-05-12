import { connectDB } from '@/util/database/dbConnection';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { id },
    } = req;

    const db = (await connectDB).db('shop');
    const result = await db.collection('review').find().toArray();
    if (!result) {
      res.status(404).json({ message: 'Items not found.' });
      return;
    }

    const filteredResult = result.filter(
      (review) => review.productNo.toString() === id
    );

    switch (req.method) {
      case 'POST':
        break;
      case 'GET':
        let reviews = filteredResult.map((review) => ({
          _id: review._id.toString(),
          productNo: review.productNo.toString(),
          writer: review.writer,
          title: review.title,
          content: review.content,
          orderedSize: review.orderedSize,
          userHeight: review.userHeight,
          userWeight: review.userWeight,
        }));

        // 리뷰 작성 고객의 성명 중 첫 글자를 제외한 나머지 문자들은 '*' 문자로 마스킹 처리 후 저장
        reviews.forEach((item) => {
          item.writer = item.writer[0] + '*'.repeat(item.writer.length - 1);
        });

        res.status(200).json(reviews);
        break;
      default:
        return;
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.' });
  }
}
