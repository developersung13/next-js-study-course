import { connectDB } from '@/util/database/dbConnection';

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db('shop');
  // let result = await db.collection('items').find().toArray();

  return (
    <div className='flex justify-center mt-[15rem] font-thin'>
      <div className='bg-neutral-50 text-left pl-[1rem] pr-[3rem] py-[3rem] shadow-xl'>
        <h1 className='text-[4rem] tracking-[2rem]'>SHOP</h1>
        <h3 className='text-[1.5rem] tracking-[0.5rem] underline underline-offset-8 decoration-solid decoration-1'>
          MORE THAN SOPHISTICATED
        </h3>
      </div>
    </div>
  );
}
