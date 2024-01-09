import { Text } from '@components/typography/text'
import * as S from './styles'
import { Link } from '@components/ui/Link'
import { TRatingWithAuthor, UserRatingCard } from '@components/user-rating-card'

type BookRatingsProps = {
  ratings: TRatingWithAuthor[]
}

export function BookRatings({ ratings }: BookRatingsProps) {
  function handleRating() {
    console.log('handleRating')
  }
  return (
    <S.BookRatingsContainer>
      <header>
        <Text size="sm">Avaliações</Text>
        <Link
          href="/book/1/ratings"
          text="Avaliar"
          withoutIcon
          onClick={handleRating}
        />
      </header>

      <section>
        {ratings?.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </S.BookRatingsContainer>
  )
}
