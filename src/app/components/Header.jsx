import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex w-full justify-evenly p-4'>
      <nav>
        <ul className='flex gap-10 grow'>
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
          <div className='bg-[url("/44_LOGO_transparent.avif")] w-[340px] h-[50px] bg-no-repeat'></div>
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
