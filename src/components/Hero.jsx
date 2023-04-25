import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/ni_BG.svg'

export function Hero() {
  return (
    <Container className="relative h-48 lg:h-60 text-center">
  <div className="absolute top-24 lg:top-28 w-[1216px] h-full -ml-20 lg:ml-0">
    <Image
      src={backgroundImage}
      layout="fill"
      objectFit="cover"
      priority={true}
      alt="Background Image"
    />
  </div>
      <h1 className="relative z-10 text-4xl mx-auto font-bold leading-tight tracking-tight text-slate-900 pt-3 lg:pt-10 sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
        Neighbourhood Intelligence
      </h1>
    </Container>
  )
}
