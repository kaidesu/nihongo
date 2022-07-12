import Link from 'next/link'

export default function TheHeader({ children }) {
  return (
    <>
      <div className="w-full px-4 py-8 text-base flex justify-between items-center">
        <Link href="/"><a className="font-bold text-lg hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md">日本語</a></Link>

        <div className="space-x-3">
          <Link href="/"><a className="font-bold hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md">Home</a></Link>
          {/* <Link href="/"><a className="font-bold hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md">Conjugation</a></Link> */}
        </div>
      </div>
    </>
  )
}