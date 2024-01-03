import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { NextPage } from 'next'

import { ReactElement, ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

import { globalStyles } from '@styles/globals'

export const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <div className={`${nunito.className}`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  )
}
