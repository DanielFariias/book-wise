import { InputHTMLAttributes, ReactNode } from 'react'

import { CSS } from '@stitches/react'

import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
  css?: CSS
}

export const Input = ({ icon, css, ...props }: InputProps) => {
  return (
    <S.InputContainer css={css}>
      <input {...props} />
      {icon}
    </S.InputContainer>
  )
}
