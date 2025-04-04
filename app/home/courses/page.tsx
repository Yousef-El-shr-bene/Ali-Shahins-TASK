import Link from "next/link";

export default function Home() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black ' ><Link href={'/home/courses/courses-Details'} className='m-5 p-5 bg-white text-black rounded-2xl hover:bg-black hover:text-white' >/home/courses/courses-Details</Link></div>

  );
}
