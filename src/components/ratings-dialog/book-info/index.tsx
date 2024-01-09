import { ReactNode } from 'react'

import * as S from './styles'
import { Text } from '@components/typography/text'
import { Heading } from '@components/typography/heading'

interface IBookInfoProps {
  icon: ReactNode
  title: string
  info: string
}

export const BookInfo = ({ icon, title, info }: IBookInfoProps) => {
  return (
    <S.BookInfoContainer>
      {icon}
      <div>
        <Text size="sm" color="gray-300">
          {title}
        </Text>
        <Heading size="sm" color="gray-200">
          {info}
        </Heading>
      </div>
    </S.BookInfoContainer>
  )
}
