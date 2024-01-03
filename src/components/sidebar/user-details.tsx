import { useRouter } from 'next/navigation'

import { signOut, useSession } from 'next-auth/react'

import { SignIn, SignOut } from '@phosphor-icons/react'

import { Avatar } from '@components/ui/Avatar'
import { Text } from '@components/typography/text'

import * as S from './styles'

export function UserDetails() {
  const { data: session } = useSession()
  const router = useRouter()

  const user = session?.user

  const handleOpenProfile = () => {
    router.push(`/profile/${user?.id}`)
  }

  return (
    <footer>
      {!user ? (
        <S.LoginButton href="/login">
          Fazer login
          <SignIn size={20} />
        </S.LoginButton>
      ) : (
        <S.UserDetails>
          <Avatar
            size="sm"
            src={user?.avatar_url}
            alt={user?.name}
            onClick={handleOpenProfile}
            css={{ cursor: 'pointer' }}
          />
          <Text size="sm">{user?.name}</Text>
          <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
        </S.UserDetails>
      )}
    </footer>
  )
}
