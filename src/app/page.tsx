import Image from 'next/image'
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import Hero from './components/Hero/Hero'

export default function Home() {
  return (
    <main>
      <Header />
      <Video />
      <Hero />
    </main>
  )
}
