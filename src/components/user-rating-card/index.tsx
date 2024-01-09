import { Rating, User } from '@prisma/client'
import * as S from './styles'
import { useSession } from 'next-auth/react'
import { getRelativeTimeString } from 'src/utils/getRelativeTimeString'
import Link from 'next/link'
import { Avatar } from '@components/ui/Avatar'
import { Heading } from '@components/typography/heading'
import { Text } from '@components/typography/text'
import { RatingStars } from '@components/rating-starts'

export type TRatingWithAuthor = Rating & {
  user: User
}

type UserRatingCardProps = {
  rating: TRatingWithAuthor
}

export function UserRatingCard({ rating }: UserRatingCardProps) {
  const { data: session } = useSession()

  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR')

  const isOwner = session?.user?.id === rating.user_id

  return (
    <S.UserRatingCardContainer variant={isOwner ? 'highlight' : 'primary'}>
      <S.UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt="avatar" src={rating.user.avatar_url ?? ''} />
          </Link>
          <div>
            <Heading size="xs">{rating.user.name}</Heading>
            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </S.UserDetails>

      <Text size="sm" color="gray-300">
        {rating.description}
      </Text>
    </S.UserRatingCardContainer>
  )
}
