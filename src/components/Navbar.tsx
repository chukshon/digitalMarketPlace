import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href={"/"} className='flex z-40 font-semibold'>
              <span>quill</span>
            </Link>
          </div>
        </MaxWidthWrapper>
      </header>
    </nav>
  )
}

export default Navbar
