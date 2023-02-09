import Image from 'next/image'
import ccaLogoImage from '@/images/cca-logo.svg'
import logoImage from '@/images/oto-logo.svg'
import rbiLogoImage from '@/images/rapid.png'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="text-otodarkblue">
      <Container>
        <div className="flex flex-col items-center pt-10">
          <div className="mb-6 flex">
            <Image className="mx-auto" src={logoImage} alt="Offer to Own logo" unoptimized />
          </div>
          <p className="mb-4">affiliated with</p>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex gap-x-12">
            <Image
              className="mx-auto"
              width="240"
              src={ccaLogoImage}
              alt="CCA Logo"
              unoptimized
            />
            <Image
              className="mx-auto"
              width="189"
              src={rbiLogoImage}
              alt="Rapid Building Inspection logo"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </footer>
  )
}
