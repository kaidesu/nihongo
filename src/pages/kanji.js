import kanji from '../data/kanji.json'

export default function Kanji() {
  return (
    <>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        { kanji.map((item) => {
          return (
            <div className="relative bg-pink-500 text-pink-50 flex flex-col items-center justify-center p-3 shadow rounded-lg">
              <div className="text-7xl text-white font-bold pb-3">{ item.kanji }</div>
              <div>{ item.onyomi }</div>
              <div>{ item.meaning }</div>
            </div>
          )
        })}
        
      </dl>
    </>
  )
}