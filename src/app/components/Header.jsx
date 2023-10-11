import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex w-screen justify-between'>
      <nav>
        <ul className='flex'>
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
        </ul>
      </nav>
      <div>
        <div className='bg-[url("/44_LOGO_transparent.avif")]'></div>
      </div>
      <nav>
        <Link href='/'>FW22 | SCREWED UP</Link>
        <Link href='/'>2222 | EVERY DARK NIGHT</Link>
      </nav>
    </header>
  )
}
