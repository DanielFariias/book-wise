import { PageTitle } from '@components/ui/PageTitle'
import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '@components/typography/text'
import { RatingCard, TRatingWithAuthorAndBook } from '@components/rating-card'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'

import * as S from './styles'
import { useSession } from 'next-auth/react'
import { Link } from '@components/ui/Link'

export function LatestRating() {
  const { data: session } = useSession()
  const userId = session?.user?.id

  const { data: ratings } = useQuery<TRatingWithAuthorAndBook[]>({
    queryKey: ['latest-rating'],
    queryFn: async () => {
      const response = await api.get('/ratings/latest')
      return response.data.ratings ?? []
    },
  })

  const { data: latestUserRating } = useQuery<TRatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', userId],
    queryFn: async () => {
      const response = await api.get('/ratings/user-latest')
      return response.data.rating ?? []
    },
    enabled: !!userId,
  })
  console.log(latestUserRating)

  return (
    <S.LatestRatingContainer>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      {latestUserRating && (
        <S.LatestSection>
          <header>
            <Text size="sm">Sua última leitura</Text>

            <Link text="Ver todas" href={`/profile/${userId}`} />
          </header>

          <RatingCard variant="compact" rating={latestUserRating} />
        </S.LatestSection>
      )}

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </S.LatestRatingContainer>
  )
}
