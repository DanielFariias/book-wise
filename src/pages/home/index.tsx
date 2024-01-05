import { LatestRating } from '@components/latest-rating'

import { PopularBooks } from '@components/popular-books'

import * as S from './styles'

export function HomePageComponent() {
  return (
    <S.HomeContainer>
      <LatestRating />
      <PopularBooks />
    </S.HomeContainer>
  )
}
