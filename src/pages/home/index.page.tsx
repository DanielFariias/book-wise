import { ReactElement } from 'react'

import { DefaultLayout } from '@layouts/default'

import { LatestRating } from '@components/latest-rating'

import { PopularBooks } from '@components/popular-books'

import * as S from './styles'

function HomePage() {
  return (
    <S.HomeContainer>
      <LatestRating />
      <PopularBooks />
    </S.HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
