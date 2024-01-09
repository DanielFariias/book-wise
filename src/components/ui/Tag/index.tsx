import { ReactNode } from 'react'

import { ComponentProps } from '@stitches/react'

import * as S from './styles'

type TagProps = ComponentProps<typeof S.TagContainer> & {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <S.TagContainer active={active} {...props}>
      {children}
    </S.TagContainer>
  )
}
