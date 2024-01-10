import { PageTitle } from '@components/ui/PageTitle'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useMemo, useState } from 'react'
import * as S from './styles'
import { Input } from '@components/ui/form/Input'
import { Text } from '@components/typography/text'
import { Link } from '@components/ui/Link'
import { ProfileRatingCard } from './profile-rating-card'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export const ProfileRatings = ({
  ratings,
  isOwnProfile,
}: ProfileRatingsProps) => {
  const [search, setSearch] = useState('')

  const filteredRatings = useMemo(() => {
    return ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <S.ProfileRatingsContainer>
      {isOwnProfile ? (
        <PageTitle icon={<User size={25} />} title="Perfil" />
      ) : (
        <Link
          href="/"
          text="Voltar"
          iconSide="left"
          color="white"
          css={{ alignSelf: 'flex-start' }}
        />
      )}
      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <S.RatingsList>
        {filteredRatings?.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <>
            <Text color="gray-400" css={{ textAlign: 'center' }}>
              {search
                ? 'Nenhum resultado encontrado'
                : 'Nenhuma avaliação encontrada'}
            </Text>
          </>
        )}
      </S.RatingsList>
    </S.ProfileRatingsContainer>
  )
}
