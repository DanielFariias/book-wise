import { TextareaHTMLAttributes } from 'react'

import * as S from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number
}

export const Textarea = ({ maxLength, ...props }: TextAreaProps) => {
  const valueLength = String(props.value)?.length ?? 0

  return (
    <S.TextareaContainer>
      <textarea {...props} maxLength={maxLength} />
      {maxLength && (
        <span>
          {valueLength}/{maxLength}
        </span>
      )}
    </S.TextareaContainer>
  )
}
