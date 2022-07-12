import Head from 'next/head'
import TheHeader from './theHeader'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>日本語</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-full flex flex-col w-full max-w-6xl mx-auto">
        <TheHeader />

        <main className="p-8 flex-1">
          {children}
        </main>
      </div>
    </>
  )
}