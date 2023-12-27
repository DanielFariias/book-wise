import { GithubLogo, GoogleLogo, RocketLaunch } from '@phosphor-icons/react'

import { AuthButton } from '@components/primitives/auth-button'
import { Text } from '@components/typography/text'

import * as S from './styles'

export function AuthSection() {
  return (
    <S.AuthSectionContainer>
      <AuthButton>
        <GoogleLogo weight="bold" size={32} />
        <Text>Entrar com o Google</Text>
      </AuthButton>
      <AuthButton>
        <GithubLogo weight="bold" size={32} />
        <Text> Entrar com o Github </Text>
      </AuthButton>
      <AuthButton>
        <RocketLaunch weight="bold" size={32} />
        <Text> Entrar como visitante </Text>
      </AuthButton>
    </S.AuthSectionContainer>
  )
}
