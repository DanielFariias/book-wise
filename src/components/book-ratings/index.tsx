import { useState } from 'react'

import { TRatingWithAuthor, UserRatingCard } from '@components/user-rating-card'
import { Text } from '@components/typography/text'
import { Link } from '@components/ui/Link'

import * as S from './styles'
import { RatingForm } from '@components/rating-form'

type BookRatingsProps = {
  ratings: TRatingWithAuthor[]
  bookId: string
}

export function BookRatings({ ratings, bookId }: BookRatingsProps) {
  const [showForm, setShowForm] = useState(false)

  function handleRate() {
    setShowForm((prevState) => !prevState)
  }

  const sortedRatingsByDate = ratings?.sort((a, b) => {
    const dateA = new Date(a.created_at)
    const dateB = new Date(b.created_at)

    return dateB.getTime() - dateA.getTime()
  })

  return (
    <S.BookRatingsContainer>
      <header>
        <Text size="sm">Avaliações</Text>
        <Link
          href="/book/1/ratings"
          text="Avaliar"
          withoutIcon
          onClick={handleRate}
        />
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
