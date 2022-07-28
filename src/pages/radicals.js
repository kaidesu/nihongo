import radicals from '../data/radicals.json'

export default function Radicals() {
  return (
    <>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        { radicals.map((item) => {
          return (
            <div key={item.radicals} className="relative bg-sky-500 text-sky-50 flex flex-col items-center justify-center p-3 shadow rounded-lg">
              <div className="text-7xl text-white font-bold pb-3">{ item.radical }</div>
              <div>{ item.meaning }</div>
            </div>
          )
        })}
        
      </dl>
    </>
  )
}