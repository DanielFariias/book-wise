import { Fragment, useState } from 'react'

import { TRatingWithAuthor, UserRatingCard } from '@components/user-rating-card'
import { Text } from '@components/typography/text'
import { Link } from '@components/ui/Link'

import * as S from './styles'
import { RatingForm } from '@components/rating-form'
import { useSession } from 'next-auth/react'
import { LoginDialog } from '@components/login-dialog'

type BookRatingsProps = {
  ratings: TRatingWithAuthor[]
  bookId: string
}

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const [showForm, setShowForm] = useState(false)

  const { status, data: session } = useSession()

  function handleRate() {
    setShowForm((prevState) => !prevState)
  }

  const isAuthenticated = status === 'authenticated'

  const sortedRatingsByDate = ratings?.sort((a, b) => {
    const dateA = new Date(a.created_at)
    const dateB = new Date(b.created_at)

    return dateB.getTime() - dateA.getTime()
  })

  const canRate = ratings.every(
    (rating) => rating.user_id !== session?.user?.id,
  )

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog

  return (
    <S.BookRatingsContainer>
      <header>
        <Text size="sm">Avaliações</Text>
        {canRate && (
          <RatingWrapper>
            <Link
              text="Avaliar"
              withoutIcon
              onClick={isAuthenticated ? handleRate : () => null}
            />
          </RatingWrapper>
        )}
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {sortedRatingsByDate?.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </S.BookRatingsContainer>
  )
}
