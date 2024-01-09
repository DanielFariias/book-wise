import { GithubLogo, GoogleLogo, RocketLaunch } from '@phosphor-icons/react'

import { AuthButton } from '@components/primitives/auth-button'
import { Text } from '@components/typography/text'

import * as S from './styles'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface IAuthSectionProps {
  callbackUrl?: string
  canGuest?: boolean
}

export function AuthSection({
  callbackUrl = '/',
  canGuest,
}: IAuthSectionProps) {
  const router = useRouter()

  function handleSignIn(provider?: string) {
    if (!provider) return router.push(callbackUrl)

    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <S.AuthSectionContainer>
      <AuthButton onClick={() => handleSignIn('google')}>
        <GoogleLogo weight="bold" size={32} />
        <Text>Entrar com o Google</Text>
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <GithubLogo weight="bold" size={32} />
        <Text> Entrar com o Github </Text>
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <RocketLaunch weight="bold" size={32} />
          <Text> Entrar como visitante </Text>
        </AuthButton>
      )}
    </S.AuthSectionContainer>
  )
}
