import { Head, Link } from '@inertiajs/react'

export default function Welcome() {
  return (
    <>
        <Head title='Welcome'/>
        <header className='w-full'>
            <nav className='w-[1024px] mx-auto'>
                <ul className='flex items-center justify-end space-x-4 py-2'>
                    <li><Link href={route('start')}>Let's Start</Link></li>
                </ul>
            </nav>
        </header>

        <div className='flex flex-col items-center w-full pt-56'>
            <h1 className="text-3xl text-gray-700 font-semibold">Hello, welcome to a Laravel Starter Kit</h1>
            <p className='mt-3 text-gray-500'>This Laravel starter kit brings <a href="https://github.com/tighten/ziggy">Ziggy</a>, <a href="https://inertiajs.com/">Inertia</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a></p>
        </div>

        <div className='absolute bottom-4 w-full'>
            <p className='text-sm text-gray-400 text-center'>Open-sourced under the <a href='https://opensource.org/licenses/MIT'>MIT license</a>.</p>
        </div>
    </>
  )
}
import { Head, Link } from '@inertiajs/react'

export default function Welcome() {
  return (
    <>
        <Head title='Welcome'/>
        <header className='w-full'>
            <nav className='w-[1024px] mx-auto'>
                <ul className='flex items-center justify-end space-x-4 py-2'>
                    <li><Link href={route('start')}>Let's Start</Link></li>
                </ul>
            </nav>
        </header>

        <div className='flex flex-col items-center w-full pt-56'>
            <h1 className="text-3xl text-gray-700 font-semibold">Hello, welcome to a Laravel Starter Kit</h1>
            <p className='mt-3 text-gray-500'>This Laravel starter kit brings <a href="https://github.com/tighten/ziggy">Ziggy</a>, <a href="https://inertiajs.com/">Inertia</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a></p>
        </div>

        <div className='absolute bottom-4 w-full'>
            <p className='text-sm text-gray-400 text-center'>Open-sourced under the <a href='https://opensource.org/licenses/MIT'>MIT license</a>.</p>
        </div>
    </>
  )
}
