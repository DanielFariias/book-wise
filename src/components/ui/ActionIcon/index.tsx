import { ReactNode } from 'react'

import { ComponentProps } from '@stitches/react'
import { theme } from 'stitches.config'

import * as S from './styles'

type ActionIconProps = ComponentProps<typeof S.ActionIconContainer> & {
  icon: ReactNode
  iconColor: keyof typeof theme.colors
}

export const ActionIcon = ({ icon, iconColor, ...props }: ActionIconProps) => {
  return (
    <S.ActionIconContainer
      {...props}
      css={{
        color: `$${iconColor}`,
      }}
    >
      {icon}
    </S.ActionIconContainer>
  )
}
