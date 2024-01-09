import { ComponentProps, useState } from 'react'

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
  const [previewValue, setPreviewValue] = useState(0)

  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  function handleMouseEnter(value: number) {
    if (isEditable) setPreviewValue(value)
  }

  function handleMouseLeave() {
    if (isEditable) setPreviewValue(rating)
  }

  function handleSetValue() {
    if (isEditable) setRating(ratingValue)
  }

  return (
    <S.RatingStarsContainer
      css={isEditable ? { cursor: 'pointer' } : undefined}
      size={size}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          weight={index + 1 <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </S.RatingStarsContainer>
  )
}
