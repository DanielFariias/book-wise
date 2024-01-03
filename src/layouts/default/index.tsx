import Head from 'next/head'

import { ReactNode } from 'react'

import * as S from './styles'
import { Sidebar } from '@components/sidebar'

type DefaultLayoutProps = {
  children: ReactNode
  title: string
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <S.LayoutContainer>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <Sidebar />

      <S.LayoutContent>{children}</S.LayoutContent>
    </S.LayoutContainer>
  )
}
