import { DefaultLayout } from '@layouts/default'
import { ReactElement } from 'react'
import * as HomeS from '@pages/home/styles'
import { ProfileRating, ProfileRatings } from '@components/profile-ratings'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'
import { ProfileDetails } from '@components/profile-details'

export type ProfileData = {
  ratings: ProfileRating[]
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

function ProfilePage() {
  const params = useParams()
  const userId = params?.id as string

  const { data: session } = useSession()
  const isOwnProfile = session?.user?.id === userId

  const { data: profile } = useQuery<ProfileData>({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const response = await api.get(`/profile/${userId}`)
      return response.data?.profile ?? []
    },
    enabled: !!userId,
  })

  return (
    <HomeS.HomeContainer>
      {profile ? (
        <>
          <ProfileRatings
            ratings={profile?.ratings}
            isOwnProfile={isOwnProfile}
          />
          <ProfileDetails profile={profile} />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </HomeS.HomeContainer>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default ProfilePage
