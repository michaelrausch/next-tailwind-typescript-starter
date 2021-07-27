import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <div>
      <NextSeo title="Home"/>

      <h1 className="text-5xl font-black text-center mt-10">Hello, World</h1>
    </div>
  )
}
