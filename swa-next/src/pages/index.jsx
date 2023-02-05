import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PlannedMaintenance } from '@/components/PlannedMaintenance'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Buyers and Real Estate Agents Digital Offer Management Platform |
          OffertoOwn.com.au
        </title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <PlannedMaintenance />
      </main>
      <Footer />
    </>
  )
}
