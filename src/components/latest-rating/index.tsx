import { PageTitle } from '@components/ui/PageTitle'
import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '@components/typography/text'
import { RatingCard, TRatingWithAuthorAndBook } from '@components/rating-card'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'

import * as S from './styles'

export function LatestRating() {
  const { data: ratings } = useQuery<TRatingWithAuthorAndBook[]>({
    queryKey: ['latest-rating'],
    queryFn: async () => {
      const response = await api.get('/ratings/latest')
      return response.data.ratings ?? []
    },
  })

  return (
    <S.LatestRatingContainer>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </S.LatestRatingContainer>
  )
}
