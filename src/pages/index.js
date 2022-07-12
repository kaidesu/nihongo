import Image from 'next/image'
import image from '../../public/tokyo_tower.png'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-4xl text-center">
        <div className="w-[250px] mx-auto">
          <Image src={image} />
        </div>
        <h1 className="text-8xl font-extrabold leading-tight">
          日本語
        </h1>

        <p className="text-lg my-6">A set of various tools and guides to aid in learning Japanese.</p>
      </div>
    </div>
  )
}