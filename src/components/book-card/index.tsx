import { Book } from '@prisma/client'

import * as S from './styles'
import { Text } from '@components/typography/text'
import { RatingStars } from '@components/rating-starts'

export type TBookWithAvgRating = Book & {
  avgRating: number
}

type TBookCardProps = {
  book: TBookWithAvgRating
  size?: 'md' | 'lg'
}

const IMAGE_SIZES = {
  md: {
    width: 64,
    height: 94,
  },
  lg: {
    width: 108,
    height: 152,
  },
}

export function BookCard({ book, size = 'md' }: TBookCardProps) {
  return (
    <S.BookCardContainer>
      <S.BookImage
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        css={{ minWidth: IMAGE_SIZES[size].width }}
        alt={book.name}
        src={book.cover_url}
      />

      <S.BookDetails>
        <div>
          <S.BookName size="xs">{book.name}</S.BookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>

        <RatingStars rating={book.avgRating} />
      </S.BookDetails>
    </S.BookCardContainer>
  )
}
