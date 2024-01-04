import { ReactNode } from 'react'

import { ComponentProps } from '@stitches/react'

import { Heading } from '@components/typography/heading'

import * as S from './styles'

type PageTitleProps = ComponentProps<typeof S.Container> & {
  icon: ReactNode
  title: string
}

export const PageTitle = ({ title, icon, ...props }: PageTitleProps) => {
  return (
    <S.Container {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </S.Container>
  )
}
