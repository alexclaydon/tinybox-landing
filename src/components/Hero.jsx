import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/ni_BG.svg'

export function Hero() {
  return (
    <Container className="relative h-60 text-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt="Background Image"
        />
      </div>
      <h1 className="relative z-10 pt-10 text-4xl mx-auto font-bold tracking-tight text-slate-900 sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
        Neighbourhood Intelligence
      </h1>
    </Container>
  )
}
