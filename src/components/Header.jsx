import Image from 'next/image'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import logoTinybox from '@/images/logos/tb_Logo-Logotype.svg'

// function MobileNavLink({ href, children }) {
//   return (
//     <Popover.Button as={Link} href={href} className="block w-full p-2">
//       {children}
//     </Popover.Button>
//   )
// }

// function MobileNavIcon({ open }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path
//         d="M0 1H14M0 7H14M0 13H14"
//         className={clsx(
//           'origin-center transition',
//           open && 'scale-90 opacity-0'
//         )}
//       />
//       <path
//         d="M2 2L12 12M12 2L2 12"
//         className={clsx(
//           'origin-center transition',
//           !open && 'scale-90 opacity-0'
//         )}
//       />
//     </svg>
//   )
// }

// function MobileNavigation() {
//   return (
//     <Popover>
//       <Popover.Button
//         className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
//         aria-label="Toggle Navigation"
//       >
//         {({ open }) => <MobileNavIcon open={open} />}
//       </Popover.Button>
//       <Transition.Root>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="duration-150 ease-in"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
//         </Transition.Child>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Popover.Panel
//             as="div"
//             className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
//           >
//             <MobileNavLink href="#features">Features</MobileNavLink>
//             <hr className="m-2 border-slate-300/40" />
//             <MobileNavLink href="/login">Sign in</MobileNavLink>
//           </Popover.Panel>
//         </Transition.Child>
//       </Transition.Root>
//     </Popover>
//   )
// }

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image
                className="h-8 w-auto sm:h-12"
                src={logoTinybox}
                alt="Tinybox Logo"
                unoptimized
              />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Link
              href="mailto:hello@tinybox.app"
              class="w-24 rounded-full bg-[#00AA95] px-4 py-2 text-center text-xs font-bold text-white hover:bg-[#00FFDA] sm:text-sm"
            >
              Contact
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=qpFd2oDRVgU"
              class="w-24 rounded-full bg-[#00AA95] px-4 py-2 text-center text-xs font-bold text-white hover:bg-[#00FFDA] sm:text-sm"
            >
              Video
            </Link>
            <Link
              href="https://tinybox-c7a54.ondigitalocean.app/world/map/"
              class="w-24 rounded-full bg-[#00AA95] px-4 py-2 text-center text-xs font-bold text-white hover:bg-[#00FFDA] sm:text-sm"
            >
              Try It
            </Link>
            <div className="-mr-1 md:hidden">{/* <MobileNavigation /> */}</div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
