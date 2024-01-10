import Link from 'next/link'
import * as S from './styles'
import { getRelativeTimeString } from 'src/utils/getRelativeTimeString'
import { Text } from '@components/typography/text'
import { ProfileRating } from '..'
import { Heading } from '@components/typography/heading'
import { RatingStars } from '@components/rating-starts'

type TProfileRatingCard = {
  rating: ProfileRating
}

export function ProfileRatingCard({ rating }: TProfileRatingCard) {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  return (
    <S.ProfileRatingCardContainer>
      <Text size="sm" color="gray-300">
        {distance}
      </Text>

      <S.CardContent>
        <S.BookDetails>
          <Link
            style={{ display: 'flex' }}
            href={`/explore?book=${rating.book_id}`}
          >
            <S.BookImage
              src={rating.book.cover_url}
              alt={rating.book.name}
              width={98}
              height={134}
            />
          </Link>
          <section>
            <div>
              <Heading size="sm">{rating.book.name}</Heading>
              <Text size="sm" color="gray-400">
                {rating.book.author}
              </Text>
            </div>

            <RatingStars rating={rating.rate} />
          </section>
        </S.BookDetails>
        <Text size="sm" color="gray-300">
          {rating.description}
        </Text>
      </S.CardContent>
    </S.ProfileRatingCardContainer>
  )
}
