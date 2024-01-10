import { ReactNode } from 'react'

import { Heading } from '@components/typography/heading'
import { Text } from '@components/typography/text'

import * as S from './styles'

type ProfileDetailsItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileDetailsItem = ({
  icon,
  info,
  label,
}: ProfileDetailsItemProps) => {
  return (
    <S.ProfileDetailsItemContainer>
      {icon}
      <div>
        <Heading color="gray-200" size="xs">
          {info}
        </Heading>
        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </S.ProfileDetailsItemContainer>
  )
}
