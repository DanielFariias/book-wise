import { PageTitle } from '@components/ui/PageTitle'
import * as S from './styles'
import { ChartLineUp } from '@phosphor-icons/react'
import { Text } from '@components/typography/text'
import { RatingCard } from '@components/rating-card'

export function LatestRating() {
  return (
    <S.LatestRatingContainer>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, index) => (
          <RatingCard
            key={index}
            rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'John Doe',
                avatar_url: 'https://github.com/danielfariias.png',
                email: 'johndoe@gmail.com',
                id: 'dasdadsa',
                created_at: new Date(),
              },
              book: {
                author: 'John Doe',
                cover_url: 'https://github.com/danielfariias.png',
                id: 'dasdadsa',
                name: 'John Doe',
                summary:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                total_pages: 200,
                created_at: new Date(),
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </S.LatestRatingContainer>
  )
}
