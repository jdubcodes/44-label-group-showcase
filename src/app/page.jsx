import Image from 'next/image'
import Fw23Images from './components/Fw23Images'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-[#f5f2f7]'>
      <Image
        src='/44_LOGO_transparent.avif'
        alt='logo'
        width={340}
        height={200}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 hover:opacity-5'
      />
      <Fw23Images />
    </main>
  )
}
