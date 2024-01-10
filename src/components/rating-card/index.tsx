import Link from 'next/link'
import * as S from './styles'
import { Avatar } from '@components/ui/Avatar'
import { Book, Rating, User } from '@prisma/client'
import { Text } from '@components/typography/text'
import { getRelativeTimeString } from 'src/utils/getRelativeTimeString'
import { RatingStars } from '@components/rating-starts'
import { Heading } from '@components/typography/heading'
import { useToggleShowMore } from 'src/hooks/use-toggle-show-more'

export type TRatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type TRatingCardProps = {
  rating: TRatingWithAuthorAndBook
  variant?: 'default' | 'compact'
}

const MAX_SUMMARY_LENGTH = 240

export function RatingCard({ rating, variant = 'default' }: TRatingCardProps) {
  const distance = getRelativeTimeString(new Date(), 'pt-BR')

  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating?.book?.summary, MAX_SUMMARY_LENGTH)

  return (
    <S.RatingCardContainer variant={variant}>
      {variant === 'default' && (
        <>
          <S.UserDetails>
            <section>
              <Link href={`/profile/${rating.user_id}`}>
                <Avatar
                  src={rating.user.avatar_url ?? ''}
                  alt={rating.user.name}
                />
              </Link>

              <div>
                <Text>{rating.user.name}</Text>
                <Text size="sm" color={'gray-400'}>
                  {distance}
                </Text>
              </div>
            </section>
            <RatingStars rating={rating.rate} />
          </S.UserDetails>
        </>
      )}

      <S.BookDetails>
        <Link
          style={{ display: 'flex' }}
          href={`/explore?book=${rating.book_id}`}
        >
          <S.BookImage
            width={108}
            height={152}
            alt="book"
            src={rating.book.cover_url}
          />
        </Link>

        <S.BookContent>
          <div>
            {variant === 'compact' && (
              <S.CompactDetails>
                <Text size="sm" color="gray-300">
                  {distance}
                </Text>

                <RatingStars rating={rating.rate} />
              </S.CompactDetails>
            )}
            <Heading size="xs">{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">
              {rating.book.author}
            </Text>
          </div>

          <Text
            size="sm"
            color="gray-300"
            css={{
              marginTop: variant === 'compact' ? 'auto' : '$5',
            }}
          >
            {bookSummary}
            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <S.ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? 'ver menos' : 'ver mais'}
              </S.ToggleShowMoreButton>
            )}
          </Text>
        </S.BookContent>
      </S.BookDetails>
    </S.RatingCardContainer>
  )
}
