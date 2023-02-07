import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@components/ui'

interface Props {
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="flex flex-col justify-center py-32 bg-black mg:flex-row">
      <Container>
        <div className="">
          <h2 className="max-w-xl text-4xl font-extrabold leading-10 text-white flec-1 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            {headline}
          </h2>
          <div className="flex-1 max-w-4xl mt-5 text-xl leading-7 text-white">
            <p>{description}</p>
            <Link
              className="block pt-3 font-bold text-white hover:underline"
              href="/"
            >
              Read it here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
