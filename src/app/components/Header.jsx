import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full py-2 px-10 sticky'>
      <nav className='w-full'>
        <ul className=' w-full flex items-center justify-center gap-7'>
          <li>
            <Link href='/' className='text-black'>
              FW23 | BLAME SOCIETY
            </Link>
          </li>
          <li>
            <Link href='/' className='text-black'>
              SS23 | FULL OF FIRE
            </Link>
          </li>
          <Image
            src='/44_LOGO_transparent.avif'
            alt='logo'
            width={180}
            height={40}
            className='m-auto'
          />
          <li>
            <Link href='/' className='text-black'>
              FW22 | SCREWED UP
            </Link>
          </li>
          <li>
            <Link href='/' className='text-black'>
              SS22 | EVERY DARK NIGHT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
