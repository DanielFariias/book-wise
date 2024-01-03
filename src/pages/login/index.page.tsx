import Head from 'next/head'

import Image from 'next/image'

import { Heading } from '@components/typography/heading'
import { AuthSection } from '@components/auth-section'
import { Text } from '@components/typography/text'

import Logo from '@assets/logo.svg'

import * as S from './styles'

export default function LoginPage() {
  return (
    <S.LoginContainer>
      <Head>
        <title>Login | BookWise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <S.LogoSection>
        <Image src={Logo} alt="BookWise logo" />
      </S.LogoSection>

      <S.RegisterSection>
        <Heading size={'lg'} color={'gray-100'}>
          Boas vindas!
        </Heading>
        <Text color={'gray-200'}>Faça seu login ou acesse como visitante.</Text>

        <AuthSection />
      </S.RegisterSection>
    </S.LoginContainer>
  )
}
