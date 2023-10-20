import Header from './components/Header'
import Fw23Images from './components/Fw23Images'

export default function Home() {
  return (
    <main className='min-h-screen bg-[#f5f2f7]'>
      <Header />
      <Fw23Images />
      <p className='fixed text-black -rotate-90 -left-[4.25rem] bottom-[6.25rem] z-10'>
        FW23 | BLAME SOCIETY
      </p>
    </main>
  )
}
