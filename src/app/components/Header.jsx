import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='flex w-full justify-evenly p-4 m-auto'>
      <nav>
        <ul className='flex gap-10 items-center'>
          <li className='grow'>
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
            width={237}
            height={50}
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
