import { ComponentProps } from 'react'

import { Star } from '@phosphor-icons/react'

import * as S from './styles'

type TRatingStarsProps = ComponentProps<typeof S.RatingStarsContainer> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  setRating?: (rating: number) => void
}

export function RatingStars({
  rating,
  size = 'sm',
  setRating,
  ...props
}: TRatingStarsProps) {
  return (
    <S.RatingStarsContainer>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          weight={index + 1 <= rating ? 'fill' : 'regular'}
        />
      ))}
    </S.RatingStarsContainer>
  )
}
