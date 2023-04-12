import Image from 'next/image'

import { Container } from '@/components/Container'

import logoTinybox from '@/images/logos/tb_Logo.svg'
import logoTypeTinybox from '@/images/logos/tb_Logotype.svg'

export function Hero() {
  return (
    <Container className="pb-16 sm:pb-16 pt-16 text-center lg:pt-32">
      <div className="flex items-end mx-auto max-w-md sm:max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="ml-auto mr-3 max-w-2xs sm:max-w-2xl">
          <Image src={logoTinybox} alt="Tinybox Logo" width={475} unoptimized />
        </div>
        <div className="mx-auto max-w-2xl">
          <Image src={logoTypeTinybox} alt="Tinybox Name" unoptimized />
        </div>
      </div>
      <h1 className="mx-auto pt-6 max-w-4xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-5xl">
        Neighbourhood Intelligence
      </h1>
      <p className="mx-auto pt-4 mt-6 max-w-2xl text-lg sm:text-2xl tracking-tight text-slate-700">
        Take the guesswork out of finding the right neighbourhood.
      </p>
    </Container>
  )
}
