import { Avatar } from '@components/ui/Avatar'
import * as S from './styles'
import { Heading } from '@components/typography/heading'
import { Text } from '@components/typography/text'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { ProfileDetailsItem } from './profile-details-item'
import { ProfileData } from '@pages/profile/[id].page'

type ProfileDetailsProps = {
  profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <S.ProfileDetailsContainer>
      <S.UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url}
        />
        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>
        <Text size="sm" color="gray-400">
          membro desde {memberSinceYear}
        </Text>
      </S.UserInfo>

      <S.ProfileDetailsWrapper>
        <ProfileDetailsItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lidas"
        />
        <ProfileDetailsItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />
        <ProfileDetailsItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />
        {profile?.mostReadCategory && (
          <ProfileDetailsItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </S.ProfileDetailsWrapper>
    </S.ProfileDetailsContainer>
  )
}
