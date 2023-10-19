import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full p-4'>
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
            width={232}
            height={50}
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
